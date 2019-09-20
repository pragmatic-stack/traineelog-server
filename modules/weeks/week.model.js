const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Week = new Schema(
    {
        fromDay: String,
        toDay: String,
    },
    {
        collection: "weeks"
    }
);

module.exports = mongoose.model("Week", Week);
