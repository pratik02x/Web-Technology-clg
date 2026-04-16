const express=require("express");
const app=express();


const users=[
    {id:1,name:"pratik",age:20,marks:90},
    {id:2,name:"satyajeet",age:20,marks:100},
    {id:3,name:"Aditya",age:20,marks:100}
];

app.get("/users",(req,res)=>{
    res.json(users);
})

app.get("/user/:id",(req,res)=>{
    let userId=req.params;
    console.log(req.params)

    users.find((u)=>{
        if(u.id == userId.id){
            res.json(u)
        }
        
    })
    res.send("user not found");
})

app.listen("4000",()=>{
    console.log("server started on port 4000");
})