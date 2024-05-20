import React, { useState } from "react";
import "./ChatEm.css";
import imagen1 from "./imagen-1.jpg";

const Modal = ({ onClose }) => {
  const [closing, setClosing] = useState(false);
  const images = [imagen1];
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 200);
  };

  return (
    <div
      className={`modal-overlay ${closing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${closing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={handleClose}>
          ◄
        </button>
        <div className="ChatSelector">
          <div className="ChatSelectorButtons">
            <p>Chats Activos</p>
            {[...Array(2)].map((_, index) => (
              <button key={index}>
                <img src={images[index]} className="button-image" />
                Persona {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="ChatSpace"></div>
      </div>
    </div>
  );
};

export default Modal;
