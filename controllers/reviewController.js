var mongoose = require('mongoose');
var Review = mongoose.model('Review')

exports.index = function (req, res) {
    Review.find({}, function (err, reviews) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Reviews retrieved successfully",
            data: reviews
        });
    });
};

// Handle create Review actions
exports.create = function (req, res) {
    var review = new Review();
    review.title = req.body.title;
    review.body = req.body.body;
    // review.author = req.body.author

    // save the contact and check for errors
    review.save(function (err) {
        if (err){
            res.json(err);
        }

        res.json({
            message: 'New review created!',
            data: review
        });
    });
};


// Handle view Review info
exports.view = function (req, res) {
    Review.findOne(
        {"_id": req.params.reviewId}, 
        function (err, review) {
            if (err){
                res.send(err);
            }

            res.render('review', { review: review });
        }
    );
};


// Handle update contact info
exports.update = function (req, res) {
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
};


// Handle delete contact
exports.delete = function (req, res) {};
