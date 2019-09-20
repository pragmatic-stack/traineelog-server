const express = require('express');
const articleRoutes = express.Router();
const Article = require('./article.model');

articleRoutes.route('/add').post(function(req, res) {
    const article = new Article(req.body);


});
