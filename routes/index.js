const express=require('express');
const { home } = require('../controllers/home_controller');
const router =express.Router();

router.use('/users',require('./users'))
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));
router.get('/',home);
router.use('/likes',require('./likes'));
router.use('/friends',require('./friends'));
router.get('/worldchat',(req,res)=>{
    res.render('_chat_box',{
        title:'World chat'
    });
})

module.exports=router;