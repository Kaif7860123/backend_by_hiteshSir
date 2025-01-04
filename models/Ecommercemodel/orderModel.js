const mongoose=require("mongoose")
const orderItems=new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product"},
    quantity:{type:Number,default:0}
})
const orderSchema=new mongoose.Schema({
orderPrice:{type:Number,required:true},
customer:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
orderItem:{type:[orderItems]},
address:{type:String,required:true},
status:{type:String,enum:["PENDING","CANCELLED","DELIEVERED"]}
})
module.exports=mongoose.model("order",orderSchema)