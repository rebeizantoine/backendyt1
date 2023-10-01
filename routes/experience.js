const express=require('express');
const router=express.Router();
const experienceControllers=require('../controllers/experience');
router.post('/',experienceControllers.show);
router.post('/add',experienceControllers.add);
router.post('/update/:id',experienceControllers.update);
router.post('/remove/:id',experienceControllers.remove);
module.exports=router;