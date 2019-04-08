var mongoose = require('mongoose');
var User = mongoose.model('User');


// The index of User, views all
exports.index = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.send(err);
        }

        res.render('user/users', { users: users });
    });
};


// The POST action for creating a new User
exports.create = function (req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    console.log(req.body)

    user.save(function (err) {
        if (err){
            res.json(err);
        }

        res.redirect('users/'+user.username);
    });
};


// The view for creating a new User
exports.createUser = function (req, res) {
    res.render('user/createUser');
};


// View a single User
exports.viewUser = function (req, res) {
    User.findOne(
        {username: req.params.username}, 
        function (err, user) {
            if (err){
                res.send(err);
            }

            if (user){
                res.render('user/viewUser', { target_user: user.username });
            } else{
                res.send("user not found");
            }
        }
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
// exports.delete = function (req, res) {
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
// };
