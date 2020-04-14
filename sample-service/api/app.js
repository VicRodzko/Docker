import express from 'express';
import bodyParser from 'body-parser';
import index from './routes/index';
import employees from './routes/employees';

const app = express();

app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', index);
app.use('/employees', employees);

app.listen(8080);
