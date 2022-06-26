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
const Post = mongoose.model('post',postSchema);

module.exports = Post;