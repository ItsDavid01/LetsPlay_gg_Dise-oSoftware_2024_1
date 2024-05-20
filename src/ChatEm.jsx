import React, { useState } from "react";
import "./ChatEm.css";

const Modal = ({ onClose }) => {
  const [closing, setClosing] = useState(false);

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
                <img src={`imagen-${index + 1}.jpg`} className="button-image" />
                Botón {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
