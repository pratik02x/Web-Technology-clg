const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log("req url",req.url);
    next();
})

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/about",(req,res)=>{
    res.send("About page");
})

app.get("/contact",(req,res)=>{
    res.send("Contact page");
})


app.listen("4000",()=>{
    console.log("server runnig on http://localhost:4000");
})
