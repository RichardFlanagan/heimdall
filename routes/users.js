var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var userController = require('../controllers/userController');

router.get('/', userController.index);
router.route('/:username')
    .get(userController.view)
    // .patch(userController.update)
    // .put(userController.update)
    // .delete(userController.delete);

module.exports = router;
