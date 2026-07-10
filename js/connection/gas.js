/**
 * GAS Adapter – mendeteksi apakah backend adalah Google Apps Script
 * dan mengubah semua request ke format GET ?action=xxx
 *
 * Cara kerja:
 *  - Kalau data-url mengandung "script.google.com" → GAS mode aktif
 *  - Semua fetch() di-intercept, dikonversi ke GET + query params
 *  - Body JSON dikirim sebagai individual query params (bukan JSON blob)
 *  - Authorization header dipindah ke ?token=
 *  - x-access-key dipindah ke ?key=
 *
 * Mapping endpoint lama → action GAS baru:
 *  POST   /api/session              → ?action=login
 *  GET    /api/user                 → ?action=getUser
 *  PATCH  /api/user                 → ?action=patchUser
 *  GET    /api/v2/config            → ?action=getConfig
 *  GET    /api/stats                → ?action=getStats
 *  GET    /api/v2/comment           → ?action=getComments
 *  POST   /api/comment              → ?action=postComment
 *  PUT    /api/comment/:own         → ?action=updateComment&own=:own
 *  DELETE /api/comment/:own         → ?action=deleteComment&own=:own
 *  POST   /api/comment/:uuid        → ?action=likeComment&uuid=:uuid
 *  PATCH  /api/comment/:own         → ?action=unlikeComment&own=:own
 *  PUT    /api/key                  → ?action=regenerateKey
 *  GET    /api/download             → ?action=download
 */

const GAS_BASE = (() => {
    const url = document.body?.getAttribute('data-url') || '';
    return url.includes('script.google.com') ? url : null;
})();

if (GAS_BASE) {
    const _origFetch = window.fetch.bind(window);

    /**
     * Petakan path + method → action GAS
     */
    const _mapAction = (method, pathname) => {
        // Normalize path: buang base GAS URL, ambil hanya /api/...
        const rel = pathname
            .replace(/.*\/exec\/?/, '')  // buang prefix GAS
            .replace(/^\/+/, '');        // buang leading slash

        if (method === 'POST'   && rel === 'api/session')           return { action: 'login' };
        if (method === 'GET'    && rel === 'api/user')              return { action: 'getUser' };
        if (method === 'PATCH'  && rel === 'api/user')              return { action: 'patchUser' };
        if (method === 'GET'    && rel === 'api/v2/config')         return { action: 'getConfig' };
        if (method === 'GET'    && rel === 'api/stats')             return { action: 'getStats' };
        if (method === 'GET'    && rel.startsWith('api/v2/comment')) return { action: 'getComments' };
        if (method === 'POST'   && rel === 'api/comment')           return { action: 'postComment' };
        if (method === 'PUT'    && rel === 'api/key')               return { action: 'regenerateKey' };
        if (method === 'GET'    && rel === 'api/download')          return { action: 'download' };

        // /api/comment/:id – bedakan berdasarkan method
        const cmtMatch = rel.match(/^api\/comment\/([^/]+)$/);
        if (cmtMatch) {
            const id = cmtMatch[1];
            if (method === 'PUT')    return { action: 'updateComment', own: id };
            if (method === 'DELETE') return { action: 'deleteComment', own: id };
            if (method === 'POST')   return { action: 'likeComment',   uuid: id };
            if (method === 'PATCH')  return { action: 'unlikeComment', own: id };
        }

        return null;
    };

    /**
     * Override window.fetch untuk GAS
     */
    window.fetch = async (input, init = {}) => {
        const url    = input instanceof Request ? new URL(input.url) : new URL(String(input), GAS_BASE);
        const method = (init.method || (input instanceof Request ? input.method : 'GET')).toUpperCase();

        // Hanya intercept request ke GAS URL
        if (!url.href.includes('script.google.com') && !url.href.startsWith(location.origin)) {
            return _origFetch(input, init);
        }
        // Kalau bukan ke GAS URL, bypass
        if (!url.href.includes('script.google.com')) {
            return _origFetch(input, init);
        }

        const mapped = _mapAction(method, url.pathname + url.search);
        if (!mapped) return _origFetch(input, init);

        // Bangun URL GAS baru dengan semua params sebagai query string
        const gasUrl = new URL(GAS_BASE);

        // Tambahkan action dan params dari mapped
        Object.entries(mapped).forEach(([k, v]) => gasUrl.searchParams.set(k, v));

        // Copy semua query params dari URL asli
        url.searchParams.forEach((v, k) => gasUrl.searchParams.set(k, v));

        // Pindahkan Authorization header → ?token=
        const headers = init.headers
            ? (init.headers instanceof Headers ? init.headers : new Headers(init.headers))
            : new Headers();

        const auth = headers.get('authorization') || headers.get('Authorization');
        if (auth) gasUrl.searchParams.set('token', auth.replace(/^Bearer\s+/i, ''));

        const accessKey = headers.get('x-access-key');
        if (accessKey) gasUrl.searchParams.set('key', accessKey);

        // Flatten body JSON → individual query params
        if (init.body) {
            try {
                const bodyObj = typeof init.body === 'string' ? JSON.parse(init.body) : init.body;
                Object.entries(bodyObj).forEach(([k, v]) => {
                    if (v !== null && v !== undefined) gasUrl.searchParams.set(k, String(v));
                });
            } catch (_) { /* body bukan JSON, skip */ }
        }

        // Kirim sebagai GET biasa – simple request, tidak ada preflight
        return _origFetch(gasUrl.toString(), { method: 'GET', redirect: 'follow' });
    };

    console.info('[GAS Adapter] aktif →', GAS_BASE);
}
