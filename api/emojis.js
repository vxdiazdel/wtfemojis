export default async (req, res) => {
  try {
    const response = await fetch(process.env.EMOJIS_URL);
    if (!response.ok) {
      return res
        .status(response.status)
        .send(`Error fetching emojis: ${response.statusText}`);
    }

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching emojis:', error);

    return res.status(500).send('Internal server error');
  }
};
