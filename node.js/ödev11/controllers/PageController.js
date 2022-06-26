const Post = require('../models/Post');

exports.getAboutPage = function (req, res) {
    res.render("about");
  }

exports.getAddPage =function (req, res) {
    res.render("add_post");
  }

exports.getUpdatePage = async function(req,res){
    const id = req.params.id;
    const singlePost = await Post.find({_id:id});
    res.render("update",{
      singlePost
    });
  }