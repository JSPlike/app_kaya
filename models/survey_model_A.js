var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// survey schema
var surveySchema = new Schema({
    CheckCode: {type: String, ref: 'user_code'},
    Answer: {
      type: String
    },
    Click_Time: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('surveyA', surveySchema);
