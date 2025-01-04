const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    productName:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,default:0},
    offerPrice:{type:Number,default:0},
    stock:{type:Number,default:0},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"category"},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})
module.exports=mongoose.model("product",productSchema)