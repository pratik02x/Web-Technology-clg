const express=require("express");
const app=express();
const path=require("path")
const uuid=require("uuid");
const methodOverride=require("method-override")

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
app.set(express.static(path.join(__dirname,"public")))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
var id=0;
const posts=[
    {id:id++,username:"pratik",content:"i like to do coding"},
    {id:id++,username:"siddhi",content:"i like to eating"},
    {id:id++,username:"savita",content:"i like test bloods"}
]

app.get("/posts",(req,res)=>{
    res.render("post.ejs",{posts});
})

app.get("/newPost",(req,res)=>{
    res.render("newPost");
})
//add new post
app.post("/addnewpost",(req,res)=>{
    let{username,content}=req.body;
    
    posts.push({id:id++,username:username,content:content});
    res.redirect("/posts");
})

//show details

app.get("/:id/details",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=> p.id == id);
    res.render("details.ejs",{post});
})

//edit view
app.get("/:id/edit",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=> p.id == id);
    res.render("editView.ejs",{post});
})

//edit
app.patch("/edit/:id",(req,res)=>{
    let newcontent=req.body.content;
    
    let{id}=req.params;

    let post=posts.find((p)=> p.id == id)

    post.content=newcontent;
    res.redirect("/posts")

})
app.listen("4000",()=>{
    console.log("server started on http://localhost:4000");
})