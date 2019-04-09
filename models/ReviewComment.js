var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewCommentSchema = new Schema({
    // author: { type: Schema.Types.ObjectId, ref: 'User' },
    author: mongoose.model('User').schema,
    body:   String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ReviewComment', reviewCommentSchema);