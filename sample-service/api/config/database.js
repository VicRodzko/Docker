const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fixic',
  port: 3306,
});

db.connect((err) => {
  if (err) throw err;

  console.log('Mysql: Connected');
});

db.promise = (sql) =>
  new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject(new Error());
      } else {
        resolve(result);
      }
    });
  });

module.exports = db;
