//html can craete form but ant thing js make smart
//form validation:checking user i/p before sending data to server eg-email @
 
//Dom manipulation
//changing html using JS eg show error msg,disply success ,create i/p fields


document.getElementById("form").addEventListener("submit",function validate(event){
          event.preventDefault();
          
    let name=document.querySelector("#name");
    let email=document.querySelector("#email");
    let password=document.querySelector("#pass");

    let emailerror=document.getElementById("emailerror");
    let passerror=document.getElementById("passerror");
    let nerror=document.querySelector("#nameerror");

    emailerror.innerHTML="";
    nerror.innerHTML="";
    passerror.innerHTML="";

    let isValid=true;


    if(name.value === ""){
        
        nerror.innerHTML="name is required";
       
        nerror.classList.add("red");
        isValid=false;
        return;
        
    }

   if(email.value===""){
          emailerror.innerHTML="mail is required";
       
        emailerror.classList.add("red");
        isValid=false;
        return;
    }
    if(password.value==="" ){
          passerror.innerHTML="pass is required";
       
        passerror.classList.add("red");
        isValid=false;
        
    }
    if(password.value.length<6){
        passerror.innerHTML="password lenght should be greter than 6"
        passerror.classList.add("red");
        isValid=false;
    }

    if(isValid){
        alert("Submitted successfully");
    }

})
    


