var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usercode = require('../models/user_code');
var ran = require('../lib/randomUser');
var typeNum = require('../lib/typeNum');

/* GET home page. */



//this is creating random users
router.get('/consent1', function(req, res, next) {


  // You can change this part to funcion
  var random_base_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var random_base_num = "0123456789";

  var temp_1 = '';
  var temp_2 = '';

  // getting client ip
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip);
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

  // creating usercode
  var resultCode = temp_1.concat(temp_2);

  var user = resultCode;
  //reading usertype

  var user_type = req.body.userId;
  //if the user is real user,
  //one random code will be save in database;
  if(user_type == 'A') user_type = 'AB';
  else user_type = 'BA';

  //creating userid
  //var user = ran.random_user();

  //mongDB SAVE
  var realUser = new Usercode();
  realUser.UserCode = user;
  realUser.UserType = user_type;
  realUser.IPaddress = ip;

  realUser.save(function(err, code){
    if(err) return console.error(err);
  });

  //send message to front
  return res.json({
    "usercode": user,
    "usertype": user_type,
    "IP_Address": ip
  });
});

//this is creating users after count user’s number
router.get('/consent2', function(req, res, next){
  var realUser = new Usercode();


  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //creating userid

  // You can change this part to funcion
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

  // creating usercode
  var resultCode = temp_1.concat(temp_2);

  var user = resultCode;
  var type = '';


  // count user (type is 'AB' or 'BA')

  var a;
  var b;

  a = UserCode.countDocuments({UserType: 'AB'}, function(err, count){
    if(err) console.log(error);
    return count;
  });

  b = UserCode.countDocuments({UserType: 'BA'}, function(err, count){
    if(err) console.log(error);
    return count;
  });

  console.log(a);
  console.log(b);

  if(a <= b){
    type = 'AB';
    realUser.UserCode = user;
    realUser.UserType = type;
    realUser.IPaddress = ip;
  }
  else {
    type = 'BA';
    realUser.UserCode = user;
    realUser.UserType = type;
    realUser.IPaddress = ip;
  }

  realUser.save(function(err, code){
    if(err) return console.error(err);
  });

  return res.json({
    "usercode": user,
    "usertype": type,
    "IPaddress": ip
  });
});


router.get('/reject', function(req, res, next){

  //if the user is not real user,
  // "No_user" string will be save to database
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
