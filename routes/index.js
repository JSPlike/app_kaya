var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usercode = require('../models/user_code');
var ran = require('../lib/randomUser');
var typeNum = requir('../lib/typeNum');

/* GET home page. */
router.get('/consent1', function(req, res, next) {

  //reading usertype
  var user_type = req.body.userId;
  //if the user is real user,
  //one random code will be save in database;
  if(user_type == 'A') user_type = 'AB';
  else user_type = 'BA';

  var user = ran.random_user();

  //mongDB SAVE
  var realUser = new Usercode();
  realUser.UserCode = user;
  realUser.UserType = user_type;

  realUser.save(function(err, code){
    if(err) return console.error(err);
  });

  //send message to front
  return res.json({
    "message": user
  });
});

router.get('/consent2', function(req, res, next){
  var realUser = new Usercode();
  var a = typeNum.ANum;
  var b = typeNum.BNum;
  var user = ran.random_user();
  var type;

  if(a <= b){
    type = 'AB';
    realUser.UserCode = user;
    realUser.UserType = type;
  }
  else {
    type = 'BA';
    realUser.UserCode = user;
    realUser.UserType = type;
  }

  realUser.save(function(err, code){
    if(err) return console.error(err);
  });

  return res.json({
    "usercode": user,
    "usertype": type
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
