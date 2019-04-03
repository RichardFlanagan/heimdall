var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.index = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.send(err);
        }

        res.render('users', { users: users });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
//     var contact = new Contact();
//     contact.name = req.body.name ? req.body.name : contact.name;
//     contact.gender = req.body.gender;
//     contact.email = req.body.email;
//     contact.phone = req.body.phone;
// // save the contact and check for errors
//     contact.save(function (err) {
//         // if (err)
//         //     res.json(err);
// res.json({
//             message: 'New contact created!',
//             data: contact
//         });
//     });
};


// Handle view user info
exports.view = function (req, res) {
    // var User = mongoose.model('User');

    User.findOne(
        {username: req.params.username}, 
        function (err, user) {
            if (err){
                res.send(err);
            }

            if (user){
                res.render('user', { target_user: user.username });
            } else{
                res.send("user not found");
            }
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
exports.delete = function (req, res) {
    // Contact.remove({
    //     _id: req.params.contact_id
    // }, function (err, contact) {
    //     if (err)
    //         res.send(err);
    //     res.json({
    //         status: "success",
    //         message: 'Contact deleted'
    //     });
    // });
};
