import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import MostrarContrasena from './ShowPssd';
import AvisoEmergente from './AvisoEmergente';
import Slider from './Slide';
import axios from 'axios';


function App() {
    const navigate = useNavigate();
    const [registroExitoso, setRegistroExitoso] = useState(false);
    
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const [gameUser, setGameUser] = useState('');
    const [userColor, setUserColor] = useState('');
    const [game, setGame] = useState('');
    const [nombreReal, setReal] = useState('');

    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        const audioElement = document.getElementById("audio");
        audioElement.play();
    }, []);

    const handleRealChange = (event) => {
        setReal(event.target.value);
    };

    const handleUsuarioChange = (event) => {
        setUsuario(event.target.value);
    };

    const handleGameChange = (event) => {
        setGame(event.target.value);
    };

    const handleColorChange = (event) => {
        setUserColor(event.target.value);
    };

    const handleGameUserChange = (event) => {
        setGameUser(event.target.value);
    };

    const handleMailChange = (event) => {
        setMail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("porfin");
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"usuario": usuario, "password": password, "mail": mail, "gameUser": gameUser, "color": userColor, "game": game, "nombreR": nombreReal})
            });

            const result = await response.json()
            if(response.ok){
                setResponseMessage(result.mensaje)
            }else{
                setResponseMessage(result.error)
            }
            

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    const guardarInfoRegistro = async (event) => {
        event.preventDefault();
        console.log("Intentando login...");
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"usuario": usuario, "password": password, "mail": mail, "gameUser": gameUser})
            });
    
            const result = await response.json();
            if (response.ok) {
                console.log('Login exitoso:', result);
                setRegistroExitoso(true);
                setTimeout(() => {
                    setRegistroExitoso(false);
                    navigate('/Interface'); // Abrir una nueva ventana al presionar el botón
                }, 5000);
                //navigate('/Interface');
            } else {
                setResponseMessage(result.error)
                console.error('Error de login:', result.error);
            // Mostrar mensaje de error al usuario
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
        
    };

    return (   
        <body>
            <section>
                <div className="contenedor">
                    <div className="formulario">
                        <form className="RegUs" action="#" onSubmit={handleSubmit}>
                            <h2>Registrate</h2>
                            <h4>¡Bienvenido a Let's Play.GG!</h4>
                            <div className="input-contenedor">
                                <input type="name" id="nameR" onChange={handleRealChange} required></input>
                                <label htmlFor="#">¿Cuál es tu nombre real?</label>
                            </div>
                            <div className="input-contenedor">
                                <input type="name" id="name1id" onChange={handleGameUserChange} required></input>
                                <label htmlFor="#">¿Cuál es tu nombre en el juego?</label>
                            </div>
                            <div className="input-contenedor">
                                <input type="mail" id="usermail" onChange={handleMailChange} required></input>
                                <label htmlFor="#">Correo Electrónico</label>
                            </div>
                            <div className="input-contenedor">
                                <input type="text" id="usercolor" onChange={handleColorChange} required></input>
                                <label htmlFor="#">Tu color Favorito</label>
                            </div>
                            <div className="input-contenedor">
                                <input type="text" id="game" onChange={handleGameChange} required></input>
                                <label htmlFor="#">Tu juego Favorito</label>
                            </div>
                            
                            <button type="submit">¡Registrarse!</button>
                            <br /><br />
                            <div className="input-contenedor">
                                <input type="user" id="userid" value={usuario} onChange={handleUsuarioChange} required></input>
                                <label htmlFor="#">Usuario</label>
                            </div>
                            <div className="input-contenedor">
                                <input type="password" id="userpwd" value={password} onChange={handlePasswordChange} required></input>
                                <label htmlFor="#">Contraseña</label>
                            </div>
                            <button onClick={guardarInfoRegistro}>Iniciar Sesión!</button>
                            {registroExitoso && <AvisoEmergente mensaje="¡Registro exitoso!" />}
                            <br /><br />
                            {responseMessage && (
                            <div>{responseMessage}</div> // Mostrar mensaje de respuesta
                            )}
                        </form>
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
