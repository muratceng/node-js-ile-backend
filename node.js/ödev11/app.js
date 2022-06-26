const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const methodOverride = require("method-override");
const PostController = require('./controllers/PostController');
const PageController = require('./controllers/PageController');



//midlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method', 
{
  methods:['POST', 'GET']
}));

// template engines
app.set("view engine", "ejs"); 

//routes
app.get("/", PostController.getAllPosts);
app.get('/posts/:id',PostController.getPostById);
app.post("/posts", PostController.createPost);
app.put('/posts/:id', PostController.updatePost);
app.delete('/posts/:id', PostController.deletePost);

app.get("/about", PageController.getAboutPage);
app.get("/add", PageController.getAddPage);
app.get("/update/:id", PageController.getUpdatePage);



const port = 3000;

app.listen(port, ()=>{
  console.log(`server listening at port ${port}`);
});
