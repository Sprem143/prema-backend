const express= require('express')
const router=express.Router();
const authToken= require('../middleware/authenticate')

const {adminsignup, adminlogin, verifyToken,getadmindetail}= require('../controllers/adminController');

router.post('/signup', adminsignup)
router.post('/login', adminlogin)
router.post('/authenticate', verifyToken);
router.get('/getadmindetail',getadmindetail)

module.exports=router;