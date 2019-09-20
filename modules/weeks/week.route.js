const express = require('express');
const weekRoutes = express.Router();
const Week = require("./week.model");
const moment = require("moment");

weekRoutes.route("/add").post(function(req, res) {
    let week = new Week(req.body);

    week
        .save()
        .then(() => {
            res.status(200).json({ info: "week added successfully"});
        })
        .catch(() => {
            res.status(400).send("unable to save to database")
        });
});

module.exports = weekRoutes;
