import React, { useState } from "react";
import "./App.css";
import MostrarContrasena from "./ShowPssd";
import AvisoEmergente from "./AvisoEmergente";

function App() {
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const guardarInfoRegistro = () => {
    setRegistroExitoso(true);
    setTimeout(() => {
      setRegistroExitoso(false);
    }, 5000);

    // Abrir una nueva ventana después de 2 segundos y cerrar la ventana principal
    setTimeout(() => {
      const newWindow = window.open("/Interface", "_blank");
      window.close();
    }, 2000);
  };

  return (
    <div className="app-body">
      <section>
        <div className="contenedor">
          <div className="formulario">
            <form className="RegUs" action="#">
              <h2>Registrate</h2>
              <h4>¡Bienvenido a Let's Play.GG!</h4>
              <div className="input-contenedor">
                <input type="text" id="name1id" required />
                <label htmlFor="name1id">¿Cuál es tu Apodo?</label>
              </div>
              <div className="input-contenedor">
                <input type="email" id="usermail" required />
                <label htmlFor="usermail">Correo Electrónico</label>
              </div>
              <div className="input-contenedor">
                <input type="text" id="userid" required />
                <label htmlFor="userid">Usuario</label>
              </div>
              <MostrarContrasena />
            </form>
            <button onClick={guardarInfoRegistro}>¡Todo Listo!</button>
            {registroExitoso && <AvisoEmergente mensaje="¡Registro exitoso!" />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
