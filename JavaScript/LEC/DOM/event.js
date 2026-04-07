

let images=document.querySelectorAll("li");

for(let i=0;i<images.length;i++){
        images[i].addEventListener("click",removeImg);
}
let btn=document.querySelector("button");

function removeImg(event){
    let li=event.target; //event target : gives the exact elemnt that is triggered
    li.remove();
    console.log(li);
    console.log(new Date())//Time : refers to the actual date and time when an event happens.
    console.log(event.timeStamp) //event timestamp : event.timeStamp tells you when the event was created (in milliseconds).
    console.log(event.currentTarget);  //event.currentTarget : it tells on which eventListner is added
    console.log(event.clientX,event.clientY) //clientX,clientY :gives the mouse position relative the browser Window
    console.log(event.screenX,event.screenY)
}

//Activity
//Jquery:jQuery is a JavaScript library that makes DOM manipulation and event handling easier.

// $("button").click(()=>{
//     alert("clicked");
// })

btn.addEventListener("click",(event)=>{
    //alt key :it returns true if alt key is pressed during event
    console.log("clicked")
     if(event.altKey){
        alert("alt key pressed");
     }
     
     //ctrl key : it returns true if ctrl key is pressed during the event
     if(event.ctrlKey){
        alert("ctrl key pressed")
     }
})



//event.srcElement is an old property works like an target.

// let images=document.getElementById("images");
// let li=document.getElementById("Nature");
// //Event bubbling

// images.addEventListener("click",(event)=>{
   
//     console.log("inside ul");
// })
// //
// li.addEventListener("click",(event)=>{
//     let a=li.parentElement;
//     console.log(a)

    

    
       

//     console.log("inside nature");
// })

