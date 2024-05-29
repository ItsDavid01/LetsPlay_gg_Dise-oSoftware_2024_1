import React, { useState } from "react";
import axios from "axios";
import Slider from "./SliderInt";
import ChatEm from "./ChatEm";
import "./Interface.css";

function App() {
  const [isChatEmOpen, setIsChatEmOpen] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerStats, setPlayerStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChatButtonClick = () => {
    setIsChatEmOpen(true);
  };

  const handleCloseChatEm = () => {
    setIsChatEmOpen(false);
  };

  const handleFetchPlayerStats = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "/player-stats", // Ruta a la que se dirige la solicitud
        { playerName },
        { headers: { "Content-Type": "application/json" } }
      );
      setPlayerStats(response.data);
    } catch (error) {
      setError(error.response?.data?.error || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bdd">
      <section>
        <div className="bar">
          <button className="bar-button home"></button>
          <button
            className="bar-button chat"
            onClick={handleChatButtonClick}
          ></button>
          <button className="bar-button match"></button>
          <button className="bar-button acc"></button>
        </div>
      </section>
      <section>
        <div className="Containercards">
          <Slider />
        </div>
      </section>
      <section>
        <div className="Containerinfo">
          <h1>Buscar jugador de Teamfight Tactics (TFT)</h1>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Nombre del jugador"
          />
          <button
            onClick={handleFetchPlayerStats}
            disabled={!playerName || loading}
          >
            Buscar
          </button>
          {loading && <p>Cargando...</p>}
          {error && <p>Error: {error}</p>}
          {playerStats && (
            <div>
              <h2>Información del jugador:</h2>
              <pre>{JSON.stringify(playerStats, null, 2)}</pre>
            </div>
          )}
        </div>
      </section>
      {isChatEmOpen && <ChatEm onClose={handleCloseChatEm} />}
    </div>
  );
}

export default App;
