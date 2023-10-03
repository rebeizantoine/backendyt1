const express=require('express');
const router=express.Router();
/*const multer=require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../Frontend-Maya-portfolio/maya-portfolio-frontend/src/images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() ;
      cb(null,uniqueSuffix+file.originalname)
    }
  })
  const upload = multer({ storage: storage })*/
const skillsControllers=require('../controllers/skills');
router.get('/',skillsControllers.show);
router.post('/add'/*,upload.single('image')*/,skillsControllers.add);
router.put('/update/:id',skillsControllers.update);
router.delete('/remove/:id',skillsControllers.remove);
module.exports=router;