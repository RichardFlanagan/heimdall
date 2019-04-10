var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: String,
    dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);