const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.HOST || 'localhost',
  user: 'root',
  password: 'root',
  database: 'fixic',
  port: 3306,
});

db.connect((err) => {
  if (err) throw err;

  console.log('Mysql: Connected!!!');
});

db.promise = (sql, args) =>
  new Promise((resolve, reject) => {
    db.query(sql, args, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

module.exports = db;
