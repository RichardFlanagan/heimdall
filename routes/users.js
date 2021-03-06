var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var userController = require('../controllers/userController');


router.use('/',function(req, res, next){
	if (req.session.user) {
		next();
	} else {
		req.session.error = 'Access denied!';
		res.redirect('/login');
	}
});

router.get('/', userController.viewUsers);
router.post('/', userController.createUser);

router.get('/create', userController.viewCreateUser);
router.get('/:username', userController.viewUser);

module.exports = router;
