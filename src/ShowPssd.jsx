import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function MostrarContrasena() {
    const [mostrar, setMostrar] = useState(false);
    const [contrasena, setContrasena] = useState('');

    const toggleMostrarContrasena = () => {
        setMostrar(!mostrar);
    };

    return (
        
        <div className="input-contenedor">
            <input
                type={mostrar ? 'text' : 'password'}
                id="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required></input>
            <label htmlFor="#">Contraseña</label>
            <button className="icono-btn" onClick={toggleMostrarContrasena}>
                <FontAwesomeIcon icon={mostrar ? faEyeSlash : faEye} />
            </button>
        </div>
    );
}

export default MostrarContrasena;
