const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");

app.use(express.static('public'));

app.set("view engine", "ejs"); 

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/add", function (req, res) {
  res.render("add_post");
});

const port = 3000;

app.listen(port, ()=>{
  console.log(`server listening at port ${port}`);
});
