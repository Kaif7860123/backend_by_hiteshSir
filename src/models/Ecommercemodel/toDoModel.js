const mongoose=require("mongoose")
const toDoSchema=new mongoose.Schema({
content:{type:String,required:true},
complete:{type:Boolean,default:false},
createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
subToDos:[
    {type:mongoose.Schema.Types.ObjectId,ref:"subToDo"}
]
},{timestamps:true})
module.exports=mongoose.model("toDo",toDoSchema)