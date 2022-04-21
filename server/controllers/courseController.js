
import CourseModel from '../model/Courses.js'

class CourseController {

    static createCourse = async (req,res) =>{
         
           try {
            const courses = new CourseModel(req.body)
            //    const courses = new CourseModel({
            //     name: req.body.name,
            //     price : req.body.price,
            //     c_image: req.file.c_image,
            //     strength : req.body.strength,
            //     timings : req.body.timings,
            //     language : req.body.language,
            //     test_series : req.body.test_series
            //    })
               
               const coursesave = await courses.save()
               res.status(201).send({"status" : "success", "message": "Course added successfully.", "course" : coursesave})

           } catch (error) {
               console.log(error)
           }

    }

    static getCourse = async (req,res) =>{         
        try {
           
            const courses = await CourseModel.find({}).sort({_id:  -1})
            
            res.status(200).send({"status" : "success", "message": "Course Fetced successfully.", "allcourses" : courses})

        } catch (error) {
            console.log(error)
        }

   }

   static getSingleCourse = async (req,res) =>{         
    try {
       
        const courses = await CourseModel.findById(req.params.id)
        
        res.status(200).send({"status" : "success", "message": "Course Fetced successfully.", "allcourses" : courses})

    } catch (error) {
        console.log(error)
    }

}

   static deleteCourse = async (req,res) =>{  
           
    
    try {
       
        const courses = await CourseModel.findByIdAndDelete(req.params.id)

        courses.delete()
        
        res.status(400).send({"status" : "success", "message": "Course Deleted successfully."})

    } catch (error) {
        console.log(error)
    }

   }


   static updateCourse = async (req,res) =>{  
    
    try {
       
          const editcourse =  await CoachingModel.findByIdAndUpdate(req.params.id, req.body, {new: true})

       
        
          res.status(200).send({"status" : "success", "message": "Course Updated successfully.","updatecouser": editcourse})

    } catch (error) {
        console.log(error)
    }

   }

   
}

export default CourseController