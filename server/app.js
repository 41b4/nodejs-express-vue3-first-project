const dotenv= require('dotenv')
dotenv.config()

var express = require('express');
const cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var newbookRouter = require('./routes/newbook');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/addbook', newbookRouter);

module.exports = app;
