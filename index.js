const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');  // Import the db.js file

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }));
app.use(bodyParser.json());
// API endpoint to get all employees
app.get('/employees', (req, res) => {
    const sql = 'SELECT * FROM EMPLOYEE';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// API endpoint to add a new employee
app.post('/add-employee', (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO EMPLOYEE SET ?';  // Insert data using SET
    db.query(sql, data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Employee added successfully', id: result.insertId });
        }
    });
});
app.get('/departments', (req, res) => {
    const sql = 'SELECT DID, DNAME, DHEAD FROM department';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching departments:', err);
            res.status(500).send('Error fetching departments');
        } else {
            res.json(results);
        }
    });
});


app.post('/add-department', (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO department SET ?';
    db.query(sql, data, (err, result) => {
        if (err) {
            console.error('Error adding department:', err); // Log the error
            res.status(500).send(err);
        } else {
            res.json({ message: 'Department added successfully', id: result.insertId });
        }
    });
});

app.get('/attendance', (req, res) => {
    const sql = 'SELECT * FROM attendance';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching attendance:', err);
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});
app.post('/add-attendance', (req, res) => {
    const data = req.body; // Expecting EID, A_DATE, STATUS, LOGIN, LOGOUT
    const sql = 'INSERT INTO attendance SET ?';
    db.query(sql, data, (err, result) => {
        if (err) {
            console.error('Error adding attendance:', err.code);  // Log error code
            res.status(500).send(`Error adding attendance: ${err.message}`);  // Send error message to frontend
        } else {
            res.json({ message: 'Attendance added successfully', id: result.insertId });
        }
    });
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});