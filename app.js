//load our app server using express somehow..
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');

var origin = {
  origin: '*'
};

app.use(cors(origin));

var index = require('./routes/index');
var users = require('./routes/users');
var inputs = require('./routes/input/inputs');
var survey = require('./routes/survey/survey');

var mongoose = require('mongoose');

//models



app.use(morgan('short'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//[MONGO CONNECTION]

//We have to change this part to your information

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected mongodb!!');
});
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/api', index);
app.use('/api', users);
app.use('/api', inputs);
app.use('/api', survey);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error page
  res.status(err.status || 500);
  res.send('error: ' + err.status);
});

module.exports = app;
