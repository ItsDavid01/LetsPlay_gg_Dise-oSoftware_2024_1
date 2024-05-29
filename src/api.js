import axios from 'axios';

const API_KEY = import.meta.env.VITE_TRACKER_API_KEY;
const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'TRN-Api-Key': API_KEY,
  },
});

export const getPlayerStats = async (game, platform, playerName) => {
  try {
    const response = await api.get(`/${game}/standard/profile/${platform}/${playerName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching player stats:', error);
    throw error;
  }
};
