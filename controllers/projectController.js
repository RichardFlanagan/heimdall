var mongoose = require('mongoose');
var Project = mongoose.model('Project');


// View all Projects
exports.viewProjects = function (req, res) {
    Project.find({}, function (err, projects) {
        if (err) {
            res.send(err);
        }

        res.render('project/viewProjects', { projects: projects });
    });
};


// View a single Project
exports.viewProject = function (req, res) {
    Project.findOne(
        {name: req.params.project_name}, 
        function (err, project) {
            if (err){
                res.send(err);
            }

            if (project){
                res.render('project/viewProject', { project: project });
            } else{
                res.send("project not found");
            }
        }
    );
};


// The view for creating a new Project
exports.viewCreateProject = function (req, res) {
    res.render('project/createProject');
};


// The endpoint for creating a new Project
exports.createProject = function (req, res) {
    var project = new Project();
    project.name = req.body.name;

    project.save(function (err) {
        if (err){
            res.json(err);
        }

        res.redirect('projects/'+project.name);
    });
};

