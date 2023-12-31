require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');
const mongoose = require('mongoose');
const createError = require('http-errors');
require('./socket-handler');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/account', require('./routes/account'));

app.use((err, req, res, next) => {
    if(err.name === 'MongoError' || err.name === 'ValidationError' || err.name === 'CastError'){
        err.status = 442;
    }
    res.status(err.status || 500).json({message: err.message || 'some error eccured.'});
});

app.use((err, req, res, next) => {
    if(req.get('accept').includes('json')){
        return next(createError(404));
    }
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(cors());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected successfully');
    })
    .catch(err => {
        console.error('Connection error:', err);
    });


module.exports = app;
