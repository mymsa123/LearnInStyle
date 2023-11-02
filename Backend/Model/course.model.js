const mongoose=require('mongoose')
const courseSchema=mongoose.Schema({
    title:String,
    description:String,
    ratings:Number,
    no_of_students:Number,
    created_by:String,
    language:String,
    price:Number,
    category:String,
    topic:String,
    about:Array,
    image:Array,
    username:String,
    userID:String
})
const courseModel=mongoose.model('educourse',courseSchema)
module.exports={
    courseModel
}