const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())

app.get("/joke",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"java book",
            content:"this is java book"
        },
        {
            id:2,
            title:"javascript book",
            content:"this is javascript book"
        },
        {
            id:3,
            title:"python book",
            content:"this is python book"
        },
        {
            id:4,
            title:"php book",
            content:"this is php book"
        },
        {
            id:5,
            title:"dotnet book",
            content:"this is dotnet book"
        },
        
    ]
    res.send(jokes)
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`app is listening at port ${PORT}`)
})