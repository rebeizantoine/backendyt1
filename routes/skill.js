const express=require('express');
const router=express.Router();
const skillsControllers=require('../controllers/skills');
router.get('/',skillsControllers.show);
router.post('/add',skillsControllers.add);
router.put('/update/:id',skillsControllers.update);
router.delete('/remove/:id',skillsControllers.remove);
module.exports=router;