const mongoose=require("mongoose")
const mongooseAgregratePaginate=require("mongoose-aggregate-paginate-v2")
const videoSchema=new mongoose.Schema(
    {
    videoFile:{type:String,required:true}//cloudinary url
    ,
    thumbNail:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number},
    views:{type:Number,default:0},
    isPublished:{type:Boolean,default:false},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
    },{timestamps:true}
)
videoSchema.plugin(mongooseAgregratePaginate)
module.exports=mongoose.model("video",videoSchema)