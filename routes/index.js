var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usercode = require('../models/user_code');
var Usercount = require('../models/user_count');

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

  return res.json({
    "message": resultCode
  });

  // var realUser = new Usercode();
  // realUser.UserCode = resultCode;
  //
  // realUser.save(function(err, code){
  //   if(err) return console.error(err);
  // });


  // var userNum = new Usercount();
  // userNum.find(function(err, data){
  //   if(err) return console.log("data find err", err);
  //   data.AgreeUser++;
  //   data.save(function(err){
  //     if(err) return console.log('AgreeUser save err', err);
  //     console.log('Success success User Count!!');
  //   });
  // });
});

router.get('/reject', function(req, res, next){
  var userNum = new Usercount();

  userNum.find({}, function(err, data){
    if(err) return console.log("data find err", err);

    data.RejectUser++;
    data.save(function(err){
      if(err) return console.log('RejectUser save err', err);
      console.log('Success reject User Count!!');
    });
  });
});

module.exports = router;
