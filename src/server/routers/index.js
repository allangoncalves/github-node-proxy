var express = require("express");
var router = express.Router();
var user = require("../routers/user");

router.use((req, res, next) => {
  console.log("Called: ", req.path);
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

router.use(user);

module.exports = router;
