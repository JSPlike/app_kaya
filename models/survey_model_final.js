var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// final survey
var surveySchema = new Schema({
  CheckCode: {type: String, ref: 'user_code'},
  Answer: {
    type: String
  },
  Click_Time: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('surveyFinal', surveySchema);
