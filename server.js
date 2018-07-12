const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Controller = require("./controllers/Controller");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// server up static asset
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(Controller);

// global promise for mongoose
mongoose.Promise = global.Promise;

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});