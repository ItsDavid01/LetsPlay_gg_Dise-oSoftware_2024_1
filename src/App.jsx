import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import MostrarContrasena from './ShowPssd';
import AvisoEmergente from './AvisoEmergente';
import Slider from './Slide';

function App() {
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const audioElement = document.getElementById("audio");
        audioElement.play();
    }, []);

    const guardarInfoRegistro = () => {
        setRegistroExitoso(true);
        setTimeout(() => {
            setRegistroExitoso(false);
            navigate('/Interface');
        }, 5000);
        // Abrir una nueva ventana al presionar el botón
        navigate('/Interface');
    };

    return (   
        <body>
            <section>
                <div className="contenedor">
                    <div className="formulario">
                        <form className="RegUs" action="#">
                            <h2>Registrate</h2>
                            <h4>¡Bienvenido a Let's Play.GG!</h4>
                            <div className="input-contenedor">
                                <input type="name" id="name1id" required></input>
                                <label htmlFor="#">¿Cuál es tu Apodo?</label>
                            </div>
                            <div className="input-contenedor">
                                <input type="mail" id="usermail" required></input>
                                <label htmlFor="#">Correo Electrónico</label>
                            </div>
                            <div className="input-contenedor">
                                <input type="user" id="userid" required></input>
                                <label htmlFor="#">Usuario</label>
                            </div>
                            <MostrarContrasena />
                        </form>
                        <button onClick={guardarInfoRegistro}>¡Todo Listo!</button>
                        {registroExitoso && <AvisoEmergente mensaje="¡Registro exitoso!" />}
                    </div>
                </div>
            </section>
            
            <audio id="audio" autoPlay>
                <source src="snd1.mp3" type="audio/mpeg" />
            </audio>
        </body>
    );
}

export default App;