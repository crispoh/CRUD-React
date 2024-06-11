const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(cors());
app.use(express.json());

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cri$1357',
  database: 'rentacar_db'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Agregar un vehículo
app.post('/vehicles', (req, res) => {
  const { seller_rut, name, license_plate, brand, model, price } = req.body;
  const sql = 'INSERT INTO vehicles (seller_rut, name, license_plate, brand, model, price) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [seller_rut, name, license_plate, brand, model, price];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error agregando vehiculo:', err);
      res.status(500).json({ error: 'Error agregando vehiculo' });
      return;
    }
    res.status(201).json({ message: 'Vehiculo agregado correctamente:', vehicleId: result.insertId });
  });
});

// Listar los últimos 10 vehículos
app.get('/vehicles', (req, res) => {
  const sql = 'SELECT * FROM vehicles ORDER BY id DESC LIMIT 10';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});

// Obtener un vehículo por su ID
app.get('/vehicles/:id', (req, res) => {
  const sql = 'SELECT * FROM vehicles WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
    } else {
      res.json(results[0]);
    }
  });
});

//Eliminar el ultimo vehiculo
app.delete('/vehicles', (req, res) => {
  const sql = 'DELETE FROM vehicles ORDER BY id DESC LIMIT 1';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error deleting data:', err);
      res.status(500).send('Error deleting data');
    } else {
      res.json(results);
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor de "Rentacar" esta corriendo el el puerto: ${port}`);
});