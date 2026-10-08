export default async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const targetUrl = url.searchParams.get('url');

  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'Authorization': req.headers.authorization || '',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
