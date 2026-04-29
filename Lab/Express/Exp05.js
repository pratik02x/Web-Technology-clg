const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    let date=new Date();
    res.json({"message":"Hello","Date":date});
})



app.listen("4000",()=>{
    console.log("server runnig on port http://localhost:4000");
})