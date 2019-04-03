var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var reviewController = require('../controllers/reviewController');

router.get('/', reviewController.index);
router.post('/', reviewController.create);

router.route('/:reviewId')
    .get(reviewController.view)
    // .patch(reviewController.update)
    // .put(reviewController.update)
    // .delete(reviewController.delete);

module.exports = router;
