const express = require('express');
const axios = require('axios');

const app = express();
const port = 5173;

app.use(express.json());

const API_KEY = 'c51e25cb-6930-4d3e-8d1a-0632357d44f0';

app.post('/player-stats', async (req, res) => {
  const { playerName } = req.body;

  try {
    const response = await axios.get(
      `https://public-api.tracker.gg/v2/tft/standard/profile/riot/${playerName}`,
      {
        headers: {
          'TRN-Api-Key': API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las estadísticas del jugador' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
