import express from "express";

const router = express.Router()

import CoachingController from '../controllers/coachingController.js'
import multer from "multer";

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, '/uploadimage')
    },
    filename : (req,file,cb)=>{
         cb(null, file.originalname);
    }
});

const upload = multer({storage : storage})




// Course Creating Route
// @ /api/coaching/create

router.post('/create',upload.single('myimage'),CoachingController.createCoaching)


// Course Creating Route
// @ /api/coaching/getcoaching
router.get('/getcoaching',CoachingController.getCoaching)


// Course Creating Route
// @ /api/coaching/delete/:id

router.delete('/delete/:id',CoachingController.deleteCoaching)


// Course Updating Route
// @ /api/coaching/edit/:id
router.put('/edit/:id',upload.single('myimage'),CoachingController.updateCoaching)





// router.post('/file/upload',upload.single('file') ,uploadPic)
// router.get('/file/:filename',getPics)




export default router