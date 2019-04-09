var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var reviewController = require('../controllers/reviewController');


router.use('/',function(req, res, next){
	if (req.session.user) {
		next();
	} else {
		req.session.error = 'Access denied!';
		res.redirect('/login');
	}
});

router.get('/', reviewController.index);
router.post('/', reviewController.create);
router.post('/:reviewId/comments', reviewController.addComment);

router.route('/create')
    .get(reviewController.createReview);

router.route('/:reviewId')
    .get(reviewController.viewReview);
    // .patch(reviewController.update)
    // .put(reviewController.update)
    // .delete(reviewController.delete);

module.exports = router;
