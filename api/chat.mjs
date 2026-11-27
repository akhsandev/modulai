// Simpan file ini di: api/chat.mjs (di root repository Vercel Anda)
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: { message: 'Method not allowed' } });

  try {
    const authHeader = process.env.XKIRO_API_KEY
      ? `Bearer ${process.env.XKIRO_API_KEY}`
      : (req.headers.authorization || '');

    const payload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});

    const upstream = await fetch('https://api.xkiro.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: payload
    });

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
    return res.send(text);
  } catch (err) {
    return res.status(500).json({ error: { message: err?.message || 'Proxy error' } });
  }
}