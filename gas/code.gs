// ============================================================
//  UNDANGAN - Google Apps Script Backend  v2.0
//
//  Arsitektur simpel: semua request pakai GET + query params
//  Frontend mengirim:
//    ?action=login&email=x&password=y
//    ?action=getComments&per=10&next=0&key=xxx
//    ?action=postComment&key=xxx&name=x&presence=true&comment=x
//    dll.
//
//  CORS: GET simple request = tidak ada preflight = tidak ada CORS error
//
//  CARA DEPLOY:
//  1. script.google.com → New Project → paste ini
//  2. Jalankan setup() sekali
//  3. Deploy → Web App → Execute as: Me → Who has access: Anyone
//  4. Salin URL → data-url di index.html & dashboard.html
// ============================================================

const CFG = {
  SS_NAME  : 'Undangan DB',
  DIR_NAME : 'Undangan Assets',
  S_USER   : 'users',
  S_CMT    : 'comments',
  S_LIKE   : 'likes',
  SECRET   : 'GANTI_SECRET_UNIK_DISINI',
  JWT_EXP  : 72,   // jam
  MAX_CMT  : 1000,
  PER_PAGE : 10,
};

// ─────────────────────────────────────────────
//  SETUP (jalankan sekali)
// ─────────────────────────────────────────────
function setup() {
  const folder = _ensureFolder(CFG.DIR_NAME);
  const ss     = _ensureSS(CFG.SS_NAME, folder);
  PropertiesService.getScriptProperties().setProperties({
    SS_ID    : ss.getId(),
    FOLDER_ID: folder.getId(),
  });
  _ensureSheet(ss, CFG.S_USER,  ['id','email','password','name','access_key','tz','is_filter','is_confetti','can_reply','can_edit','can_delete','tenor_key','created_at']);
  _ensureSheet(ss, CFG.S_CMT,   ['uuid','own','name','presence','comment','gif_url','ip','user_agent','parent_id','created_at','is_admin','updated_at']);
  _ensureSheet(ss, CFG.S_LIKE,  ['uuid','comment_uuid','own','created_at']);
  _seedAdmin(ss);
  Logger.log('✅ Setup selesai! SS: ' + ss.getUrl());
}

// ─────────────────────────────────────────────
//  ENTRY POINT
// ─────────────────────────────────────────────
function doGet(e) {
  const p      = e.parameter || {};
  const action = p.action || '';
  try {
    let data;
    switch (action) {
      case 'login':          data = actLogin(p);          break;
      case 'getUser':        data = actGetUser(p);        break;
      case 'patchUser':      data = actPatchUser(p);      break;
      case 'getConfig':      data = actGetConfig(p);      break;
      case 'getStats':       data = actGetStats(p);       break;
      case 'getComments':    data = actGetComments(p);    break;
      case 'postComment':    data = actPostComment(p);    break;
      case 'updateComment':  data = actUpdateComment(p);  break;
      case 'deleteComment':  data = actDeleteComment(p);  break;
      case 'likeComment':    data = actLikeComment(p);    break;
      case 'unlikeComment':  data = actUnlikeComment(p);  break;
      case 'regenerateKey':  data = actRegenerateKey(p);  break;
      case 'download':       return actDownload(p);
      default:               data = _resp(404, null, ['Unknown action']);
    }
    return _out(data);
  } catch (err) {
    return _out(_resp(500, null, [err.message]));
  }
}

// ─────────────────────────────────────────────
//  ACTIONS
// ─────────────────────────────────────────────
function actLogin(p) {
  const { email, password } = p;
  if (!email || !password) return _resp(422, null, ['Email and password required']);
  const user = _findUser('email', email.trim().toLowerCase());
  if (!user || user.password !== _sha256(password)) return _resp(422, null, ['Invalid credentials']);
  return _resp(200, { token: _jwtCreate({ sub: user.id, email: user.email }) });
}

function actGetUser(p) {
  const user = _adminAuth(p);
  if (user._err) return user._err;
  return _resp(200, {
    name: user.name, email: user.email, access_key: user.access_key,
    tz: user.tz || 'Asia/Jakarta',
    is_filter: _bool(user.is_filter), is_confetti_animation: _bool(user.is_confetti),
    can_reply: _bool(user.can_reply), can_edit: _bool(user.can_edit), can_delete: _bool(user.can_delete),
    tenor_key: user.tenor_key || null,
  });
}

function actPatchUser(p) {
  const user = _adminAuth(p);
  if (user._err) return user._err;
  const sh  = _sheet(CFG.S_USER);
  const idx = _rowIdx(sh, 'id', user.id);
  const map = { name:'name', tz:'tz', filter:'is_filter', confetti_animation:'is_confetti',
                can_reply:'can_reply', can_edit:'can_edit', can_delete:'can_delete', tenor_key:'tenor_key' };
  if (p.old_password !== undefined) {
    if (_sha256(p.old_password) !== user.password) return _resp(422, null, ['Wrong old password']);
    if (!p.new_password || p.new_password.length < 8) return _resp(422, null, ['Password min 8 chars']);
    _setCell(sh, idx, 'password', _sha256(p.new_password));
    return _resp(200, { status: true });
  }
  Object.keys(p).forEach(k => { if (map[k]) _setCell(sh, idx, map[k], p[k]); });
  return _resp(200, { status: true });
}

function actGetConfig(p) {
  const user = _guestAuth(p);
  if (!user) return _resp(401, null, ['Unauthorized']);
  return _resp(200, {
    tz: user.tz || 'Asia/Jakarta',
    is_filter: _bool(user.is_filter), is_confetti_animation: _bool(user.is_confetti),
    can_reply: _bool(user.can_reply), can_edit: _bool(user.can_edit), can_delete: _bool(user.can_delete),
    tenor_key: user.tenor_key || null,
  });
}

function actGetStats(p) {
  const user = _adminAuth(p);
  if (user._err) return user._err;
  const cmts  = _rows(_sheet(CFG.S_CMT));
  const likes = _rows(_sheet(CFG.S_LIKE));
  return _resp(200, {
    comments: cmts.length,
    likes   : likes.length,
    present : cmts.filter(r => _bool(r.presence)).length,
    absent  : cmts.filter(r => !_bool(r.presence)).length,
  });
}

function actGetComments(p) {
  const auth  = _resolveAuth(p);
  const per   = parseInt(p.per  || CFG.PER_PAGE);
  const next  = parseInt(p.next || 0);
  const all   = _rows(_sheet(CFG.S_CMT));
  const likes = _rows(_sheet(CFG.S_LIKE));
  const parents = all.filter(r => !r.parent_id || r.parent_id === '')
                     .sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
  const build = r => ({
    uuid: r.uuid, own: r.own, name: r.name,
    presence: _bool(r.presence), comment: r.comment || null,
    created_at: r.created_at, is_admin: _bool(r.is_admin),
    is_parent: !r.parent_id || r.parent_id === '',
    gif_url: r.gif_url || null,
    ip: auth.isAdmin ? r.ip || null : null,
    user_agent: auth.isAdmin ? r.user_agent || null : null,
    like_count: likes.filter(l => l.comment_uuid === r.uuid).length,
    comments: all.filter(c => c.parent_id === r.uuid)
                 .sort((a,b) => new Date(a.created_at) - new Date(b.created_at))
                 .map(build),
  });
  return _resp(200, { count: parents.length, lists: parents.slice(next, next + per).map(build) });
}

function actPostComment(p) {
  const auth = _resolveAuth(p);
  const name = (p.name || '').trim();
  if (!name) return _resp(422, null, ['Name cannot be empty']);
  if (!p.comment && !p.gif_id) return _resp(422, null, ['Comment cannot be empty']);
  if (p.comment && p.comment.length > CFG.MAX_CMT) return _resp(422, null, ['Comment too long']);
  const uuid = _uuid(), own = _uuid(), now = new Date().toISOString();
  const gifUrl = p.gif_id ? _tenorUrl(p.gif_id, auth) : null;
  _sheet(CFG.S_CMT).appendRow([uuid, own, name.substring(0,100), String(_bool(p.presence)),
    p.comment ? p.comment.substring(0, CFG.MAX_CMT) : null, gifUrl,
    p.ip || '', p.ua || '', p.id || '', now, String(auth.isAdmin), now]);
  return _resp(201, { uuid, own, name, presence: _bool(p.presence),
    comment: p.comment || null, created_at: now, is_admin: auth.isAdmin,
    is_parent: !p.id, gif_url: gifUrl, ip: null, user_agent: null, comments: [], like_count: 0 });
}

function actUpdateComment(p) {
  const sh  = _sheet(CFG.S_CMT);
  const idx = _rowIdx(sh, 'own', p.own);
  if (idx < 0) return _resp(404, null, ['Not found']);
  if (p.comment !== undefined) { _setCell(sh, idx, 'comment', p.comment); _setCell(sh, idx, 'gif_url', null); }
  if (p.gif_id  !== undefined) { _setCell(sh, idx, 'gif_url', _tenorUrl(p.gif_id, {})); _setCell(sh, idx, 'comment', null); }
  if (p.presence !== undefined) _setCell(sh, idx, 'presence', String(_bool(p.presence)));
  _setCell(sh, idx, 'updated_at', new Date().toISOString());
  return _resp(200, { status: true });
}

function actDeleteComment(p) {
  const sh   = _sheet(CFG.S_CMT);
  const rows = _rows(sh);
  const tgt  = rows.find(r => r.own === p.own);
  if (!tgt) return _resp(404, null, ['Not found']);
  const uuids = [tgt.uuid, ..._descendants(rows, tgt.uuid)];
  rows.map((r,i) => uuids.includes(r.uuid) ? i+2 : null).filter(Boolean).sort((a,b)=>b-a).forEach(i => sh.deleteRow(i));
  const ls = _sheet(CFG.S_LIKE), lr = _rows(ls);
  lr.map((r,i) => uuids.includes(r.comment_uuid) ? i+2 : null).filter(Boolean).sort((a,b)=>b-a).forEach(i => ls.deleteRow(i));
  return _resp(200, { status: true });
}

function actLikeComment(p) {
  const own = _uuid();
  _sheet(CFG.S_LIKE).appendRow([_uuid(), p.uuid, own, new Date().toISOString()]);
  return _resp(201, { uuid: own });
}

function actUnlikeComment(p) {
  const sh = _sheet(CFG.S_LIKE), rows = _rows(sh);
  const i  = rows.findIndex(r => r.own === p.own);
  if (i < 0) return _resp(404, null, ['Not found']);
  sh.deleteRow(i + 2);
  return _resp(200, { status: true });
}

function actRegenerateKey(p) {
  const user = _adminAuth(p);
  if (user._err) return user._err;
  const key = _genKey(), sh = _sheet(CFG.S_USER);
  _setCell(sh, _rowIdx(sh, 'id', user.id), 'access_key', key);
  return _resp(200, { status: true });
}

function actDownload(p) {
  const user = _adminAuth(p);
  if (user._err) return _out(user._err);
  const rows = _rows(_sheet(CFG.S_CMT)).filter(r => !r.parent_id || r.parent_id === '');
  const hdr  = ['uuid','name','presence','comment','ip','created_at'];
  const csv  = [hdr.join(','), ...rows.map(r => hdr.map(h => '"'+(r[h]||'').replace(/"/g,'""')+'"').join(','))].join('\n');
  return ContentService.createTextOutput(csv).setMimeType(ContentService.MimeType.CSV);
}


// ─────────────────────────────────────────────
//  AUTH HELPERS
// ─────────────────────────────────────────────
function _adminAuth(p) {
  const token = p.token || p._token || '';
  if (!token) return { _err: _resp(401, null, ['Unauthorized']) };
  const pl = _jwtVerify(token);
  if (!pl) return { _err: _resp(401, null, ['Token invalid or expired']) };
  const user = _findUser('id', pl.sub);
  if (!user) return { _err: _resp(401, null, ['User not found']) };
  return user;
}

function _guestAuth(p) {
  const key = p.key || p.k || p._key || '';
  if (!key) return null;
  return _findUser('access_key', key) || null;
}

function _resolveAuth(p) {
  const token = p.token || p._token || '';
  if (token) {
    const pl = _jwtVerify(token);
    if (pl) { const u = _findUser('id', pl.sub); if (u) return { isAdmin: true, user: u }; }
  }
  const key = p.key || p.k || p._key || '';
  if (key) { const u = _findUser('access_key', key); if (u) return { isAdmin: false, user: u }; }
  return { isAdmin: false, user: null };
}

// ─────────────────────────────────────────────
//  JWT
// ─────────────────────────────────────────────
function _jwtCreate(payload) {
  const h = _b64u(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const p = _b64u(JSON.stringify(Object.assign({ iat: now, exp: now + CFG.JWT_EXP * 3600 }, payload)));
  return h + '.' + p + '.' + _hmac(h + '.' + p);
}

function _jwtVerify(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    if (_hmac(parts[0] + '.' + parts[1]) !== parts[2]) return null;
    const pl = JSON.parse(_b64uDec(parts[1]));
    return pl.exp < Math.floor(Date.now() / 1000) ? null : pl;
  } catch (_) { return null; }
}

function _b64u(s) { return Utilities.base64EncodeWebSafe(s).replace(/=+$/, ''); }
function _b64uDec(s) { return Utilities.newBlob(Utilities.base64DecodeWebSafe(s + '==='.slice((s.length+3)%4))).getDataAsString(); }
function _hmac(data) { return Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(data, CFG.SECRET)).replace(/=+$/, ''); }
function _sha256(s) { return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s).map(b=>('0'+(b&0xff).toString(16)).slice(-2)).join(''); }

// ─────────────────────────────────────────────
//  SPREADSHEET HELPERS
// ─────────────────────────────────────────────
function _ss() {
  const id = PropertiesService.getScriptProperties().getProperty('SS_ID');
  if (!id) throw new Error('Belum di-setup. Jalankan setup() dulu.');
  return SpreadsheetApp.openById(id);
}
function _sheet(name) { return _ss().getSheetByName(name); }
function _rows(sh) {
  const d = sh.getDataRange().getValues();
  if (d.length < 2) return [];
  const h = d[0];
  return d.slice(1).map(r => h.reduce((o,k,i) => { o[k] = r[i] === '' ? null : r[i]; return o; }, {}));
}
function _rowIdx(sh, col, val) {
  const d = sh.getDataRange().getValues(), ci = d[0].indexOf(col);
  for (let i = 1; i < d.length; i++) if (String(d[i][ci]) === String(val)) return i + 1;
  return -1;
}
function _setCell(sh, row, col, val) {
  const ci = sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].indexOf(col) + 1;
  if (ci > 0) sh.getRange(row, ci).setValue(val === undefined ? null : val);
}
function _findUser(col, val) { return _rows(_sheet(CFG.S_USER)).find(r => String(r[col]) === String(val)) || null; }
function _descendants(rows, uuid) {
  const d = rows.filter(r => r.parent_id === uuid).map(r => r.uuid);
  return [...d, ...d.flatMap(id => _descendants(rows, id))];
}

// ─────────────────────────────────────────────
//  MISC HELPERS
// ─────────────────────────────────────────────
function _resp(code, data, error, id) {
  return { code, data: data !== undefined ? data : null, error: error || null, ...(id ? { id } : {}) };
}
function _out(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
function _bool(v) { return v === true || v === 'true' || v === 1 || v === '1'; }
function _uuid() {
  const h = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, Date.now()+Math.random().toString())
    .map(b=>('0'+(b&0xff).toString(16)).slice(-2)).join('');
  return [h.slice(0,8),h.slice(8,12),'4'+h.slice(13,16),(parseInt(h[16],16)&3|8).toString(16)+h.slice(17,20),h.slice(20,32)].join('-');
}
function _genKey() {
  return Utilities.computeHmacSha256Signature(Date.now()+Math.random().toString(), CFG.SECRET)
    .map(b=>('0'+(b&0xff).toString(16)).slice(-2)).join('').slice(0,50);
}
function _tenorUrl(gifId, auth) {
  if (!gifId) return null;
  try {
    const key = auth?.user?.tenor_key;
    if (!key) return 'https://media.tenor.com/' + gifId + '/gif.gif';
    const r = JSON.parse(UrlFetchApp.fetch('https://tenor.googleapis.com/v2/posts?ids='+gifId+'&key='+key+'&limit=1', {muteHttpExceptions:true}).getContentText());
    const m = r.results?.[0]?.media_formats;
    return m ? (m.gif||m.tinygif||m.nanogif)?.url || null : null;
  } catch (_) { return null; }
}

// ─────────────────────────────────────────────
//  SETUP HELPERS
// ─────────────────────────────────────────────
function _ensureFolder(name) {
  const it = DriveApp.getFoldersByName(name);
  return it.hasNext() ? it.next() : DriveApp.createFolder(name);
}
function _ensureSS(name, folder) {
  const it = folder.getFilesByName(name);
  if (it.hasNext()) return SpreadsheetApp.openById(it.next().getId());
  const ss = SpreadsheetApp.create(name), f = DriveApp.getFileById(ss.getId());
  folder.addFile(f); DriveApp.getRootFolder().removeFile(f);
  return ss;
}
function _ensureSheet(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.setFrozenRows(1);
    sh.getRange(1,1,1,headers.length).setBackground('#4285F4').setFontColor('#fff').setFontWeight('bold');
  }
  return sh;
}
function _seedAdmin(ss) {
  const sh = ss.getSheetByName(CFG.S_USER);
  if (_rows(sh).length > 0) { Logger.log('Admin sudah ada.'); return; }
  sh.appendRow([_uuid(),'admin@undangan.com',_sha256('password123'),'Admin',_genKey(),
    'Asia/Jakarta','false','true','true','true','true',null,new Date().toISOString()]);
  Logger.log('✅ Admin: admin@undangan.com / password123 — SEGERA GANTI PASSWORD!');
}

function clearAllComments() {
  [CFG.S_CMT, CFG.S_LIKE].forEach(n => {
    const sh = _sheet(n), last = sh.getLastRow();
    if (last > 1) sh.deleteRows(2, last - 1);
  });
  Logger.log('✅ Semua komentar dihapus.');
}
