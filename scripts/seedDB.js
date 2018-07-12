const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytarticle",
    {
        useMongoClient: true
    }
);

const articleSeed = [
    {
        title: "test",
        url: "www.espn.com",
        section: "sports",
        subSection: "Football",
        createdDate: "1-1-2018",
        updatedDate: "2-5-2018",
        publishedDate: "1-15-2018"
    },
    {
        title: "test2",
        url: "www.aol.com",
        section: "sports",
        subSection: "Soccer",
        createdDate: "2-2-2018",
        updatedDate: "2-10-2018",
        publishedDate: "3-1-2018"
    }
];
db.Article
.remove({})
.then(() => db.Article.collection.insertMany
(articleSeed))
.then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});