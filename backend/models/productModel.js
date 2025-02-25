import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
   description:{type:String,required:true},
   price:{type:Number,required:true},
   image:{type:Array,required:true},
   category:{type:Number,required:true},
   subCategory:{type:Number,required:true},
   sizes:{type:Array,required:true},
   bestseller:{type:boolean},
   date:{type:Number,required:true}

})


const productModel= mongoose.models.product ||  mongoose.model("product",productSchema)
export default productModel