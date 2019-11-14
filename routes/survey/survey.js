var express = require('express');
var router = express.Router();
var fs = require('fs');


router.post('/addSurvey/:type', function(req, res, next){
  var result_check = {};

  // this is the ID value for input_value
  // this value can be get from react message
  var survey_val = req.params.survey_val;
  var documents;
  documents[survey_val] = req.body;

  fs.writeFile(__dirname + "/../../data/survey.json",
    JSON.stringify(inputs, null, '\t'), 'utf8', function(err, data){
      result_check = {"success": 'OK'};
      res.json(result);
  });
});
