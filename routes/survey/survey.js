var express = require('express');
var router = express.Router();

var fs = require('fs');

const controlSurveyJson = require('../../data/survey_control.json');
const experimentSurveyJson = require('../../data/survey_experiment.json');

// data folder / jsonfile  => frontend
router.get('/requestSurvey/control', function(req, res, next){
  res.json(controlSurveyJson);
});
router.get('/requestSurvey/experiment', function(req, res, next){
  res.json(experimentSurveyJson);
});


/* -------save survey------- */

// common survey
var SurveyCommon = require('../../models/survey_model_common');
// experiment survey
var SurveyA = require('../../models/survey_model_A');
// control survey
var SurveyB = require('../../models/survey_model_B');
// final survey
var SurveyFinal = require('../../models/survey_model_final');

// You have to change this code for flexible survey
router.post('/addSurvey/common', function(req, res, next){
  var checkCode = req.body.CheckCode;
  var answer = req.body.Answer;

  // json file !
  answer = JSON.stringify(answer);

  // load schema
  var surveyCommon = new SurveyCommon();

  surveyCommon.CheckCode = checkCode;
  surveyCommon.Answer = answer;

  // save database
  surveyCommon.save();

  // result value
  res.json({"result_check": "Success"});
});
//experiment
router.post('/addSurvey/experiment', function(req, res, next){
  var checkCode = req.body.CheckCode;
  var answer = req.body.Answer;
  answer = JSON.stringify(answer);

  var surveyA = new SurveyA();

  surveyA.CheckCode = checkCode;
  surveyA.Answer = answer;

  surveyA.save();
  res.json({"result_check": "Success"});
});
//control
router.post('/addSurvey/control', function(req, res, next){
  var checkCode = req.body.CheckCode;
  var answer = req.body.Answer;
  answer = JSON.stringify(answer);

  var surveyB = new SurveyB();

  surveyB.CheckCode = checkCode;
  surveyB.Answer = answer;

  surveyB.save();
  res.json({"result_check": "Success"});
});
//final
router.post('/addSurvey/final', function(req, res, next){
  var checkCode = req.body.CheckCode;
  var answer = req.body.Answer;
  answer = JSON.stringify(answer);

  var surveyFinal = new SurveyFinal();

  surveyFinal.CheckCode = checkCode;
  surveyFinal.Answer = answer;

  surveyFinal.save();
  res.json({"result_check": "Success"});
});

module.exports = router;
