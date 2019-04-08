var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    // TODO hash n salt etc
    password: String
});

module.exports = mongoose.model('User', userSchema);
