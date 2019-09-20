const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
        publishedAt: String,
        title: String
    },
    {
        collections: "articles"
    }
);

module.exports = mongoose.model("Article", Article);

