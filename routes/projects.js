var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var projectController = require('../controllers/projectController');


router.use('/',function(req, res, next){
	if (req.session.user) {
		next();
	} else {
		req.session.error = 'Access denied!';
		res.redirect('/login');
	}
});

router.get('/', projectController.viewProjects);
router.post('/', projectController.createProject);
router.get('/create', projectController.viewCreateProject);
router.get('/:project_name', projectController.viewProject);

module.exports = router;
