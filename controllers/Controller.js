const path = require("path");
const router = require("express").Router();
const db = require("../models");

// const Functions = {
//     findAll: function (req, res) {
//         db.
//     }
// }


// router.get("/api/articles", articleFunctions.findAll)


// If no API routes are history, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname,
    "../client/build/index.html"));
});

module.exports = router;