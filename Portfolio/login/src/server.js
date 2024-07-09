
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cerp',
  password: 'Jack@15122000',
  port: 5432,
});
const crypto = require('crypto');
const secret = 'jacky'

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const userQuery = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
//     const user = userQuery.rows[0];

//     if (user && await bcrypt.compare(password, user.password)) {
//       const token = jwt.sign({ username: user.username, role: user.role },secret, { expiresIn: '1h' });
//       res.json({ token });
//     } else {
//       res.status(401).json({ error: 'Invalid credentials...' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
      const user = result.rows[0];
      client.release();
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      console.log(`Stored hash: ${user.password}`); // Debug statement
  
      // Hash the provided password to compare with the stored hash
      const hashedGivenPassword = await bcrypt.hash(password, user.password.substr(0, 29)); // Use the same salt from the stored hash
      console.log(`Hashed given password: ${hashedGivenPassword}`); // Debug statement
  
      // Compare the hashed given password with the stored hash
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        const token = jwt.sign({ username: user.username, role: user.role }, secret, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (err) {
      console.error('Error fetching user', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
app.get('/api/users', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users');
      const users = result.rows;
      client.release();
      res.json(users);
    } catch (err) {
      console.error('Error fetching users', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
