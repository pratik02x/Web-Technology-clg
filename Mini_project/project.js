let gameseq=[];
let userseq=[];

let btn=["red","yellow","green","purple"];

let isStarted=false;

let level=0;
let h2=document.querySelector("h2");
let highScoree=0;


//step 1: start the game using press the any key on the document
document.addEventListener("keypress",function(){
    if(isStarted == false){
        console.log("game started");
        isStarted=true;
        levelup();
    }
})

//step 2: level up and flash

function flash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
     userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

     
    let randIdx=Math.floor(Math.random()*4);
    let randColuor=btn[randIdx];
   
    let randBtn=document.querySelector(`.${randColuor}`)
    gameseq.push(randColuor);
    console.log(gameseq);
    flash(randBtn);
    

}

function checkAns(idx){
    

    if(userseq[idx] === gameseq[idx]){
       if(userseq.length === gameseq.length){
        setTimeout(levelup,1000);
         
       }
    }
    else{
        let hs=highScore(level);
        h2.innerHTML=`Wrong ! Your Score is : <b>${level}</b> <br> Press any key to start <br> high score : ${hs}`;
         document.querySelector("body").classList.add("error");
        setTimeout(()=>{
            document.querySelector("body").classList.remove("error");
        },250);
        
        reset();
    }
}
function press(){
      
      let btn=this;
      let userColour=this.getAttribute("id");
      userseq.push(userColour);
      console.log(userseq)
      userflash(btn)
      checkAns(userseq.length-1);
}

let Allbtns=document.querySelectorAll(".btn");
for(btns of Allbtns){
    btns.addEventListener("click",press);
}

function reset(){
    isStarted=false;
    gameseq=[];
    userseq=[];
    level=0;
}

function highScore(level){
    highScoree= Math.max(level,highScoree);
    return highScoree;
}