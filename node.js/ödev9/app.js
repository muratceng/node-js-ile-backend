const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:String,
    detail:String,
    dateCreated:{
        type:Date,
        default:Date.now,
    }
})

//connect db
mongoose.connect("mongodb+srv://admin:admin123@cluster0.k4izb.mongodb.net/?retryWrites=true&w=majority");
const post = mongoose.model('post',postSchema);

//midlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// template engines
app.set("view engine", "ejs"); 

app.get("/",async function (req, res) {
  const posts = await post.find({});
  res.render("index",
  {
    posts
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/add", function (req, res) {
  res.render("add_post");
});

app.post("/posts",async function(req,res){
  await post.create(req.body);
  res.redirect('/');
})

const port = 3000;

app.listen(port, ()=>{
  console.log(`server listening at port ${port}`);
});
