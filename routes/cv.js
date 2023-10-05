const express=require('express');
const router=express.Router();
const cvControllers=require('../controllers/cv');
router.post('/add',cvControllers.add);
router.get('/',cvControllers.find);
router.put('/update/:id',cvControllers.update);
router.delete('/remove/:id',cvControllers.remove);
module.exports=router;