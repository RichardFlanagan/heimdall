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

router.get('/', userController.index);
router.post('/', userController.create);

router.route('/create')
    .get(userController.createUser);

router.route('/:username')
    .get(userController.viewUser);
    // .patch(userController.update)
    // .put(userController.update)
    // .delete(userController.delete);

module.exports = router;
