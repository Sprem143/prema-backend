const mongoose= require('mongoose')

const postSchema=new mongoose.Schema({
name:String,
post:String
});

module.exports= mongoose.model('Post', postSchema)