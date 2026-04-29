const express=require("express");
const path = require("path");
const app=express();


app.set("view","ejs");
app.set(path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));



const dogs=[];









app.listen("3000",()=>{
    console.log("server started on port http://localhost:3000");
})