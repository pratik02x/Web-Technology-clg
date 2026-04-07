// console.log("Start");

// setTimeout(()=>{
//     console.log("Inside timeout");
// },3000);

// console.log("end");

//Promises: A promises is an object that reprsents future result of an asynchrnous operation
//has 3 state :pending resolve and reject

let myPromise=new Promise((res,rej)=>{ //res :success //rej : error 
     let success=true;

     if(success){
        res("Sucess");
     }
     else{
        rej("Error");
     }
});

myPromise.then((data)=>{ //return when success
    console.log(data);
})
.catch((error)=>{ //for errors
    console.log(error);
})




