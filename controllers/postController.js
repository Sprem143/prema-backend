
exports.savepost=async(req,res)=>{
    try{
          console.log("Api called")
    }catch(err){
        res.status(500).send('Internal Server error');
        console.log(err);
    }
}