
import CoachingModel from '../model/Coaching.js'


class CoachingController {

    static createCoaching = async (req,res) =>{
         
           try {
              
            //    const coaching = new CoachingModel({
            //     name :  req.body.name,
            //     address : req.body.address,
            //     phone : req.body.phone,
            //     coachinginfo : req.body.coachinginfo,
            //     photo : req.file.photo,
            //     teacherdetails: req.body.teacherdetails
            //    })
            const coaching = new CoachingModel(req.body)
               const coachinsave = await coaching.save()
               res.status(201).send({"status" : "success", "message": "Coaching added successfully.", "course" : coachinsave})

           } catch (error) {
               console.log(error)
           }

    }

    static getCoaching = async (req,res) =>{         
        try {
           
            const coaching = await CoachingModel.find({}).sort({_id:  -1})
            
            res.status(200).send({"status" : "success", "message": "Coaching Fetced successfully.", data: coaching})

        } catch (error) {
            console.log(error)
        }

   }

   static deleteCoaching = async (req,res) =>{  
           
    
    try {
       
        const coaching = await CoachingModel.findByIdAndDelete(req.params.id)

        coaching.delete()
        
        res.status(400).send({"status" : "success", "message": "Coaching Deleted successfully."})

    } catch (error) {
        console.log(error)
    }

   }


   static updateCoaching = async (req,res) =>{  
    
    try {
       
          const editcoaching =  await CoachingModel.findByIdAndUpdate(req.params.id, req.body, {new: true})

          res.status(200).send({"status" : "success", "message": "Coaching Updated successfully.","updatecoaching": editcoaching})

    } catch (error) {
        console.log(error)
    }

   }

   
}

export default CoachingController