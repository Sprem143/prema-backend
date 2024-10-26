const Post= require('../models/post');

exports.savepost=async(req,res)=>{
    try{
         const {name,post}=req.body;
         const newPost= new Post({name:name, post:post});
         let savedPost= await newPost.save();
          res.status(200).send("Post Added Successfully")
    }catch(err){
        res.status(500).send('Internal Server error');
        console.log(err);
    }
}

exports.fetchpost=async(req,res)=>{
    try{
      let data= await Post.find();
      res.status(200).send(data);
    }catch(err){
        console.log(err)
    }
}