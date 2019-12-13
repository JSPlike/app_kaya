var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');
var InputA = require('../../models/input_model_A');
var InputB = require('../../models/input_model_B');


// Just for test
// this code is not important
router.get('/getInput/:type', function(req, res, next){

  // type is version A or version B
  var type = req.params.type;

  if(type === "A"){
    InputA.find(function(err, inputas){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(inputas);
    });
  }
  else if(type === "B"){
    InputB.find(function(err, inputbs){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(inputbs);
    });
  }
});

//    /addInput/A
//    /addInput/B
router.post('/addInput/:type', function(req, res, next){

  //initialize
  var result_check = {};
  var checkCode = req.body.CheckCode;
  var opkTest = req.body.OPKTest;
  var flow = req.body.Flow;
  var sex = req.body.Sex;
  var temperature = req.body.Temperature;
  var cervicalMucus = req.body.Cervical_mucus;
  var symptoms = req.body.Symptoms;
  var moods = req.body.Moods;

  var type = req.params.type;
  console.log(type);

  // if type is "A"
  if(type === "A"){
    var inputA = new InputA();
    inputA.CheckCode = checkCode;
    inputA.OPKTest = opkTest;
    inputA.Flow = flow;
    inputA.Sex = sex;
    inputA.Temperature = temperature;
    inputA.Cervical_mucus = cervicalMucus;
    inputA.Symptoms = symptoms;
    inputA.Moods = moods;
    inputA.save();
  }
  // if type is "B"
  else if (type === "B") {
    var inputB = new InputB();
    inputB.CheckCode = checkCode;
    inputB.OPKTest = opkTest;
    inputB.Flow = flow;
    inputB.Sex = sex;
    inputB.Temperature = temperature;
    inputB.Cervical_mucus = cervicalMucus;
    inputB.Symptoms = symptoms;
    inputB.Moods = moods;
    inputB.save();
  }

  res.json({result_check: "Success"});
});

module.exports = router;
