export const HTTP_GET = 'GET';
export const HTTP_PUT = 'PUT';
export const HTTP_POST = 'POST';
export const HTTP_PATCH = 'PATCH';
export const HTTP_DELETE = 'DELETE';

export const HTTP_STATUS_OK = 200;
export const HTTP_STATUS_CREATED = 201;
export const HTTP_STATUS_PARTIAL_CONTENT = 206;
export const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

export const ERROR_ABORT = 'AbortError';
export const ERROR_TYPE = 'TypeError';

export const defaultJSON = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const cacheName = 'request';

const singleton = (() => {
    /**
     * @type {Promise<Cache>|null}
     */
    let instance = null;

    return {
        /**
         * @returns {Promise<Cache>}
         */
        getInstance: () => {
            if (!instance) {
                instance = window.caches.open(cacheName);
            }

            return instance;
        },
        purge: () => {
            instance = null;
        },
    };
})();

export const removeCache = async () => {
    if (!window.isSecureContext) {
        return;
    }

    singleton.purge();
    await window.caches.delete(cacheName);
};

/**
 * @param {Cache} cacheObject 
 */
export const cacheWrapper = (cacheObject) => {
    /**
     * @param {string|URL} input 
     * @param {Response} res 
     * @param {boolean} forceCache
     * @param {number} ttl
     * @returns {Response}
     */
    const set = (input, res, forceCache, ttl) => res.clone().arrayBuffer().then((ab) => {
        if (!res.ok || !window.isSecureContext) {
            return res;
        }

        const now = new Date();
        const headers = new Headers(res.headers);

        if (!headers.has('Date')) {
            headers.set('Date', now.toUTCString());
        }

        if (forceCache || !headers.has('Cache-Control')) {
            if (!forceCache && headers.has('Expires')) {
                const expTime = new Date(headers.get('Expires'));
                ttl = Math.max(0, expTime.getTime() - now.getTime());
            }

            headers.set('Cache-Control', `public, max-age=${Math.floor(ttl / 1000)}`);
        }

        if (!headers.has('Content-Length')) {
            headers.set('Content-Length', String(ab.byteLength));
        }

        return cacheObject.put(input, new Response(ab, { headers })).then(() => res);
    });

    /**
     * @param {string|URL} input 
     * @returns {Promise<Response|null>}
     */
    const has = (input) => cacheObject.match(input).then((res) => {
        if (!res) {
            return null;
        }

        const maxAge = res.headers.get('Cache-Control').match(/max-age=(\d+)/)[1];
        const expTime = Date.parse(res.headers.get('Date')) + (parseInt(maxAge) * 1000);

        return Date.now() > expTime ? null : res;
    });

    /**
     * @param {string|URL} input 
     * @returns {Promise<boolean>}
     */
    const del = (input) => cacheObject.delete(input);

    return {
        set,
        has,
        del,
    };
};

/**
 * @param {string} method 
 * @param {string} path 
 */
export const request = (method, path) => {

    const ac = new AbortController();
    const req = {
        signal: ac.signal,
        credential: 'include',
        credentials: 'omit',   // GAS tidak butuh cookies, omit agar tidak trigger preflight
        redirect: 'follow',    // GAS redirect ke URL final, harus di-follow
        headers: new Headers(defaultJSON),
        method: String(method).toUpperCase(),
    };

    window.addEventListener('offline', () => ac.abort(), { once: true });
    window.addEventListener('popstate', () => ac.abort(), { once: true });

    let reqTtl = 0;
    let reqRetry = 0;
    let reqDelay = 0;
    let reqAttempts = 0;
    let reqForceCache = false;

    /**
     * @type {string|null}
     */
    let downExt = null;

    /**
    * @type {string|null}
    */
    let downName = null;

    /**
    * @type {function|null}
    */
    let callbackFunc = null;

    /**
     * @param {string|URL} input 
     * @returns {Promise<Response>}
     */
    const baseFetch = (input) => {

        // ── Google Apps Script CORS fix ───────────────────────────
        // GAS Web App hanya support GET tanpa preflight CORS.
        // Semua request di-konversi ke GET:
        //   - method asli dikirim via ?_method=
        //   - body JSON dikirim via ?_body= (base64)
        //   - path API dikirim via ?_path= (karena GAS tidak support pathInfo)
        const gasBase = document.body.getAttribute('data-url') || '';
        const isGAS = gasBase.includes('script.google.com');
        if (isGAS) {
            const url = input instanceof URL ? input : new URL(input);
            // Ekstrak path API dari URL yang sudah di-build
            // Contoh: https://script.google.com/macros/s/xxx/exec/api/session
            //         → apiPath = "api/session"
            // Atau kalau sudah ada ?_path dari sebelumnya, pakai itu
            const execIndex = url.pathname.indexOf('/exec');
            const apiPath = execIndex >= 0
                ? url.pathname.slice(execIndex + 5).replace(/^\/+/, '')
                : url.searchParams.get('_path') || '';
            // Bangun URL bersih: hanya sampai /exec
            const cleanExec = url.origin + url.pathname.slice(0, execIndex >= 0 ? execIndex + 5 : undefined);
            const baseExec = new URL(cleanExec);
            // Copy existing non-private search params
            url.searchParams.forEach((v, k) => { if (!k.startsWith('_')) baseExec.searchParams.set(k, v); });
            if (apiPath) baseExec.searchParams.set('_path', apiPath);
            if (req.method !== HTTP_GET) {
                baseExec.searchParams.set('_method', req.method);
            }
            if (req.body) {
                // encodeURIComponent + btoa untuk handle karakter non-ASCII (UTF-8 safe)
                baseExec.searchParams.set('_body', btoa(unescape(encodeURIComponent(req.body))));
                delete req.body;
            }
            req.method = HTTP_GET;
            // Hapus Content-Type agar tidak trigger preflight
            req.headers.delete('Content-Type');
            // Pindahkan Authorization ke query param (header custom juga bisa trigger preflight)
            const authHeader = req.headers.get('Authorization') || req.headers.get('authorization');
            const accessKey  = req.headers.get('x-access-key');
            if (authHeader) {
                baseExec.searchParams.set('_token', authHeader.replace(/^Bearer\s+/i, ''));
                req.headers.delete('Authorization');
            }
            if (accessKey) {
                baseExec.searchParams.set('_key', accessKey);
                req.headers.delete('x-access-key');
            }
            input = baseExec;
        }
        // ────────────────────────────────────────────────────────

        /**
         * @returns {Promise<Response>}
         */
        const abstractFetch = () => {

            /**
             * @returns {Promise<Response>}
             */
            const wrapperFetch = () => window.fetch(input, req).then(async (res) => {
                if (!res.ok || !callbackFunc) {
                    return res;
                }

                const contentLength = parseInt(res.headers.get('Content-Length') ?? 0);
                if (contentLength === 0) {
                    return res;
                }

                const chunks = [];
                let receivedLength = 0;
                const reader = res.body.getReader();

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        break;
                    }

                    chunks.push(value);
                    receivedLength += value.length;

                    await callbackFunc(receivedLength, contentLength, window.structuredClone ? window.structuredClone(chunks) : chunks);
                }

                const contentType = res.headers.get('Content-Type') ?? 'application/octet-stream';
                return new Response(new Blob(chunks, { type: contentType }), {
                    status: res.status,
                    statusText: res.statusText,
                    headers: new Headers(res.headers),
                });
            });

            if (reqTtl === 0 || !window.isSecureContext) {
                return wrapperFetch();
            }

            if (req.method !== HTTP_GET) {
                console.warn('Only method GET can be cached');
                return wrapperFetch();
            }

            return singleton.getInstance().then(cacheWrapper).then((cw) => cw.has(input).then((res) => {
                if (res) {
                    return Promise.resolve(res);
                }

                return cw.del(input).then(wrapperFetch).then((r) => cw.set(input, r, reqForceCache, reqTtl));
            }));
        };

        if (reqRetry === 0 && reqDelay === 0) {
            return abstractFetch();
        }

        /**
         * @returns {Promise<Response>}
         */
        const attempt = async () => {
            try {
                return await abstractFetch();
            } catch (error) {
                if (error.name === ERROR_ABORT) {
                    throw error;
                }

                reqDelay *= 2;
                reqAttempts++;

                if (reqAttempts > reqRetry) {
                    throw new Error(`Max retries reached: ${error}`);
                }

                console.warn(`Retrying fetch (${reqAttempts}/${reqRetry}): ${input.toString()}`);
                await new Promise((resolve) => window.setTimeout(resolve, reqDelay));

                return attempt();
            }
        };

        return attempt();
    };

    /**
     * @param {Response} res 
     * @returns {Response}
     */
    const baseDownload = (res) => {
        if (res.status !== HTTP_STATUS_OK) {
            return res;
        }

        const exist = document.querySelector('a[download]');
        if (exist) {
            document.body.removeChild(exist);
        }

        const filename = res.headers.get('Content-Disposition')?.match(/filename="(.+)"/)?.[1];

        return res.clone().blob().then((b) => {
            const link = document.createElement('a');
            const href = window.URL.createObjectURL(b);

            link.href = href;
            link.download = filename ? filename : `${downName}.${downExt ? downExt : (b.type.split('/')?.[1] ?? 'bin')}`;

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(href);

            return res;
        });
    };

    return {
        /**
         * @template T
         * @param {((data: any) => T)=} transform
         * @returns {Promise<{code: number, data: T, error: string[]|null}>}
         */
        send(transform = null) {
            if (downName) {
                Object.keys(defaultJSON).forEach((k) => req.headers.delete(k));
            }

            return baseFetch(new URL(path, document.body.getAttribute('data-url'))).then((res) => {
                if (downName && res.ok) {
                    return {
                        code: res.status,
                        data: baseDownload(res),
                        error: null,
                    };
                }

                return res.json().then((json) => {
                    if (json.error) {
                        const msg = json.error.at(0);
                        const isErrServer = res.status >= HTTP_STATUS_INTERNAL_SERVER_ERROR;

                        throw new Error(isErrServer ? `ID: ${json.id}\n🟥 ${msg}` : `🟨 ${msg}`);
                    }

                    if (transform) {
                        json.data = transform(json.data);
                    }

                    return Object.assign(json, { code: res.status });
                });
            }).catch((err) => {
                if (err.name === ERROR_ABORT) {
                    console.warn('Fetch aborted:', err);
                    return err;
                }

                if (err.name === ERROR_TYPE) {
                    err = new Error('🟥 Network error or rate limit exceeded');
                }

                alert(err.message ?? String(err));
                throw err;
            });
        },
        /**
         * @param {number} [ttl=21600000]
         * @returns {ReturnType<typeof request>}
         */
        withCache(ttl = 1000 * 60 * 60 * 6) {
            reqTtl = ttl;

            return this;
        },
        /**
         * @returns {ReturnType<typeof request>}
         */
        withForceCache() {
            reqForceCache = true;

            return this;
        },
        /**
         * @param {number} [maxRetries=3]
         * @param {number} [delay=1000]
         * @returns {ReturnType<typeof request>}
         */
        withRetry(maxRetries = 3, delay = 1000) {
            reqRetry = maxRetries;
            reqDelay = delay;

            return this;
        },
        /**
         * @param {Promise<void>|null} cancel
         * @returns {ReturnType<typeof request>}
         */
        withCancel(cancel) {
            if (cancel === null || cancel === undefined) {
                return this;
            }

            (async () => {
                await cancel;
                ac.abort();
            })();

            return this;
        },
        /**
         * @param {string} name 
         * @param {string|null} ext
         * @returns {ReturnType<typeof request>}
         */
        withDownload(name, ext = null) {
            downName = name;
            downExt = ext;
            return this;
        },
        /**
         * @param {function|null} [func=null]
         * @returns {ReturnType<typeof request>}
         */
        withProgressFunc(func = null) {
            callbackFunc = func;
            return this;
        },
        /**
         * @param {object|null} header 
         * @returns {Promise<Response>}
         */
        default(header = null) {
            req.headers = new Headers(header ?? {});
            return baseFetch(path).then((res) => downName ? baseDownload(res) : res);
        },
        /**
         * @param {string} token
         * @returns {ReturnType<typeof request>}
         */
        token(token) {
            if (token.split('.').length === 3) {
                req.headers.append('Authorization', 'Bearer ' + token);
                return this;
            }

            req.headers.append('x-access-key', token);
            return this;
        },
        /**
         * @param {object} body
         * @returns {ReturnType<typeof request>}
         */
        body(body) {
            if (req.method === HTTP_GET) {
                throw new Error('GET method does not support body');
            }

            req.body = JSON.stringify(body);
            return this;
        },
    };
};
