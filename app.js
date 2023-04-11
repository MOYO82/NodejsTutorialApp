const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('/routes/users');

const app = express();
const port = 4000


//view egine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//User object request
app.get('/user/:name/ :age/ :sex', (request, response) => {
    res.json({name: request.params.name, age: request.params.age, sex: request.params.sex});
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

//catch 404 message
app.use(function (error, request, next) {
    next(createError(404));
});

//Error handler
app.use(function (error, request, response, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};

//Error page
res.status(err.status || 500);
res.render('error');
});

module.exports = app;

app.listen(4000, ()=> console.log(`server listerning on port: ${4000}`))