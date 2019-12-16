
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');




const app = express();


app.set('view engine', 'ejs');
app.set('views','views');



app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());


function setCookies(req, res, next) {

    const username = req.cookies.username;
    res.locals.inputUserName = username || '';

    console.log('respond: ', res.locals.inputUserName);
    next();
}

app.use(setCookies);


const usersRouter = require('./routes/users');
app.use('/', usersRouter);

const PORT = process.env.PORT || 4000
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Listening at http://${DOMAIN}:${PORT} in ${app.get('env')} environment`)
})
