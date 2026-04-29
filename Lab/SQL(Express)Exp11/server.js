const express=require("express");
const app=express();

const mysql=require("mysql2");
app.use(express.json());

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root1234",
    database:"Wt_db"
});

app.post("/addStudents",(req,res)=>{
    let {name,age,course}=req.body;
    console.log(req.body);
    let sql="INSERT INTO students VALUES(?,?,?)";

    db.query(sql,[name,age,course],(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            // res.send("Success")
            console.log(res);
        }
    })
    
})

app.get("/allStudents",(req,res)=>{
    let sql="select * from students";

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.patch("/update",(req,res)=>{
        let{name,originalName}=req.body;
        let sql="Update students SET name=? WHERE name= ?";

        db.query(sql,[name,originalName],(error,result)=>{
            if(error){
                console.log(err);
            }
            else{
                console.log(result);
            }
        })
})



app.listen("4000",()=>{
    console.log("server statred on port 4000");
});


//rebrush sql