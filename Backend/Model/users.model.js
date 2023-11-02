const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    city:String,
    age:Number,
    gender:String,
    cart:Array,
    wishlist:Array,
    active_orders:Array,
    past_orders:Array
})
const userModel=mongoose.model('eduuser',userSchema)
module.exports={
    userModel
}