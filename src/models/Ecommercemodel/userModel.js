const mongoose=require("mongoose")
// mongoose.connect("mongodb:127.0.0.1:27017/userData")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userSchema=new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        fullName:{type:String,required:true},
        avatar:{
            type:String,//cloudinary
            required:true
        },
        coverImage:{
            type:String,//cloudinary
            
        },
        watchHistory:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"video"
        }
         ,
        password:{
            type:String,
            required:[true,"password is required"],
        },
        refreshToken:{
            type:String,

        }
    },{timestamps:true}
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
this.password=await bcrypt.hash(this.password,10)
next()
})
userSchema.methods.isPasswordCorrect=async function(password){
return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
    jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName,
        fullName:this.fullName
    })
    process.env.ACCESS_TOKEN_SECRET,
    {
     expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
}
userSchema.methods.generateAccessToken=function(){
    jwt.sign({
        _id:this._id,
        
    })
    process.env.REFRESH_TOKEN_SECRET,
    {
     expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
}

module.exports=mongoose.model("user",userSchema)