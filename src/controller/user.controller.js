const asynchandler = require("../utills/asyncHandler");

// const register=asynchandler((req,res)=>{
//    return res.status(200).json({message:"ok"})
// })
const register=(req,res)=>{
res.json("success")
}
module.exports=register