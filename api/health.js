// Setup check: confirms the server runs and the key exists, without ever revealing the key.
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ ok: true, keyLoaded: Boolean(process.env.GEMINI_API_KEY) });
};
