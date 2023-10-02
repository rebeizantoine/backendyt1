const express=require('express');
const router=express.Router();
const aboutControllers=require('../controllers/about');
router.post('/add',aboutControllers.add);
router.get('/',aboutControllers.find);
router.put('/update/:id',aboutControllers.update);
router.delete('/remove/:id',aboutControllers.remove);
module.exports=router;