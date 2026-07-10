// ============================================================
//  UNDANGAN - Google Apps Script Backend
//  Auto-setup: Spreadsheet + GDrive folder
//  Versi: 1.0.0
//  
//  CARA DEPLOY:
//  1. Buka script.google.com → New Project → paste file ini
//  2. Jalankan fungsi setup() SEKALI untuk inisialisasi
//  3. Deploy → New Deployment → Web App
//     - Execute as: Me
//     - Who has access: Anyone
//  4. Copy Web App URL → paste ke data-url di index.html
// ============================================================

// ─────────────────────────────────────────────
//  KONSTANTA KONFIGURASI
// ─────────────────────────────────────────────
const CONFIG = {
  SPREADSHEET_NAME : 'Undangan DB',
  FOLDER_NAME      : 'Undangan Assets',
  SHEET_USER       : 'users',
  SHEET_COMMENT    : 'comments',
  SHEET_LIKE       : 'likes',
  SHEET_CONFIG     : 'app_config',
  JWT_SECRET       : 'GANTI_SECRET_KEY_ANDA_DISINI',   // ganti sebelum deploy!
  JWT_EXPIRE_HOURS : 72,
  CACHE_TTL        : 21600,     // detik – 6 jam
  MAX_COMMENT_LEN  : 1000,
  PER_PAGE_DEFAULT : 10,
};

// ─────────────────────────────────────────────
//  SETUP OTOMATIS (jalankan SEKALI)
// ─────────────────────────────────────────────
function setup() {
  Logger.log('▶ Memulai setup...');

  // 1. Buat / temukan folder di GDrive
  const folder = _getOrCreateFolder(CONFIG.FOLDER_NAME);
  Logger.log('✅ Folder GDrive: ' + folder.getUrl());

  // 2. Buat / temukan Spreadsheet di dalam folder tsb
  const ss = _getOrCreateSpreadsheet(CONFIG.SPREADSHEET_NAME, folder);
  Logger.log('✅ Spreadsheet: ' + ss.getUrl());

  // 3. Simpan ID spreadsheet ke PropertiesService
  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', ss.getId());
  PropertiesService.getScriptProperties().setProperty('FOLDER_ID', folder.getId());

  // 4. Buat sheet-sheet yang diperlukan
  _ensureSheet(ss, CONFIG.SHEET_USER,    ['id','email','password','name','access_key','tz','is_filter','is_confetti_animation','can_reply','can_edit','can_delete','tenor_key','created_at']);
  _ensureSheet(ss, CONFIG.SHEET_COMMENT, ['uuid','own','name','presence','comment','gif_url','ip','user_agent','parent_id','created_at','is_admin','updated_at']);
  _ensureSheet(ss, CONFIG.SHEET_LIKE,    ['uuid','comment_uuid','own','created_at']);
  _ensureSheet(ss, CONFIG.SHEET_CONFIG,  ['key','value']);

  // 5. Buat akun admin default jika belum ada
  _seedAdmin(ss);

  Logger.log('🎉 Setup selesai! Silakan Deploy sebagai Web App.');
  Logger.log('   Spreadsheet URL: ' + ss.getUrl());
}


// ─────────────────────────────────────────────
//  ENTRY POINT – doGet / doPost
// ─────────────────────────────────────────────

/**
 * Handle preflight OPTIONS dan semua GET request dari browser.
 * Semua request (termasuk yang aslinya POST/PATCH/PUT/DELETE)
 * dikirim sebagai GET dengan ?_method= dan ?_body= dari frontend.
 */
function doGet(e) {
  return _route('GET', e);
}

/**
 * Tetap disediakan sebagai fallback.
 */
function doPost(e) {
  return _route('POST', e);
}

/**
 * Router utama – memetakan method + path ke handler
 * @param {string} method
 * @param {GoogleAppsScript.Events.DoGet} e
 */
function _route(method, e) {
  try {
    const params = e.parameter || {};

    // Path: dari ?_path= (GAS mode) atau e.pathInfo (non-GAS / testing)
    const path = (params._path || e.pathInfo || '').replace(/^\/+|\/+$/g, '');

    let body = {};

    // Baca body dari ?_body= (dikirim sebagai base64 dari frontend GAS mode)
    if (params._body) {
      try {
        const decoded = Utilities.newBlob(Utilities.base64Decode(params._body)).getDataAsString();
        body = JSON.parse(decoded);
      } catch (_) { body = {}; }
    }

    // Fallback: baca dari postData jika ada (non-GAS request / testing)
    if (method === 'POST' && e.postData && e.postData.contents && Object.keys(body).length === 0) {
      try { body = JSON.parse(e.postData.contents); } catch (_) { body = {}; }
    }

    // Override method via ?_method= (GAS hanya support GET/POST dari browser)
    const realMethod = (params._method || method).toUpperCase();

    const ctx = { method: realMethod, path, params, body, e };

    // ── routing tabel ──────────────────────────────────────────
    if (realMethod === 'POST'  && path === 'api/session')           return _handleLogin(ctx);
    if (realMethod === 'GET'   && path === 'api/user')              return _handleGetUser(ctx);
    if (realMethod === 'PATCH' && path === 'api/user')              return _handlePatchUser(ctx);
    if (realMethod === 'GET'   && path === 'api/stats')             return _handleStats(ctx);
    if (realMethod === 'GET'   && path === 'api/v2/config')         return _handleConfig(ctx);
    if (realMethod === 'PUT'   && path === 'api/key')               return _handleRegenerateKey(ctx);
    if (realMethod === 'GET'   && path === 'api/download')          return _handleDownload(ctx);

    // comments
    if (realMethod === 'GET'   && path === 'api/v2/comment')        return _handleGetComments(ctx);
    if (realMethod === 'POST'  && path === 'api/comment')           return _handlePostComment(ctx);

    // comment by own (edit/delete)
    const ownMatch = path.match(/^api\/comment\/([^/]+)$/);
    if (ownMatch) {
      ctx.ownId = ownMatch[1];
      if (realMethod === 'PUT')    return _handleUpdateComment(ctx);
      if (realMethod === 'DELETE') return _handleDeleteComment(ctx);
      if (realMethod === 'POST')   return _handleLike(ctx);       // POST /api/comment/:uuid  → like
      if (realMethod === 'PATCH')  return _handleUnlike(ctx);     // PATCH /api/comment/:likeOwn → unlike
    }

    return _res(404, null, ['Route not found']);
  } catch (err) {
    return _res(500, null, [err.message], _uuid());
  }
}


// ─────────────────────────────────────────────
//  HANDLER: AUTH
// ─────────────────────────────────────────────
function _handleLogin(ctx) {
  const { email, password } = ctx.body;
  if (!email || !password) return _res(422, null, ['Email and password required']);

  const sheet = _getSheet(CONFIG.SHEET_USER);
  const rows  = _getAllRows(sheet);
  const user  = rows.find(r => r.email === email.trim().toLowerCase());

  if (!user) return _res(422, null, ['Invalid credentials']);

  const hashed = _hashPassword(password);
  if (user.password !== hashed) return _res(422, null, ['Invalid credentials']);

  const token = _createJWT({ sub: user.id, email: user.email });
  return _res(200, { token });
}

// ─────────────────────────────────────────────
//  HANDLER: USER
// ─────────────────────────────────────────────
function _handleGetUser(ctx) {
  const user = _requireAdmin(ctx);
  if (user.error) return user.error;

  return _res(200, {
    name              : user.name,
    email             : user.email,
    access_key        : user.access_key,
    tz                : user.tz || 'Asia/Jakarta',
    is_filter         : user.is_filter === 'true' || user.is_filter === true,
    is_confetti_animation: user.is_confetti_animation === 'true' || user.is_confetti_animation === true,
    can_reply         : user.can_reply === 'true' || user.can_reply === true,
    can_edit          : user.can_edit  === 'true' || user.can_edit  === true,
    can_delete        : user.can_delete=== 'true' || user.can_delete=== true,
    tenor_key         : user.tenor_key || null,
  });
}

function _handlePatchUser(ctx) {
  const admin = _requireAdmin(ctx);
  if (admin.error) return admin.error;

  const sheet  = _getSheet(CONFIG.SHEET_USER);
  const rowIdx = _findRowIndex(sheet, 'id', admin.id);
  const allowed = ['name','tz','is_filter','is_confetti_animation','can_reply','can_edit','can_delete','tenor_key','filter','confetti_animation'];

  const updates = ctx.body;

  // ganti password
  if (updates.old_password !== undefined) {
    if (_hashPassword(updates.old_password) !== admin.password) {
      return _res(422, null, ['Old password is wrong']);
    }
    if (!updates.new_password || updates.new_password.length < 8) {
      return _res(422, null, ['New password min 8 chars']);
    }
    _setCellByHeader(sheet, rowIdx, 'password', _hashPassword(updates.new_password));
    return _res(200, { status: true });
  }

  // patch field lain
  Object.keys(updates).forEach(k => {
    const col = k === 'filter' ? 'is_filter' : k === 'confetti_animation' ? 'is_confetti_animation' : k;
    if (allowed.includes(k)) _setCellByHeader(sheet, rowIdx, col, updates[k]);
  });

  return _res(200, { status: true });
}

function _handleRegenerateKey(ctx) {
  const admin = _requireAdmin(ctx);
  if (admin.error) return admin.error;

  const newKey = _generateAccessKey();
  const sheet  = _getSheet(CONFIG.SHEET_USER);
  const rowIdx = _findRowIndex(sheet, 'id', admin.id);
  _setCellByHeader(sheet, rowIdx, 'access_key', newKey);

  return _res(200, { status: true });
}


// ─────────────────────────────────────────────
//  HANDLER: CONFIG (untuk guest)
// ─────────────────────────────────────────────
function _handleConfig(ctx) {
  // autentikasi via access_key: header x-access-key, ?_key=, atau ?k=
  const key   = _getHeader(ctx.e, 'x-access-key')
    || ctx.params._key
    || ctx.params.k;
  const sheet  = _getSheet(CONFIG.SHEET_USER);
  const rows   = _getAllRows(sheet);
  const user   = rows.find(r => r.access_key === key);

  if (!user) return _res(401, null, ['Unauthorized']);

  return _res(200, {
    tz                   : user.tz || 'Asia/Jakarta',
    is_filter            : user.is_filter === 'true' || user.is_filter === true,
    is_confetti_animation: user.is_confetti_animation === 'true' || user.is_confetti_animation === true,
    can_reply            : user.can_reply === 'true' || user.can_reply === true,
    can_edit             : user.can_edit  === 'true' || user.can_edit  === true,
    can_delete           : user.can_delete=== 'true' || user.can_delete=== true,
    tenor_key            : user.tenor_key || null,
  });
}

// ─────────────────────────────────────────────
//  HANDLER: STATS
// ─────────────────────────────────────────────
function _handleStats(ctx) {
  const admin = _requireAdmin(ctx);
  if (admin.error) return admin.error;

  const cSheet = _getSheet(CONFIG.SHEET_COMMENT);
  const lSheet = _getSheet(CONFIG.SHEET_LIKE);
  const comments = _getAllRows(cSheet);
  const likes    = _getAllRows(lSheet);

  const total   = comments.length;
  const present = comments.filter(r => r.presence === 'true' || r.presence === true).length;
  const absent  = comments.filter(r => r.presence === 'false' || r.presence === false).length;

  return _res(200, {
    comments: total,
    likes   : likes.length,
    present,
    absent,
  });
}

// ─────────────────────────────────────────────
//  HANDLER: DOWNLOAD CSV
// ─────────────────────────────────────────────
function _handleDownload(ctx) {
  const admin = _requireAdmin(ctx);
  if (admin.error) return admin.error;

  const sheet    = _getSheet(CONFIG.SHEET_COMMENT);
  const comments = _getAllRows(sheet);

  const header = ['uuid','name','presence','comment','ip','created_at'];
  const rows   = comments.filter(r => !r.parent_id).map(r =>
    header.map(h => '"' + String(r[h] || '').replace(/"/g, '""') + '"').join(',')
  );

  const csv = [header.join(','), ...rows].join('\n');

  return ContentService.createTextOutput(csv)
    .setMimeType(ContentService.MimeType.CSV);
}


// ─────────────────────────────────────────────
//  HANDLER: GET COMMENTS (paginasi + nested)
// ─────────────────────────────────────────────
function _handleGetComments(ctx) {
  // autentikasi: admin JWT atau guest access_key
  const authInfo = _resolveAuth(ctx);

  const per    = parseInt(ctx.params.per  || CONFIG.PER_PAGE_DEFAULT);
  const next   = parseInt(ctx.params.next || 0);
  const lang   = ctx.params.lang || 'id';

  const sheet    = _getSheet(CONFIG.SHEET_COMMENT);
  const lSheet   = _getSheet(CONFIG.SHEET_LIKE);
  const allComments = _getAllRows(sheet);
  const allLikes    = _getAllRows(lSheet);

  // Ambil komentar top-level (parent_id kosong) → urutkan terbaru dulu
  const parents = allComments
    .filter(r => !r.parent_id || r.parent_id === '')
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const total   = parents.length;
  const sliced  = parents.slice(next, next + per);

  // Bangun tree
  const buildComment = (row) => {
    const likeCount = allLikes.filter(l => l.comment_uuid === row.uuid).length;
    const children  = allComments
      .filter(r => r.parent_id === row.uuid)
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      .map(buildComment);

    return {
      uuid      : row.uuid,
      own       : row.own,
      name      : row.name,
      presence  : row.presence === 'true' || row.presence === true,
      comment   : row.comment   || null,
      created_at: row.created_at,
      is_admin  : row.is_admin  === 'true' || row.is_admin === true,
      is_parent : !row.parent_id || row.parent_id === '',
      gif_url   : row.gif_url   || null,
      ip        : authInfo.isAdmin ? (row.ip || null)         : null,
      user_agent: authInfo.isAdmin ? (row.user_agent || null) : null,
      comments  : children,
      like_count: likeCount,
    };
  };

  const lists = sliced.map(buildComment);

  return _res(200, { count: total, lists });
}

// ─────────────────────────────────────────────
//  HANDLER: POST COMMENT (kirim / reply)
// ─────────────────────────────────────────────
function _handlePostComment(ctx) {
  const authInfo = _resolveAuth(ctx);
  const { id: parentId, name, presence, comment, gif_id } = ctx.body;

  if (!name || name.trim().length === 0) return _res(422, null, ['Name cannot be empty']);
  if (!comment && !gif_id) return _res(422, null, ['Comment cannot be empty']);
  if (comment && comment.length > CONFIG.MAX_COMMENT_LEN) return _res(422, null, ['Comment too long']);

  const sheet   = _getSheet(CONFIG.SHEET_COMMENT);
  const newUuid = _uuid();
  const own     = _uuid();
  const now     = new Date().toISOString();

  // ambil IP & UA dari request (GAS tidak expose langsung, gunakan placeholder)
  const ip        = _getHeader(ctx.e, 'x-forwarded-for') || '';
  const userAgent = _getHeader(ctx.e, 'user-agent') || '';

  // resolusi gif URL dari Tenor jika ada gif_id
  let gifUrl = null;
  if (gif_id) {
    gifUrl = _resolveTenorGif(gif_id, authInfo);
  }

  const row = [
    newUuid,
    own,
    name.trim().substring(0, 100),
    String(presence === true || presence === 'true'),
    comment ? comment.substring(0, CONFIG.MAX_COMMENT_LEN) : null,
    gifUrl,
    ip,
    userAgent,
    parentId || '',
    now,
    String(authInfo.isAdmin),
    now,
  ];

  sheet.appendRow(row);

  return _res(201, {
    uuid      : newUuid,
    own,
    name      : name.trim().substring(0, 100),
    presence  : presence === true || presence === 'true',
    comment   : comment || null,
    created_at: now,
    is_admin  : authInfo.isAdmin,
    is_parent : !parentId,
    gif_url   : gifUrl,
    ip        : authInfo.isAdmin ? ip : null,
    user_agent: authInfo.isAdmin ? userAgent : null,
    comments  : [],
    like_count: 0,
  });
}


// ─────────────────────────────────────────────
//  HANDLER: UPDATE COMMENT (PUT)
// ─────────────────────────────────────────────
function _handleUpdateComment(ctx) {
  const authInfo  = _resolveAuth(ctx);
  const own       = ctx.ownId;
  const { presence, comment, gif_id } = ctx.body;

  const sheet  = _getSheet(CONFIG.SHEET_COMMENT);
  const rowIdx = _findRowIndex(sheet, 'own', own);

  if (rowIdx < 0) return _res(404, null, ['Comment not found']);

  // Hanya pemilik (own token) atau admin yang boleh edit
  const rows   = _getAllRows(sheet);
  const target = rows.find(r => r.own === own);

  if (!target) return _res(404, null, ['Comment not found']);
  if (!authInfo.isAdmin && !target) return _res(403, null, ['Forbidden']);

  const now = new Date().toISOString();

  if (comment !== undefined && comment !== null) {
    if (comment.length > CONFIG.MAX_COMMENT_LEN) return _res(422, null, ['Comment too long']);
    _setCellByHeader(sheet, rowIdx, 'comment', comment);
    _setCellByHeader(sheet, rowIdx, 'gif_url', null);
  }

  if (gif_id !== undefined && gif_id !== null) {
    const gifUrl = _resolveTenorGif(gif_id, authInfo);
    _setCellByHeader(sheet, rowIdx, 'gif_url', gifUrl);
    _setCellByHeader(sheet, rowIdx, 'comment', null);
  }

  if (presence !== undefined && presence !== null) {
    _setCellByHeader(sheet, rowIdx, 'presence', String(presence === true || presence === 'true'));
  }

  _setCellByHeader(sheet, rowIdx, 'updated_at', now);

  return _res(200, { status: true });
}

// ─────────────────────────────────────────────
//  HANDLER: DELETE COMMENT
// ─────────────────────────────────────────────
function _handleDeleteComment(ctx) {
  const authInfo = _resolveAuth(ctx);
  const own      = ctx.ownId;

  const sheet  = _getSheet(CONFIG.SHEET_COMMENT);
  const rows   = _getAllRows(sheet);
  const target = rows.find(r => r.own === own);

  if (!target) return _res(404, null, ['Comment not found']);

  const rowIdx = _findRowIndex(sheet, 'own', own);
  if (rowIdx < 0) return _res(404, null, ['Comment not found']);

  // Kumpulkan semua uuid yang perlu dihapus (comment ini + semua reply-nya)
  const toDelete = _collectDescendants(rows, target.uuid);
  toDelete.push(target.uuid);

  // Hapus dari bawah ke atas agar index tidak geser
  const allRowsRefreshed = _getAllRows(sheet);
  const indices = allRowsRefreshed
    .map((r, i) => toDelete.includes(r.uuid) ? i + 2 : null)  // +2: header row + 1-based
    .filter(i => i !== null)
    .sort((a, b) => b - a);  // hapus dari bawah

  indices.forEach(i => sheet.deleteRow(i));

  // Hapus juga likes yang terkait
  const lSheet   = _getSheet(CONFIG.SHEET_LIKE);
  const lRows    = _getAllRows(lSheet);
  const lIndices = lRows
    .map((r, i) => toDelete.includes(r.comment_uuid) ? i + 2 : null)
    .filter(i => i !== null)
    .sort((a, b) => b - a);

  lIndices.forEach(i => lSheet.deleteRow(i));

  return _res(200, { status: true });
}

// ─────────────────────────────────────────────
//  HANDLER: LIKE (POST /api/comment/:uuid)
// ─────────────────────────────────────────────
function _handleLike(ctx) {
  const uuid = ctx.ownId;  // di sini ownId sebenarnya adalah comment uuid

  const lSheet   = _getSheet(CONFIG.SHEET_LIKE);
  const newOwn   = _uuid();
  const newUuid  = _uuid();
  const now      = new Date().toISOString();

  lSheet.appendRow([newUuid, uuid, newOwn, now]);

  return _res(201, { uuid: newOwn });
}

// ─────────────────────────────────────────────
//  HANDLER: UNLIKE (PATCH /api/comment/:likeOwn)
// ─────────────────────────────────────────────
function _handleUnlike(ctx) {
  const likeOwn = ctx.ownId;

  const lSheet = _getSheet(CONFIG.SHEET_LIKE);
  const lRows  = _getAllRows(lSheet);
  const rowIdx = lRows.findIndex(r => r.own === likeOwn);

  if (rowIdx < 0) return _res(404, null, ['Like not found']);

  lSheet.deleteRow(rowIdx + 2);  // +2: header + 1-based

  return _res(200, { status: true });
}


// ─────────────────────────────────────────────
//  HELPER: AUTENTIKASI
// ─────────────────────────────────────────────

/**
 * Wajib admin (JWT). Mengembalikan object user atau { error: Response }
 */
function _requireAdmin(ctx) {
  // Token bisa dari: header Authorization, atau ?_token= (GAS GET mode)
  const authHeader = _getHeader(ctx.e, 'authorization') || '';
  const token = (authHeader.replace(/^Bearer\s+/i, '').trim())
    || (ctx.params._token || '');

  if (!token) return { error: _res(401, null, ['Unauthorized']) };

  const payload = _verifyJWT(token);
  if (!payload) return { error: _res(401, null, ['Token invalid or expired']) };

  const sheet = _getSheet(CONFIG.SHEET_USER);
  const rows  = _getAllRows(sheet);
  const user  = rows.find(r => r.id === payload.sub);

  if (!user) return { error: _res(401, null, ['User not found']) };

  return user;
}

/**
 * Resolusi auth: bisa JWT admin atau access_key guest
 * @returns {{ isAdmin: boolean, user: object|null }}
 */
function _resolveAuth(ctx) {
  // Coba JWT dulu (header Authorization atau ?_token=)
  const authHeader = _getHeader(ctx.e, 'authorization') || '';
  const token = (authHeader.replace(/^Bearer\s+/i, '').trim())
    || (ctx.params._token || '');

  if (token) {
    const payload = _verifyJWT(token);
    if (payload) {
      const sheet = _getSheet(CONFIG.SHEET_USER);
      const rows  = _getAllRows(sheet);
      const user  = rows.find(r => r.id === payload.sub);
      if (user) return { isAdmin: true, user };
    }
  }

  // Coba access_key (header x-access-key, ?_key=, atau ?k=)
  const key = _getHeader(ctx.e, 'x-access-key')
    || ctx.params._key
    || ctx.params.k;

  if (key) {
    const sheet = _getSheet(CONFIG.SHEET_USER);
    const rows  = _getAllRows(sheet);
    const user  = rows.find(r => r.access_key === key);
    if (user) return { isAdmin: false, user };
  }

  return { isAdmin: false, user: null };
}

// ─────────────────────────────────────────────
//  HELPER: JWT  (HS256 ringan pakai Utilities)
// ─────────────────────────────────────────────
function _createJWT(payload) {
  const header  = { alg: 'HS256', typ: 'JWT' };
  const now     = Math.floor(Date.now() / 1000);
  const claims  = Object.assign({ iat: now, exp: now + CONFIG.JWT_EXPIRE_HOURS * 3600 }, payload);

  const b64h    = _b64url(JSON.stringify(header));
  const b64p    = _b64url(JSON.stringify(claims));
  const sig     = _hmacSha256(b64h + '.' + b64p, CONFIG.JWT_SECRET);

  return b64h + '.' + b64p + '.' + sig;
}

function _verifyJWT(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const expected = _hmacSha256(parts[0] + '.' + parts[1], CONFIG.JWT_SECRET);
    if (expected !== parts[2]) return null;

    const payload = JSON.parse(_b64urlDecode(parts[1]));
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;

    return payload;
  } catch (_) { return null; }
}

function _b64url(str) {
  return Utilities.base64EncodeWebSafe(str).replace(/=+$/, '');
}

function _b64urlDecode(str) {
  const pad = str + '==='.slice((str.length + 3) % 4);
  return Utilities.newBlob(Utilities.base64DecodeWebSafe(pad)).getDataAsString();
}

function _hmacSha256(data, secret) {
  const sig = Utilities.computeHmacSha256Signature(data, secret);
  return Utilities.base64EncodeWebSafe(sig).replace(/=+$/, '');
}


// ─────────────────────────────────────────────
//  HELPER: PASSWORD HASH  (SHA-256)
// ─────────────────────────────────────────────
function _hashPassword(plain) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, plain);
  return bytes.map(b => ('0' + (b & 0xff).toString(16)).slice(-2)).join('');
}

// ─────────────────────────────────────────────
//  HELPER: SPREADSHEET OPERATIONS
// ─────────────────────────────────────────────
function _getSpreadsheet() {
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Spreadsheet ID belum di-setup. Jalankan setup() terlebih dahulu.');
  return SpreadsheetApp.openById(id);
}

function _getSheet(name) {
  return _getSpreadsheet().getSheetByName(name);
}

/**
 * Baca semua baris sheet sebagai array object {header: value}
 */
function _getAllRows(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  const headers = data[0];
  return data.slice(1).map(row =>
    headers.reduce((obj, h, i) => { obj[h] = row[i] === '' ? null : row[i]; return obj; }, {})
  );
}

/**
 * Cari 1-based row index berdasarkan kolom + nilai
 * @returns {number} rowIndex (1-based, -1 jika tidak ketemu)
 */
function _findRowIndex(sheet, colName, value) {
  const data    = sheet.getDataRange().getValues();
  const headers = data[0];
  const colIdx  = headers.indexOf(colName);
  if (colIdx < 0) return -1;

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][colIdx]) === String(value)) return i + 1; // 1-based
  }
  return -1;
}

/**
 * Set nilai sel berdasarkan header
 */
function _setCellByHeader(sheet, rowIdx, colName, value) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const colIdx  = headers.indexOf(colName) + 1; // 1-based
  if (colIdx > 0) sheet.getRange(rowIdx, colIdx).setValue(value === undefined ? null : value);
}

/**
 * Kumpulkan semua uuid turunan (replies dari reply dst.)
 */
function _collectDescendants(rows, parentUuid) {
  const direct = rows.filter(r => r.parent_id === parentUuid).map(r => r.uuid);
  const nested = direct.flatMap(uid => _collectDescendants(rows, uid));
  return [...direct, ...nested];
}

// ─────────────────────────────────────────────
//  HELPER: SETUP UTILITIES
// ─────────────────────────────────────────────
function _getOrCreateFolder(name) {
  const iter = DriveApp.getFoldersByName(name);
  return iter.hasNext() ? iter.next() : DriveApp.createFolder(name);
}

function _getOrCreateSpreadsheet(name, folder) {
  const iter = folder.getFilesByName(name);
  if (iter.hasNext()) {
    return SpreadsheetApp.openById(iter.next().getId());
  }
  const ss = SpreadsheetApp.create(name);
  const file = DriveApp.getFileById(ss.getId());
  folder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);
  return ss;
}

function _ensureSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    // Format header
    sheet.getRange(1, 1, 1, headers.length)
      .setBackground('#4285F4')
      .setFontColor('#FFFFFF')
      .setFontWeight('bold');
    Logger.log('  ✅ Sheet dibuat: ' + name);
  } else {
    Logger.log('  ♻ Sheet sudah ada: ' + name);
  }
  return sheet;
}

function _seedAdmin(ss) {
  const sheet = ss.getSheetByName(CONFIG.SHEET_USER);
  const rows  = _getAllRows(sheet);

  if (rows.length > 0) {
    Logger.log('  ♻ Admin sudah ada, skip seed.');
    return;
  }

  const now = new Date().toISOString();
  sheet.appendRow([
    _uuid(),
    'admin@undangan.com',
    _hashPassword('password123'),
    'Admin',
    _generateAccessKey(),
    'Asia/Jakarta',
    'false', 'true', 'true', 'true', 'true',
    null,
    now,
  ]);
  Logger.log('  ✅ Admin default dibuat: admin@undangan.com / password123');
  Logger.log('  ⚠️  SEGERA GANTI PASSWORD setelah login pertama!');
}


// ─────────────────────────────────────────────
//  HELPER: RESPONSE
// ─────────────────────────────────────────────
/**
 * Buat ContentService JSON response.
 * GAS Web App otomatis menambahkan CORS header saat:
 *   - Deploy dengan "Who has access: Anyone"
 *   - Request menggunakan GET (simple request, no preflight)
 * Itulah kenapa frontend kita konversi semua request ke GET.
 *
 * @param {number} code
 * @param {any} data
 * @param {string[]|null} error
 * @param {string|null} id  – error tracking id
 */
function _res(code, data, error, id) {
  const payload = { code, data: data !== undefined ? data : null, error: error || null };
  if (id) payload.id = id;

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─────────────────────────────────────────────
//  HELPER: MISC
// ─────────────────────────────────────────────
function _uuid() {
  const hex = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    Date.now() + Math.random().toString()
  ).map(b => ('0' + (b & 0xff).toString(16)).slice(-2)).join('');

  // Format UUID v4-like: 8-4-4-4-12
  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    '4' + hex.slice(13, 16),
    (parseInt(hex.slice(16, 17), 16) & 0x3 | 0x8).toString(16) + hex.slice(17, 20),
    hex.slice(20, 32),
  ].join('-');
}

function _generateAccessKey() {
  const bytes = Utilities.computeHmacSha256Signature(
    Date.now().toString() + Math.random().toString(),
    CONFIG.JWT_SECRET
  );
  return bytes.map(b => ('0' + (b & 0xff).toString(16)).slice(-2)).join('').slice(0, 50);
}

/**
 * Baca request header dari GAS event object
 * GAS tidak expose req.headers secara langsung, gunakan parameter fallback
 */
function _getHeader(e, name) {
  try {
    // Beberapa deployment GAS mendukung e.headers (tergantung versi)
    if (e && e.headers) {
      const found = Object.keys(e.headers).find(k => k.toLowerCase() === name.toLowerCase());
      return found ? e.headers[found] : null;
    }
  } catch (_) { /* ignore */ }
  return null;
}

/**
 * Resolve Tenor GIF URL dari gif_id
 * Memerlukan Tenor API key di pengaturan user
 */
function _resolveTenorGif(gifId, authInfo) {
  if (!gifId) return null;

  try {
    const tenorKey = authInfo && authInfo.user && authInfo.user.tenor_key
      ? authInfo.user.tenor_key
      : null;

    if (!tenorKey) {
      // Fallback: return Tenor embed URL langsung
      return 'https://media.tenor.com/' + gifId + '/gif.gif';
    }

    const url  = 'https://tenor.googleapis.com/v2/posts?ids=' + gifId + '&key=' + tenorKey + '&limit=1';
    const resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const json = JSON.parse(resp.getContentText());

    if (json.results && json.results.length > 0) {
      const media = json.results[0].media_formats;
      return (media.gif || media.tinygif || media.nanogif)?.url || null;
    }
  } catch (err) {
    Logger.log('Tenor error: ' + err.message);
  }

  return null;
}

// ─────────────────────────────────────────────
//  UTILITY: Reset data (untuk testing, hati-hati!)
// ─────────────────────────────────────────────
function clearAllComments() {
  const sheet = _getSheet(CONFIG.SHEET_COMMENT);
  const last  = sheet.getLastRow();
  if (last > 1) sheet.deleteRows(2, last - 1);

  const lSheet = _getSheet(CONFIG.SHEET_LIKE);
  const lLast  = lSheet.getLastRow();
  if (lLast > 1) lSheet.deleteRows(2, lLast - 1);

  Logger.log('✅ Semua komentar dan likes dihapus.');
}

