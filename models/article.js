const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    section: {type: String, required: true},
    subSection: {type: String, require: true},
    createdDate: {type: String, require: true},
    updatedDate: {type: String, require: true},
    publishedDate: {type: String, required: true}

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;