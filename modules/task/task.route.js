const express = require("express");
const taskRoutes = express.Router();

const Task = require('./task.model');

taskRoutes.route("/all").get(function (req, res) {
    Task.find(function (err, tasks) {
        if (err) {
            res.json(err);
        } else {
            res.json(tasks);
        }
    })
});

taskRoutes.route('/add').post(function(req, res){
    let task = new Task(req.body);
    task.created = new Date();

    task
        .save()
        .then(() => {
            res.status(200).json(task);
        })
        .catch(() => {
            res.status(400).send("unable to save task to database");
        });
});

taskRoutes.route('/update/:id').post(function(req, res){
   Task.findById(req.params.id, function(err, task){
       if(!task) res.status(400).send("task not found");
       else {
           task.title = req.body.title;
           task.description = req.body.description;
           task.status = req.body.status;

           task
               .save()
               .then(() => {
                   res.json(task);
               })
               .catch(() => {
                   res.status(400).send("unable to update the database");
               });
       }
   });
});

module.exports = taskRoutes;
