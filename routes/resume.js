var fs = require("fs");
var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", (req, res, next) => {
  var file = path.join(__dirname, "resume.pdf");
  res.download(file, function(err) {
    if (err) {
      console.log("Error");
      console.log(err);
    } else {
      console.log("Success");
    }
  });
});

module.exports = router;