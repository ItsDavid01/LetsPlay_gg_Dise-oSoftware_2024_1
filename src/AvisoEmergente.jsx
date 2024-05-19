import React, { useEffect } from 'react';
import './AvisoEmergente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function AvisoEmergente({ mensaje, onClose }) {

    return (
        <div className="aviso-emergente">
            <div className="contenido">
                <div className="icono">
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <p>{mensaje}</p>
            </div>
        </div>
    );
}

export default AvisoEmergente;