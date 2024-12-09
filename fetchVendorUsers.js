const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
  user: 'candidate',
  password: 'NoTeDeSt^C10.6?SxwY882}',
  database: 'conqtvms_dev',
});

const prId = 1;
const custOrgId = 1; 

pool.query('SELECT * FROM PrLineItems WHERE purchaseRequestId = ? AND custOrgId = ?', [prId, custOrgId], (err, results) => {
  if (err) {
    console.error('Error fetching data:', err);
  } else {
    console.log('Filtered records:', results);
  }
  pool.end();
});
