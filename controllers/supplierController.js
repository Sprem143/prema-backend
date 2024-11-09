const jwt = require('jsonwebtoken');
const secret = 'mysecret';
const Supplier= require('../models/supplier')

exports.signup = async (req, res) => {
    try {
        const { name,mobile,address,password} = req.body;
        const newSupplier = new Supplier({name:name, mobile: mobile,address:address, password: password });
        await newSupplier.save();
        res.status(200).json({ msg: "Admin sign up successfully" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error while signing up" })
    }
}

exports.getsupplierdetail= async(req,res)=>{
    try{
      let admin= await Supplier.find();
      res.status(200).send(admin);
    }catch(err){
      console.log(err);
      res.status(500).json({msg:err})
    }
  }