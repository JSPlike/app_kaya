var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');
var InputA = require('../../models/input_model_A');
var InputB = require('../../models/input_model_B');

router.get('/getInput/:input_val', function(req, res, next){

  if(input_val === 'A'){
    InputA.find(function(err, inputs){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json({inputs});
    });
  }
  else {
    InputB.find(function(err, inputs){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json({inputs});
    });
  }
});


//    /addInput/A
//    /addInput/B

router.post('/addInput/:type', function(req, res, next){
  var result_check = {};

  var opkTest = req.body.OPK_Test;
  var flow = req.body.Flow;
  var sex = req.body.Sex;
  var temperature = req.body.Temperature;
  var cervicalMucus = req.body.Cervical_mucus;
  var symptoms = req.body.Symptoms;
  var moods = req.body.Moods;

  var type = req.params.type;
  console.log(type);

  if(type === "A"){
    var inputA = new InputA();
    inputA.OPK_Test = opkTest;
    inputA.Flow = flow;
    inputA.Sex = sex;
    inputA.Temperature = temperature;
    inputA.Cervical_mucus = cervicalMucus;
    inputA.Symptoms = symptoms;
    inputA.Moods = moods;
    inputA.save();
  }
  else if (type === "B") {
    var inputB = new InputB();
    inputB.OPK_Test = opkTest;
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
