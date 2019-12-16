
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


app.set('view engine', 'ejs');
app.set('view','view');

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
app.use('/index', indexRouter);

app.use('/', usersRouter);

const PORT = process.env.PORT || 4000
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Listening at http://${DOMAIN}:${PORT} in ${app.get('env')} environment`)
})
