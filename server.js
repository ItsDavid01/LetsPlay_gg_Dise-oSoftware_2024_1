import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from "./db.js"

const app = express();
app.use(cors());
app.use(express.json());

//const connection = mysql.createConnection({
//  host: process.env.DB_HOST,
//  user: process.env.DB_USER,
//  password: process.env.DB_PASSWORD,
//  database: process.env.DB_NAME,
//});
//
//connection.connect((err) => {
//    if (err) {
//      console.error('Error connecting to the database:', err);
//      return;
//    }
//    console.log('Connected to the MySQL database');
//});  

app.get("/test", (req, res) => {
  res.send("Hello")
})

// Ruta para manejar la solicitud de registro
app.post('/register', (req, res) => {
  console.log(req.body)
  const user = req.body["usuario"]
  const pwd = req.body["password"]
  const mail = req.body["mail"]
  const gameUser = req.body["gameUser"]
  console.log("datos recibidos, ", user, pwd)

  // Insertar datos en la base de datos
  const sql = 'INSERT INTO accounts (username, password, gameUser, mail) VALUES (?, ?, ?, ?)';
  connection.query(sql, [user, pwd, gameUser, mail], (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err);
      res.status(500).json({ error: 'Error, quizas el usuario ya existe?' });
      return;
    }
    console.log('Datos insertados correctamente en la base de datos');
    res.status(200).json({ mensaje: 'Registro exitoso' });
  });
});

//para verificar el login
app.post('/login', (req, res) => {
  const user = req.body["usuario"]
  const pwd = req.body["password"]

  const sql = 'SELECT * FROM accounts WHERE username = ? AND password = ?';
  connection.query(sql, [user, pwd], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: "Error, quizas el usuario ya existe?" });
      return;
    }

    if (results.length > 0) {
      // El usuario existe y las credenciales son correctas
      res.status(200).json({ mensaje: 'Login exitoso' });
    } else {
      // Las credenciales son incorrectas
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  });
});

// Configurar el servidor para escuchar en un puerto específico
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
