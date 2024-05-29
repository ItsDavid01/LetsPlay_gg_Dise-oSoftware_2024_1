const API_KEY = import.meta.env.VITE_API_KEY;

export const getPlayerStats = async (playerName) => {
    const url = `https://api.tracker.gg/api/v2/valorant/standard/profile/riot/${playerName}`;
    try {
        const response = await fetch(url, {
            headers: {
                'TRN-Api-Key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching player stats:', error);
        throw error;
    }
};
