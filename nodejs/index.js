const app = require('express')();
const mysql = require('mysql');

const bodyParser = require('body-parser');

app.use(bodyParser.json({
  limit: '8mb'
})); // support json encoded bodies

// environment variables
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

// mysql credentials
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || '172.17.0.2',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'test'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting mysql: ', err);
  } else {
    console.log('mysql connection successful');
    express.listen(PORT, HOST, (err) => {
      if (err) {
        console.error('Error starting  server', err);
      } else {
        console.log('server listening at port ' + PORT);
      }
    });
  }
});

// home page
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Hello world'
  });
});

// push a employee into database
app.post('/employees', (req, res) => {
  const employee = req.body;
  const sql = 'INSERT INTO employees values(?, ?, ?, ?, ?, ?, ?)';

  connection.query(sql, [employee.id, employee.name, employee.positions, employee.team, employee.unit, employee.location, employee.phone], (err) => {
    if (err) {
      console.error(err);
      res.json({
        success: false,
        message: 'Error occured'
      });
    } else {
      res.json({
        success: true,
        message: 'Successfully added employee'
      });
    }
  });
});

// fetch all employees
app.post('/get-employees', (req, res) => {
  const sql = 'SELECT * FROM employees';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.json({
        success: false,
        message: 'Error occured'
      });
    } else {
      res.json({
        success: true,
        result: results
      });
    }
  });
  res.redirect('/employees');
});

// Delete employee
app.get('/employees/:id', function(req, res) {
  const id= req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  connection.query(sql, [id], function (err, results) {
    if (err) {
      console.error(err);
      res.json({
        success: false,
        message: 'Error occured'
      });
    } else {
      res.json({
        success: true,
        result: results
      });
    }
  });
  res.redirect('/employees');
});
