const admin=require("../controllers/admin");
const express=require('express');
const router=express.Router();
router.post('/add',admin.add);
router.post('/',admin.login);
module.exports=router;
