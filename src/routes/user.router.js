const express=require("express")
const register = require("../controller/user.controller")
const userRouter=express.Router()
userRouter.get("/register",register)
module.exports=userRouter