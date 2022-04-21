import mongoose from 'mongoose'


const CoachingSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},

    address: {type: String, required: true, trim: true},

    phone: {type: Number, required: true},

    coachinginfo:{type: String, required: true, trim: true},

    photo:{type: String,required: true},
    
    teacherdetails:{type: String, required : true,trim: true},

}, {timestamps: true})



const CoachingModel = mongoose.model('coaching', CoachingSchema)

export default CoachingModel