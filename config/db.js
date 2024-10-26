const mongoose= require('mongoose');

const db=async()=>{
  await  mongoose.connect('mongodb+srv://prema:Prema2024@prema.6svta.mongodb.net/?retryWrites=true&w=majority&appName=Prema')
  .then(()=>{
    console.log("Mongodb Atlas Connected successfully")
  }).catch((err)=>{
    if(err){console.log(err)}
  })

//   ---mongodb compass connection--------
// await  mongoose.connect('mongodb://localhost:27017/Prema')
// .then(()=>{
//   console.log("Mongodb compass Connected successfully")
// }).catch((err)=>{
//   if(err){console.log(err)}
// })
}
module.exports= db;