var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inputSchema = new Schema({
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
