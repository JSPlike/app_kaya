var express = require('express');
var router = express.Router();
var fs = require('fs');
var SurveyA = require('../../models/survey_model_A');
var SurveyB = require('../../models/survey_model_B');

router.post('/addSurvey/:type', function(req, res, next){
  var result_check = {};
  var checkCode = req.body.CheckCode;
  var s1 = req.body.Survey1;
  var s2 = req.body.Survey2;
  var s3 = req.body.Survey3;
  var s4 = req.body.Survey4;
  var s5 = req.body.Survey5;
  var s6 = req.body.Survey6;
  var s7 = req.body.Survey7;
  var s8 = req.body.Survey8;
  var s9 = req.body.Survey9;
  var s10 = req.body.Survey10;
  var s11= req.body.Survey11;

  if(type === "A"){
    var surveyA = new SurveyA();
    surveyA.CheckCode = checkCode;
    surveyA.Survey1 = s1;
    surveyA.Survey2 = s2;
    surveyA.Survey3 = s3;
    surveyA.Survey4 = s4;
    surveyA.Survey5 = s5;
    surveyA.Survey6 = s6;
    surveyA.Survey7 = s7;
    surveyA.Survey8 = s8;
    surveyA.Survey9 = s9;
    surveyA.Survey10 = s10;
    surveyA.Survey11 = s11;
    surveyA.save();
  }
  else if (type === "B") {
    var surveyB = new SurveyB();
    surveyB.CheckCode = checkCode;
    surveyB.Survey1 = s1;
    surveyB.Survey2 = s2;
    surveyB.Survey3 = s3;
    surveyB.Survey4 = s4;
    surveyB.Survey5 = s5;
    surveyB.Survey6 = s6;
    surveyB.Survey7 = s7;
    surveyB.Survey8 = s8;
    surveyB.Survey9 = s9;
    surveyB.Survey10 = s10;
    surveyB.Survey11 = s11;
    surveyB.save();
  }

  res.json({result_check: "Success"});
});
