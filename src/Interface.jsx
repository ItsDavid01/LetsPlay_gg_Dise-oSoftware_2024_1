import React, { useState } from "react";
import Slider from "./SliderInt";
import ChatEm from "./ChatEm";
import "./Interface.css";

function App() {
  const [isChatEmOpen, setIsChatEmOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatEmOpen(true);
  };

  const handleCloseChatEm = () => {
    setIsChatEmOpen(false);
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
      {isChatEmOpen && <ChatEm onClose={handleCloseChatEm} />}
    </div>
  );
}

export default App;
