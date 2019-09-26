const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentItem = new Schema({
    order: Number,
    postId: {
       type: Schema.Types.ObjectId,
       ref: 'content-items'
    },
    content: String
});

const Post = new Schema({
    title: String,
    published: String,
    status: String,
    content: String
});
