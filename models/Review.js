var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var reviewSchema = new Schema({
    title: String,
    author: mongoose.model('User').schema,
    body:   String,
    comments: [mongoose.model('ReviewComment').schema],
    dateCreated: { type: Date, default: Date.now },
    // state: mongoose.model('ReviewState').schema,
});

module.exports = mongoose.model('Review', reviewSchema);