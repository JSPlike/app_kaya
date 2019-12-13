var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveySchema = new Schema({
    CheckCode: {type: String, ref: 'user_code'},
    Answer: {
      type: String
    },
    Click_Time: { type: Date, default: Date.now  }
});

/*
{
"surveyId": 1,
  "type": "double",
  "title": "In general, how likely would you trust this app?",
  "data": [
    "Very inaccurate",
    "Inaccurate"
  ]
}
*/

module.exports = mongoose.model('surveyB', surveySchema);
