var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewStatusSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Review Status', reviewStatusSchema);