import React, { useState } from "react";
import "./Modal.css";

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
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Modal;
