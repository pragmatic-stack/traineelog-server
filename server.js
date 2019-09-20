const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./modules/database/DB.js");
const revenueRoutes = require("./modules/revenues/revenue.route");
const weekRoutes = require("./modules/weeks/week.route");
const taskRoutes = require("./modules/task/task.route");

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected.");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// route
app.use("/revenue", revenueRoutes);
app.use("/week", weekRoutes);
app.use("/task", taskRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
