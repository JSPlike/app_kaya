var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inputSchema = new Schema({
    CheckCode: {type: String, ref: 'user_code'},
    OPKTest: Number,
    Flow: Number,
    Sex: String,
    Temperature: Number,
    Cervical_mucus: String,
    Symptoms: String,
    Moods: String,
    Click_Time: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('inputA', inputSchema);
