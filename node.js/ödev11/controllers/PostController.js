const Post = require('../models/Post');

exports.getAllPosts = async function (req, res) {
    const posts = await Post.find({});
    res.render("index",
    {
      posts
    });
  }

exports.getPostById =  async function (req,res){
    const id = req.params.id;
    const singlePost = await Post.find({_id:id});
    res.render("post",{
      singlePost
    });
  }

exports.createPost = async function(req,res){
    await Post.create(req.body);
    res.redirect('/');
  }

exports.updatePost = async function(req,res){
    const singlePost= await Post.findOne({_id:req.params.id});
    singlePost.title = req.body.title;
    singlePost.detail = req.body.detail;
    await singlePost.save();
  
    res.redirect(`/posts/${singlePost.id}`);
  }

exports.deletePost =  async function (req,res){
    await Post.findByIdAndDelete({_id : req.params.id});
    res.redirect('/');
  }