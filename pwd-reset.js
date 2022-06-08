const pwdreset_form1 = document.querySelector(".pw-reset-form1");
const pwdreset_form2 = document.querySelector(".pw-reset-form2");
const pwdreset_msg = document.querySelector(".pw-reset-msg");
const button_form1 = document.querySelector(".pw-reset .button1");
const button_form2 = document.querySelector(".pw-reset .button2");

button_form1.addEventListener("click", PwReset);
button_form2.addEventListener("click", PwdResetMsg);

function PwReset(){
    const pwdreset_form1 = document.querySelector(".pw-reset-form1");
    const pwdreset_msg = document.querySelector(".pw-reset-msg");
    console.log(pwdreset_form1.style.display);
    
    pwdreset_form1.style.display = "none";
    pwdreset_msg.style.display = "block";
        
  
};

function PwdResetMsg(){
    console.log(pwdreset_msg.style.display);
    if(pwdreset_msg.style.display === "block"){
        pwdreset_msg.style.display = "none";
        pwdreset_form2.style.display = "block";
    }else{
        //pwdreset_msg.style.display = "block"; 
    }
};



