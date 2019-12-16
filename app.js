
const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Listening at http://${DOMAIN}:${PORT} in ${app.get('env')} environment`)
})
