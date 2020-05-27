require('./settings/db-config');
var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const usersRouter = require('./routes/users');
const recommendationRouter = require('./routes/recommendation');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//save user data
app.post('/users', usersRouter.saveUserData);

//get recommendation on the basis of genre and provider
app.get('/recommendations', recommendationRouter.getRecommendationsByTypeAndProvider);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
