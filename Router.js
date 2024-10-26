const express= require('express')
const router=express.Router();

const {savepost, fetchpost}= require('./controllers/postController')

router.post('/savepost',savepost);
router.get('/fetchpost',fetchpost)

module.exports=router;