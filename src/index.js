 const express=require("express")
const connectDB = require("./db")
const dotenv=require("dotenv")
dotenv.config()
 const app=express()
 connectDB().then(()=>{
    app.on("err",(err)=>{
        console.error(err)
        throw err
    })
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening at port ${process.env.PORT}`)
     })
 })
.catch((err)=>{
    console.error(err)
})




// const dotenv=require("dotenv");
// dotenv.config();
// const express=require("express");
// const app=express();
// (async()=>{
// try {
//   const connectInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//   console.log("connection successfully done ")
//   console.log(connectInstance);
  
//     app.on("error",(err)=>{
//         console.log("err:",err)
//         throw err
//     })
//     app.listen(process.env.PORT||3000,()=>{
//         console.log(`app is listening at ${process.env.PORT}`)
//     })
// } catch (error) {
//     console.error(`error:${error}`)
//     throw error
// }
// })()














 