const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
  user: 'candidate',
  password: 'NoTeDeSt^C10.6?SxwY882}',
  database: 'conqtvms_dev',
});

pool.query('SELECT 1 + 1 AS result', (err, results) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connected successfully:', results);
  }
  pool.end();
});
