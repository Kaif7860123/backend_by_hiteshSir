const mongoose=require("mongoose")
const DB_NAME = require("../constant")
const dotenv=require("dotenv")
dotenv.config()
const connectDB=async()=>{
    try {
   const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
   console.log(`connection successfull`);
   
        
    } catch (error) {
        console.error("connection error:-",error);
        
    }
}
module.exports=connectDB