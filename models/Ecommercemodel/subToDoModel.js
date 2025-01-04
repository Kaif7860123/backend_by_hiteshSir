const mongoose=require("mongoose")
const subToDoSchema=new mongoose.Schema({
content:{type:String,required:true},
complete:{type:Boolean,default:false},
createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})
module.exports=mongoose.model("subToDo",subToDoSchema)