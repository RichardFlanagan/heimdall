var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var preferencesSchema = new Schema({
	project: mongoose.model('Project').schema,
});

var userSchema = new Schema({
    username: String,
    password: String, // TODO hash n salt etc
    preferences: preferencesSchema
});

module.exports = mongoose.model('User', userSchema);
