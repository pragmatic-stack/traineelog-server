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

    task
        .save()
        .then(() => {
            res.status(200).json({ task: "task added successfully"});
        })
        .catch(() => {
            res.status(400).send("unable to save task to database");
        });
});

module.exports = taskRoutes;
