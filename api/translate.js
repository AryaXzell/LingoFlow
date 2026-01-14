// api/translate.js  ← ini backend proxy aman
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, harus POST' });
  }

  const { text, sourceLang, targetLang } = req.body;

  if (!text || !sourceLang || !targetLang) {
    return res.status(400).json({ error: 'Kurang data: text, sourceLang, atau targetLang' });
  }

  const apiKey = process.env.GEMINI_API_KEY;  // Key dari Vercel env, aman!
  if (!apiKey) {
    return res.status(500).json({ error: 'Server error: API key gak ada' });
  }

  const systemPrompt = `Kamu adalah penerjemah profesional yang sangat santai dan natural.
Terjemahkan teks dari ${sourceLang} ke ${targetLang}.
Gunakan gaya obrolan sehari-hari seperti penutur asli, bukan kaku/formal kecuali dibutuhkan.
Pertahankan emoji, slang, nada lucu/emosi aslinya.
Gunakan **bold** untuk penekanan penting.
Hanya output terjemahan saja, tanpa intro, tanpa penjelasan, tanpa quote.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(`Gemini error: ${response.status} - ${JSON.stringify(err)}`);
    }

    const data = await response.json();
    const result = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';

    res.status(200).json({ translation: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal nerjemahin', details: error.message });
  }
}
