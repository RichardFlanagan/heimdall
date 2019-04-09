var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewCommentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    body:   String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ReviewComment', reviewCommentSchema);