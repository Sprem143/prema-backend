const express= require('express')
const router=express.Router();

const {savepost}= require('./controllers/postController')

router.get('/savepost',savepost)

module.exports=router;