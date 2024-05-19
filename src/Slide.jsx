import React, { useState, useEffect } from 'react';

function Slider() {
    const [registroExitoso, setRegistroExitoso] = useState(false);

    useEffect(() => {
        // Puedes realizar alguna lógica aquí si es necesario al montar/desmontar el componente
    }, []);

    const handleRegistroExitoso = () => {
        setRegistroExitoso(true);
        setTimeout(() => {
            setRegistroExitoso(false);
        }, 5000);
    };

    return (   
        <div>
            <h1>Este es el componente Slider</h1>
            <button onClick={handleRegistroExitoso}>Simular registro exitoso</button>
            {registroExitoso && <p>¡Registro exitoso!</p>}
        </div>
    );
}

export default Slider;
