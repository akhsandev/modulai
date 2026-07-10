/**
 * GAS Adapter
 * Intercept semua window.fetch() dan redirect ke GAS ?action= format
 * jika data-url di <body> mengandung script.google.com
 */

const _origFetch = window.fetch.bind(window);

/**
 * Ambil GAS base URL — dipanggil lazy saat fetch pertama kali
 * sehingga document.body sudah pasti ada
 */
let _gasBase = undefined;
const _getGasBase = () => {
    if (_gasBase === undefined) {
        const url = document.body.getAttribute('data-url') || '';
        _gasBase = url.includes('script.google.com') ? url.replace(/\/$/, '') : null;
        if (_gasBase) console.info('[GAS Adapter] aktif →', _gasBase);
    }
    return _gasBase;
};

const _mapAction = (method, path) => {
    // Bersihkan path dari prefix GAS exec
    const rel = path.replace(/\/macros\/s\/[^/]+\/exec\/?/, '').replace(/^\/+/, '');

    if (method === 'POST'   && rel.startsWith('api/session'))       return { action: 'login' };
    if (method === 'GET'    && rel.startsWith('api/user'))          return { action: 'getUser' };
    if (method === 'PATCH'  && rel.startsWith('api/user'))          return { action: 'patchUser' };
    if (method === 'PUT'    && rel.startsWith('api/user'))          return { action: 'patchUser' };
    if (method === 'GET'    && rel.startsWith('api/v2/config'))     return { action: 'getConfig' };
    if (method === 'GET'    && rel.startsWith('api/stats'))         return { action: 'getStats' };
    if (method === 'GET'    && rel.startsWith('api/v2/comment'))    return { action: 'getComments' };
    if (method === 'POST'   && rel === 'api/comment')               return { action: 'postComment' };
    if (method === 'PUT'    && rel.startsWith('api/key'))           return { action: 'regenerateKey' };
    if (method === 'GET'    && rel.startsWith('api/download'))      return { action: 'download' };

    const m = rel.match(/^api\/comment\/([^/?]+)/);
    if (m) {
        const id = m[1];
        if (method === 'PUT')    return { action: 'updateComment', own: id };
        if (method === 'DELETE') return { action: 'deleteComment', own: id };
        if (method === 'POST')   return { action: 'likeComment',   uuid: id };
        if (method === 'PATCH')  return { action: 'unlikeComment', own: id };
    }
    return null;
};

window.fetch = (input, init = {}) => {
    const gasBase = _getGasBase();

    // Kalau bukan GAS, langsung forward ke fetch asli
    if (!gasBase) return _origFetch(input, init);

    // Bangun URL dari input
    let reqUrl;
    try {
        reqUrl = input instanceof Request
            ? new URL(input.url)
            : new URL(String(input), gasBase);
    } catch (_) {
        return _origFetch(input, init);
    }

    // Kalau URL tidak mengarah ke GAS (misal: external CDN, Tenor, dll.) — bypass
    if (!reqUrl.href.includes('script.google.com')) {
        return _origFetch(input, init);
    }

    const method = (
        init.method ||
        (input instanceof Request ? input.method : 'GET')
    ).toUpperCase();

    // Gabungkan pathname + search untuk mapping
    const fullPath = reqUrl.pathname + reqUrl.search;
    const mapped   = _mapAction(method, fullPath);

    if (!mapped) return _origFetch(input, init);

    // Bangun URL GAS baru
    const out = new URL(gasBase);

    // 1. Tambahkan action dan extra params dari mapping
    Object.entries(mapped).forEach(([k, v]) => out.searchParams.set(k, v));

    // 2. Copy query params dari URL asli (per, next, lang, key, k, dll.)
    reqUrl.searchParams.forEach((v, k) => out.searchParams.set(k, v));

    // 3. Pindahkan Authorization header → ?token=
    const headers = init.headers instanceof Headers
        ? init.headers
        : new Headers(init.headers || {});

    const auth = headers.get('authorization');
    if (auth) out.searchParams.set('token', auth.replace(/^Bearer\s+/i, ''));

    const xKey = headers.get('x-access-key');
    if (xKey) out.searchParams.set('key', xKey);

    // 4. Flatten body JSON → individual query params
    const rawBody = init.body || (input instanceof Request ? null : null);
    if (rawBody) {
        try {
            const obj = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
            Object.entries(obj).forEach(([k, v]) => {
                if (v !== null && v !== undefined) out.searchParams.set(k, String(v));
            });
        } catch (_) { /* bukan JSON, skip */ }
    }

    console.debug('[GAS]', method, fullPath, '→', out.toString());

    // 5. Kirim sebagai plain GET — tidak ada preflight, tidak ada CORS error
    return _origFetch(out.toString(), { method: 'GET', redirect: 'follow' });
};
