let dogbtn=document.querySelector("#getdog");
let seedogbtn=document.getElementById("seedog");
let alldogs=document.getElementById("alldogs");
 let Dogs=[];
 let cats=[];
 let jokes=[];
dogbtn.addEventListener("click",getDogImg);
 


let backbtn=document.createElement("button");
 let body=document.querySelector(".container");
seedogbtn.addEventListener("click",seedogs);


backbtn.addEventListener("click",()=>{
    body.classList.remove("blankpage");
    document.getElementById("alldogs").innerHTML = "";
})

function seedogs() {
   
    
    backbtn.innerText="Back"
    body.classList.add("blankpage")
    let container = document.getElementById("alldogs");
     
     console.log(container);

    if (Dogs.length === 0) {
        container.innerText = "No images yet! Click Get Image first.";
        container.appendChild(backbtn);

        return;
    }

    for (let img of Dogs) {
        let image = document.createElement("img");
        image.src = img;
        image.style.width = "200px";
        image.style.margin = "10px";

        container.appendChild(image);
    }
    container.appendChild(backbtn);
}

async function getDogImg() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    let result = await res.json();

    let image = document.getElementById("dogimg");
    image.src = result.message;

    Dogs.push(result.message);

     
}

//Cat image section

let getcat=document.querySelector("#getcat");

getcat.addEventListener("click",getcatimg);

async function getcatimg(){
    let res= await fetch("https://api.thecatapi.com/v1/images/search");
    let img=await res.json();
    let imgurl=img[0].url;
    cats.push(imgurl);
    let catimg=document.querySelector("#catimg");
    catimg.src=imgurl;
   
}
let seecat=document.querySelector("#seecat");
seecat.addEventListener("click",seecats);

function seecats() {
   
    
    backbtn.innerText="Back"
    body.classList.add("blankpage")
    let container = document.getElementById("alldogs");
    

    if (cats.length === 0) {
        container.innerText = "No images yet! Click Get Image first.";
        container.appendChild(backbtn);

        return;
    }

    for (let img of cats) {
        let image = document.createElement("img");
        image.src = img;
        image.style.width = "200px";
        image.style.margin = "10px";

        container.appendChild(image);
    }
    container.appendChild(backbtn);
}

//jokes

let getjokebtn=document.querySelector("#getjoke");
getjokebtn.addEventListener("click",getjoke);

async function getjoke(){
    let res=await fetch("https://official-joke-api.appspot.com/random_joke");
    let result=await res.json();
    let joke=document.getElementById("joke");
    jokes.push(result.setup);
    console.log(result.setup)
    joke.innerText=result.setup;
}

let seejoke=document.getElementById("seejoke");
seejoke.addEventListener("click",seejokes);

function seejokes(){
    backbtn.innerText="Back"
    body.classList.add("blankpage")
    let container=document.getElementById("alldogs");
    let li=document.createElement("li");

    
     if (jokes.length === 0) {
        container.innerText = "No jokes yet! Click Get joke first.";
        container.appendChild(backbtn);

        return;
    }

    for(let joke of jokes){
            let ul=document.createElement("ul");
            ul.innerText=joke;
            li.appendChild(ul);
    }
    container.appendChild(li);
    container.appendChild(backbtn);
}

