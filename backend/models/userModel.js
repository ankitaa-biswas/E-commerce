import mongoose from "mongoose";



const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true}, // if using same email id we cant sign up more than once
    password:{type:String,required:true},
    cartData:{type: Object,default:{}},


},{minimize:false})



const userModel=mongoose.models.user || mongoose.model('user',userSchema);


export default userModel

