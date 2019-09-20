const express = require("express");
const revenueRoutes = express.Router();

const Revenue = require("./revenue.model");

revenueRoutes.route("/add").post(function(req, res) {
  let revenue = new Revenue(req.body);
  revenue
    .save()
    .then(() => {
      res.status(200).json({ business: "revenue added successfully" });
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

revenueRoutes.route("/").get(function(req, res) {
  Revenue.find(function(err, revenues) {
    if (err) {
      res.json(err);
    } else {
      res.json(revenues);
    }
  });
});

revenueRoutes.route("/delete/:id").delete(function(req, res) {
  Revenue.findByIdAndRemove({ _id: req.params.id }, function(err) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

revenueRoutes.route("/update/:id").post(function(req, res) {
  Revenue.findById(req.params.id, function(err, revenue) {
    if (!revenue) res.status(404).send("data is not found");
    else {
      revenue.payerAccount = req.body.payerAccount;
      revenue.recieverBic = req.body.recieverBic;
      revenue.recieverName = req.body.recieverName;
      revenue.recieverAccount = req.body.recieverAccount;
      revenue.amount = req.body.amount;
      revenue.revenueDay = req.body.revenueDay;
      revenue.usage = req.body.usage;
      revenue.identifier = req.body.identifier;
      revenue.recurring = req.body.recurring;
      revenue.interval = req.body.interval;
      revenue.category = req.body.category;
      revenue.assigned = req.body.assigned;
      revenue.subCategory = req.body.subCategory;
      revenue
        .save()
        .then(() => {
          res.json("Update complete");
        })
        .catch(() => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

revenueRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;

  Revenue.findById(id, function(err, revenue) {
    if (err) {
      res.json(err);
    } else {
      res.json(revenue);
    }
  });
});

revenueRoutes.route("/checksum/:checksum").get(function(req, res){
  let checksum = req.params.checksum;

  Revenue.find({ checksum: checksum }, function(err, revenues){
    if(err){
      res.json(err);
    } else {
      res.json(revenues);
    }
  })
});

revenueRoutes.route("/account/:account").get(function(req, res){
  let account = req.params.account;

  Revenue.find({ payerAccount: account }, function(err, revenues){
    if(err){
      res.json(err);
    } else {
      res.json(revenues);
    }
  })
});

module.exports = revenueRoutes;
