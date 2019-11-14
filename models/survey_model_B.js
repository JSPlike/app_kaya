var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var surveySchema = new Schema({
    CheckCode: {type: String, ref: 'user_code'},
    Survey1: Number,
    Survey2: Number,
    Survey3: Number,
    Survey4: Number,
    Survey5: Number,
    Survey6: Number,
    Survey7: Number,
    Survey8: Number,
    Survey9: Number,
    Survey10: Number,
    Survey11: String,
    Click_Time: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('surveyB', surveySchema);
