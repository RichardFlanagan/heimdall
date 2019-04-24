var config = require('dotenv').config()
var mongoose = require('mongoose');
var projectSchema = require('./models/Project')
var userSchema = require('./models/User')


var dbUrl = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST
mongoose.connect(dbUrl, {
    useNewUrlParser: true
});
console.log("Mongo URL: " + dbUrl)


var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));


//Define a User Model
var User = mongoose.model('User', userSchema.schema, 'users');

// Create and User
var admin = new User({
    username: 'admin',
    password: '123'
});

// save model to database
admin.save(function(err, user) {
    if (err) return console.error(err);
    console.log(user.username + " saved to users.");
});