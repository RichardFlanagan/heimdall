var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
// router.get('/:userId', function(req, res, next) {
// 	// res.send('user not found');
// 	// mongoose.model('User').find(
// 	// 	{ id: req.parms.userId }, 
// 	// 	function(err, users){
// 	// 		// res.render('user', { title: 'Express' });
// 	// 		res.send('user found');
// 	// 	}
// 	// );

// 	// console.log(req)

// 	var promise = mongoose.model('User').findOne({_id: req.params.userId}).exec();
// 	console.log(req.params)

// 	promise.then(function (doc){
// 		console.log(doc)
// 		res.send(doc);
// 	})
// });

var userController = require('../controllers/userController');

router.route('/:userId')
    .get(userController.view)
    // .patch(contactController.update)
    // .put(contactController.update)
    // .delete(contactController.delete);

module.exports = router;
