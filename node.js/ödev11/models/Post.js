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
mongoose.connect(process.env.MONGO_URL);
const Post = mongoose.model('post',postSchema);

module.exports = Post;
