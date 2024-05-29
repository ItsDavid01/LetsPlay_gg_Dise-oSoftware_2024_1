import React, { useState } from "react";
import Slider from "./SliderInt";
import Modal from "./Modal";
import "./Interface.css";
import { getPlayerStats } from './api';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerStats, setPlayerStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChatButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
        const data = await getPlayerStats(playerName);
        setPlayerStats(data);
    } catch (err) {
        setError('Failed to fetch player stats.');
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
          <div>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter player name"
              />
          </div>
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {playerStats && (
                <div>
                  <h2>Player Stats</h2>
                  <pre>{JSON.stringify(playerStats, null, 2)}</pre>
                </div>
              )}
        </div>
      </section>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
