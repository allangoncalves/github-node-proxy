const express = require("express");
const path = require("path");

const app = express();
var bodyParser = require("body-parser");
var router = require("./routers/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static("dist"));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile("dist/index.html", { root: "." });
  });
}


app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}!`);
});
