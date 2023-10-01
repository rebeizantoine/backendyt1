const admin=require("../controllers/admin");
const express=require('express');
const router=express.Router();
router.post('/add',admin.add);
router.get('/',admin.login);
module.exports=router;
