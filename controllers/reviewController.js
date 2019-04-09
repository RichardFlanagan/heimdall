var mongoose = require('mongoose');
var Review = mongoose.model('Review')
var ReviewComment = mongoose.model('ReviewComment')


// The index of Review, views all
exports.index = function (req, res) {
    Review.find({}, function (err, reviews) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }

        res.render('review/viewReviews', { reviews: reviews });
    });
};


// The view for creating a new Review
exports.createReview = function (req, res) {
    res.render('review/createReview');
};


// The POST action for creating a new Review
exports.create = function (req, res) {
    var review = new Review();
    review.title = req.body.title;
    review.body = req.body.description;
    // review.author = req.session.user._id;
    review.author = req.session.user;

    review.save(function (err) {
        if (err){
            res.json(err);
        }
        res.redirect('reviews/'+review._id);
    });
};


// View a single Review
exports.viewReview = function (req, res) {
    Review.findOne(
        {"_id": req.params.reviewId}, 
        function (err, review) {
            if (err){
                res.send(err);
            }

            var opts = [
                {
                    path:'author', 
                    options:{ limit:1 }, 
                    select:'-password -__v', 
                    model:'User'
                },
            ];
                console.log(review)

            // Review.populate(review, opts, function (err, review) {
            //     console.log(review)
                res.render('review/viewReview', { review: review });
            // });

        },
    );
};


// Handle update contact info
// exports.update = function (req, res) {
// Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err)
//             res.send(err);
// 		contact.name = req.body.name ? req.body.name : contact.name;
//         contact.gender = req.body.gender;
//         contact.email = req.body.email;
//         contact.phone = req.body.phone;
// // save the contact and check for errors
//         contact.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'Contact Info updated',
//                 data: contact
//             });
//         });
//     });
// };


// Handle delete contact
// exports.delete = function (req, res) {};


// The POST action for adding a new comment to a Review
exports.addComment = function (req, res) {

    Review.findOne(
        {"_id": req.params.reviewId}, 
        function (err, review) {
            if (err){
                res.send(err);
            }

            var comment = new ReviewComment();
            comment.body = req.body.comment_body;
            comment.author = req.session.user

            review.comments.push(comment);

            review.save(function(err, review){
                res.redirect('/reviews/'+review._id);
            });
        },
    );

};