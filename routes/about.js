const express=require('express');
const router=express.Router();
const aboutControllers=require('../controllers/about');
const {authenticate}=require('../authenticate');
router.post('/add',authenticate,aboutControllers.add);
router.get('/',aboutControllers.find);
router.put('/update/:id',authenticate,aboutControllers.update);
router.delete('/remove/:id',authenticate,aboutControllers.remove);
module.exports=router;