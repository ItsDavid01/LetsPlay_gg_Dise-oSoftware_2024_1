import React, { useState } from "react";
import Slider from "./SliderInt";
import Modal from "./Modal";
import "./Interface.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        <div className="Containerinfo"></div>
      </section>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
