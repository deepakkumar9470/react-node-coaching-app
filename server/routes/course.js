import express from "express";
const router = express.Router()

import CourseController from '../controllers/courseController.js'


import multer from "multer";

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, '/courseimage')
    },
    filename : (req,file,cb)=>{
         cb(null, file.originalname);
    }
});

const upload = multer({storage : storage})
// Course Creating Route
// @ /api/course/create

router.post('/create',upload.single('cimage'),CourseController.createCourse)


// Course Creating Route
// @ /api/course/getcourse
router.get('/getcourse',CourseController.getCourse)





// Course Creating Route
// @ /api/course/getcourse/:id
router.get('/:id',CourseController.getSingleCourse)




// Course Creating Route
// @ /api/course/delete/:id

router.delete('/delete/:id',CourseController.deleteCourse)


// Course Updating Route
// @ /api/course/edit/:id
router.put('/edit/:id',CourseController.updateCourse)





// router.post('/file/upload',upload.single('file') ,uploadPic)
// router.get('/file/:filename',getPics)




export default router