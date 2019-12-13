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
//userAgent ( ip, browser, checking mobile or pc)
var device = require('express-device');

var useragent = require('express-useragent');
var fs = require('fs');


// CORS
// Middle ware Cross-Origin Resource Sharing
// Allow HTTP access from outside
var origin = {
  origin: '*'
};
app.use(cors(origin));

// Router part
var index = require('./routes/index');
var users = require('./routes/users');
var inputs = require('./routes/input/inputs');
var survey = require('./routes/survey/survey');

//mongodb framwork
var mongoose = require('mongoose');

//models
app.use(useragent.express());
app.use(morgan('short'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(device.capture());
//[MONGO CONNECTION]

//We have to change this part to your information
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected mongodb!!');
});
//process.env.MONGODB_URI ( need to change )
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});


//  url : /api/xxxxx
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
