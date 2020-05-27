require("dotenv").config();
const express = require("express");

const app = express();
var bodyParser = require("body-parser");
var router = require("./routers/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.use("/api", router);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
