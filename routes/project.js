const express=require('express');
const router=express.Router();
const projectControllers=require('../controllers/project');
router.post('/add',projectControllers.add);
router.get('/',projectControllers.find);
router.get('/findOne/:id',projectControllers.findOne);
router.put('/update/:id',projectControllers.update);
router.delete('/remove/:id',projectControllers.remove);
module.exports=router;