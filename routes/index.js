var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');


// Get homepage
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Home' });
});

// Get login view
router.get('/login', function(req, res, next) {
	res.render('login');
});

// Log in : TODO all the security stuff
router.post('/login', function(req, res, next) {
	var query = {
		username: req.body.username,
		password: req.body.password
	};
	console.log(query)

	User.findOne(query, function (err, user) {
        if (err) {
            res.send(err);
        } else if(!user){
        	res.send("error logging in")
        } else{
			// Regenerate session when signing in to prevent fixation
			req.session.regenerate(function(){
				// Store the user's primary key
				// in the session store to be retrieved,
				// or in this case the entire user object
	        	req.session.user = user;
	        	res.redirect('/users/'+user.username);
	        });
    	}
    });
});

module.exports = router;
