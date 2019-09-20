const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
    title: String,
    description: String,
    status: Boolean
},{
    collection: 'tasks'
});

module.exports = mongoose.model('Task', Task);
