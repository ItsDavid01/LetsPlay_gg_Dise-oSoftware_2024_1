const express = require('express');
const axios = require('axios');

const router = express.Router();
const API_KEY = 'c51e25cb-6930-4d3e-8d1a-0632357d44f0'; // Reemplaza esto con tu propia clave de API

router.post('/player-stats', async (req, res) => {
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
    console.error('Error fetching player stats:', error);
    res.status(500).json({ error: 'Error al obtener las estadísticas del jugador' });
  }
});

module.exports = router;
