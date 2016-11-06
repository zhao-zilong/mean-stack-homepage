var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var experienceSchema = mongoose.Schema({
    company: String,
    title: String,
    timePeriod: {
        start: String,
        end: String
    },
    description: String
});

module.exports = mongoose.model('Experience',experienceSchema);