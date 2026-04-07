let addBtn=document.getElementById("btn");
let input=document.querySelector("input")

let delBtn=document.querySelectorAll(".delBtn");
let ul=document.querySelector("ul");
addBtn.addEventListener("click",function(){

       if(input.value ===""){
        alert("please Fill The Task");
        return;
       }

      //append li into Ul
       let li=document.createElement("li");
      
       
       li.innerText=input.value;
       ul.appendChild(li);

       //append Btn to li
        let delbtn=document.createElement("button");
       delbtn.innerText="delete";
       delbtn.classList.add("delBtn");
       
       li.appendChild(delbtn);
        input.value="";
})


//event delegation problem :instaed of adding listner to all childs add to its parent and using event.taget make actions


       ul.addEventListener("click",function(event){
         if(event.target.nodeName == "BUTTON"){
            let par=event.target.parentElement;
            par.remove();
         }
       })
//    for (let i = 0; i < delBtn.length; i++) {
//     delBtn[i].addEventListener("click", function (e) {
//        let par=e.target.parentElement;
//        par.remove();
//        console.log(par)
//     });
// }

