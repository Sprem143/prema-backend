const mongoose= require('mongoose');

const db=async()=>{
  // await  mongoose.connect('mongodb+srv://Waterken:Waterken2024@waterken.qnwmi.mongodb.net/?retryWrites=true&w=majority&appName=Waterken')
  // .then(()=>{
  //   console.log("Mongodb Atlas Connected successfully")
  // }).catch((err)=>{
  //   if(err){console.log(err)}
  // })

//   ---mongodb compass connection--------
await  mongoose.connect('mongodb://localhost:27017/waterken')
.then(()=>{
  console.log("Mongodb compass Connected successfully")
}).catch((err)=>{
  if(err){console.log(err)}
})
}
module.exports= db;