const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;


const pool = mysql.createPool({
  host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
  user: 'candidate',
  password: 'NoTeDeSt^C10.6?SxwY882}',
  database: 'conqtvms_dev',
});

// Define the API endpoint
app.get('/api/getVendorUsers', (req, res) => {
  const { prId, custOrgId } = req.query;

  if (!prId || !custOrgId) {
    return res.status(400).json({ error: 'prId and custOrgId are required' });
  }

  // Query the database
  pool.query(
    'SELECT * FROM PrLineItems WHERE purchaseRequestId = ? AND custOrgId = ?',
    [prId, custOrgId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database query failed', details: err });
      }
      res.json(results);
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
