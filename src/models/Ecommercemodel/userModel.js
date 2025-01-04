const mongoose=require("mongoose")
mongoose.connect("mongodb:127.0.0.1:27017/userData")
const userSchema=new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
        }
    }
)
module.exports=mongoose.model("user",userSchema)