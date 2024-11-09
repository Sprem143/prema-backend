const express= require('express')
const router=express.Router();
const {signup,getsupplierdetail}= require('../controllers/supplierController')

router.post('/signup',signup)
router.get('/getsupplierdetail',getsupplierdetail)

module.exports=router;