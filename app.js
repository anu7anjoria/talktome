var createError = require('http-errors');
var express = require('express');
var path = require('path');
var GoogleStrategy = require('passport-google');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var session = require('express-session');
//require('./app_server/models/db');
require('./app_api/models/db');
const indexRouter = require('./app_server/routes/index');
const apiRoute = require('./app_api/routes/index');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app_server','public')));
app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api',function(req,res,next){
  res.header('Access-Control-Allow-Origin','http://localhost:3000');
  res.header('Access-Control-Allow-Origin','Origin,X-Requested-With,Content-Type,Accept');
 next();
});
app.use('/', indexRouter);
app.use('/api',apiRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
