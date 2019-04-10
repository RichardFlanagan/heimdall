var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Project = mongoose.model('Project');


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

	User.findOne(query)
		.select('_id username')
		.exec(
			function (err, user) {

		        if (err) {
		            res.send(err);
		        } else if(!user){
		        	res.send("error logging in")
		        } else{
					// Regenerate session when signing in to prevent fixation
					req.session.regenerate(function(){
						// Store the user's primary key
						// in the session store to be retrieved,
			        	req.session.user = user;
			        	res.redirect('/users/'+user.username);
			        });
		    	}
		    }
		);
});


router.get('/preferences', function(req, res){
	User.findOne({username: req.session.user.username})
	.exec(
		function (err, user) {
	        if (err) {
	            res.send(err);
	        } 

	       	res.render('preferences', {user: user});
	    }
	);

});

router.post('/preferences', function(req, res){
	Project.findOne({name: req.body.name})
	.select('_id username')
	.exec(
		function (err, user) {
	        if (err) {
	            res.send(err);
	        } 
// this isn't atomic, consider refactor
User.findOne({username: req.session.user.username})
.exec(
	function (err, user) {
        if (err) {
            res.send(err);
        } 

       	// res.render('preferences', {user: user});
    }
);

	    }
	);
});

module.exports = router;
