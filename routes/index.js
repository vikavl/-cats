var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.sendFile("../public/lab2-master/1.html");
});
router.get("/", function(req, res, next) {
  res.sendFile("../public/lab2-master/2.html");
});
router.get("/", function(req, res, next) {
  res.sendFile("../public/lab2-master/3.html");
});
router.get("/", function(req, res, next) {
  res.sendFile("../public/lab2-master/4.html");
});
router.get("/", function(req, res, next) {
  res.sendFile("../public/lab2-master/index.html");
});
module.exports = router;
