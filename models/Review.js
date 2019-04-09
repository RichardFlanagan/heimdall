var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    title: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    body: String,
    comments: [mongoose.model('ReviewComment').schema],
    dateCreated: { type: Date, default: Date.now },
    status:{
    	type: String,
    	enum: ['Open', 'In Progress', 'Complete', 'Abandoned'],
    	default: 'Open'
    }
});

module.exports = mongoose.model('Review', reviewSchema);