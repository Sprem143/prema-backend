const Admin = require('../models/admin')
const jwt = require('jsonwebtoken');
const secret = 'mysecret';

exports.verifyToken = async (req, res) => {
    try {
        console.log("verifytoken called")
      res.json({ auth: true })
    } catch (err) {
      res.json({ message: 'Error while authenticating' })
    }
  }
  

exports.adminsignup = async (req, res) => {
    try {
        const { adminName, email, mobile, password } = req.body;
        const admin = new Admin({ adminName: adminName, email: email, mobile: mobile, password: password });
        await admin.save();
        res.status(200).json({ msg: "Admin sign up successfully" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error while signing up" })
    }
}


// -------admin login-------
exports.adminlogin = async (req, res) => {
    const {email, password } = req.body;
    try {
      const user = await Admin.findOne({email});
      if (!user) {
        return res.status(400).json({message:'User not found'});
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({message:'Invalid credentials'});
      }
      const token = jwt.sign({ id: user._id,email: user.email}, secret, {
        expiresIn: '1h',
      });
      res.json({login:true, token:token});
    } catch (err) {
      res.status(500).send(err);
    }
  };

  exports.getadmindetail= async(req,res)=>{
    try{
      let admin= await Admin.find();
      res.status(200).send(admin[0]);
    }catch(err){
      console.log(err);
      res.status(500).json({msg:err})
    }
  }