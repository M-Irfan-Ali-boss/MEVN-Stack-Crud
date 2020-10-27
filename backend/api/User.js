const express = require('express');
const connection = require('../db/db');

connection.connect((err) => {
  if (err) {
    console.log('Database Not Connected!');
  } else {
    console.log('Database Connected!');
  }
});

const router = express.Router();

const headers = {
  'Content-Type': 'application/json',
};

//Fetch All User
router.get('/', (req, res) => {
  const sql = 'Select * from users';
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(404).send('User Not Found!');
    } else {
      res.json(result);
    }
  });
});

//Fetch Single User
router.get('/:id', (req, res) => {
  const sql = 'Select * from users Where id = ?';
  const id = req.params.id;
  connection.query(sql, id, (err, result) => {
    if (err) {
      res.status(404).send('User Not Found!');
    } else {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.status(404).send('User Not Found!');
      }
    }
  });
});

//Add User
router.post('/', (req, res) => {
  const { name, email, phone, address } = req.body;
  const sql = 'INSERT INTO users (name, email, phone, address) VALUES (?,?,?,?)';
  try {
    connection.query(sql, [name, email, phone, address], (err, result) => {
      if (err) {
        res.status(500).send('User Not Added!');
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

//Update User
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, email, phone, address } = req.body;
  const sql = 'UPDATE users SET name=?,email=?,phone=?,address=? WHERE id = ?';
  try {
    connection.query(sql, [name, email, phone, address, id], (err, result) => {
      if (err) {
        res.status(500).send('User Not Updated!');
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

//Delete User
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'Delete from users Where id = ?';
  connection.query(sql, id, (err, result) => {
    if (err) {
      res.status(404).send('User Not Found!');
    } else {
      res.status(200).send('User Deleted Successfully!');
    }
  });
});

module.exports = router;
