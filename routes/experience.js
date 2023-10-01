const express=require('express');
const router=express.Router();
const experienceControllers=require('../controllers/experience');
router.get('/',experienceControllers.show);
router.post('/add',experienceControllers.add);
router.put('/update/:id',experienceControllers.update);
router.delete('/remove/:id',experienceControllers.remove);
module.exports=router;