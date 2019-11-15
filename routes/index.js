var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usercode = require('../models/user_code');

/* GET home page. */
router.get('/consent', function(req, res, next) {
  // Char 4 num 5
  var random_base_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var random_base_num = "0123456789";

  var temp_1 = '';
  var temp_2 = '';

  // char length = 4
  for(var i = 0; i < 4; i++) {
    //Math.random => 0~1 random float num
    var n = Math.floor(Math.random() * random_base_char.length);
    temp_1 += random_base_char.substring(n, n + 1);
  }

  // num length = 5
  for(var j = 0; j < 5; j++){
    var m = Math.floor(Math.random() * random_base_num.length);
    temp_2 += random_base_num.substring(m, m + 1);
  }

  var resultCode = temp_1.concat(temp_2);

  var realUser = new Usercode();
  realUser.UserCode = resultCode;

  realUser.save(function(err, code){
    if(err) return console.error(err);
  });

  return res.json({
    "message": resultCode
  });

});

router.get('/reject', function(req, res, next){
  var realUser = new Usercode();
  realUser.UserCode = "No_User";

  realUser.save(function(err, code){
    if(err) return console.error(err);
  });
  
  res.json({
    "message": "Succsess this is NO user"
  });
});

module.exports = router;
