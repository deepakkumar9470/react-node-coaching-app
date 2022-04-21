import mongoose from 'mongoose'


const CourseSchema = new mongoose.Schema({

    name: {type: String, required: true, trim: true},

    price: {type: Number, required: true},
    c_image: {type: String, required: true},

    strength: {type: Number, required: true},

    timings:{type: Number},

    language:{type: String,required: true, trim:  true},
    
    test_series:{type: String, required : true,trim: true},

}, {timestamps: true})



const CourseModel = mongoose.model('course', CourseSchema)

export default CourseModel