const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const employees = require('./routes/employees');

const app = express();

app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', index);
app.use('/employees', employees);

app.listen(8080);

module.exports = app;
