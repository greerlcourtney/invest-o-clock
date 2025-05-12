import dotenv from 'dotenv';
import express from 'express';
import pool from './db.js';

dotenv.config();

const app = express();
app.use(express.static('public'));

app.get('/data', async (req, res) => {
    try {
      console.log('Querying Blog table...');
      const [rows] = await pool.query('SELECT * FROM Blog LIMIT 10');
      res.json(rows);
    } catch (err) {
      console.error('DB Query Error:', err);
      res.status(500).json({ error: err.message });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});