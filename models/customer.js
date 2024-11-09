const mongoose= require('mongoose')

const customerSchema =new mongoose.Schema({
name:String,
email:{type:String, unique:true},
mobile:{type:Number, unique:true},
imgurl:String,
address:String,
floor:Number
});

module.exports= mongoose.model('Customer',customerSchema);