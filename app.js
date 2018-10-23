var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
//require('./app_server/models/db');
require('./app_api/models/db');
const indexRouter = require('./app_server/routes/index');
const apiRoute = require('./app_api/routes/index');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var bodyParser = require('body-parser');

const User = require('./app_api/models/userSignup');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app_server','public')));

app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
      res.redirect('/student');
  } else {
      next();
  }    
};

// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});

// route for user signup
app.route('/signup')
    .get(sessionChecker, (req, res) => {
        res.render(__dirname + '/app_server/views/signup.ejs',{title:'Signup'});
    })
    .post((req, res) => {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(user => {
            req.session.user = user;  //===========================
            res.redirect('/student');
        })
        .catch(error => {
            res.redirect('/signup');
        });
    });


// route for user Login
app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.render(__dirname + '/app_server/views/login.ejs',{title:'Login'});
    })
    .post((req, res) => {
           var email = req.body.lemail,
            password = req.body.lpassword;

        User.findOne({ email: email }).then(function (user) {
            if (!user) {
                res.redirect('/login');
            }
             else {
                req.session.user = user; //===========================
                res.redirect('/student');
            }
        });
    });

    // route for user's dashboard
app.get('/student', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
      res.render(__dirname + '/app_server/views/student/student.ejs',{title:'Student | Dashboard'});
  } else {
      res.redirect('/login');
  }
});


// route for user logout
app.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/');
  } else {
      res.redirect('/login');
  }
});

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