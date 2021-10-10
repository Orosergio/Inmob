var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connectFlash = require('connect-flash');
var session = require('express-session');
const passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inmueblesRouter = require('./routes/inmuebles');
var pagosRouter = require('./routes/pagos');
var pagosInmuebleRouter = require('./routes/pagosInmueble');
var anunciosRouter = require('./routes/anuncios');

var app = express();
require('./controllers/passportLocalController');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));

//config session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 //86400000 1 day
  }
}));

//Enable flash message
app.use(connectFlash());

///Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inmuebles', inmueblesRouter);
app.use('/pagos', pagosRouter);
app.use('/pagosInmueble', pagosInmuebleRouter);
app.use('/anuncios', anunciosRouter);



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
