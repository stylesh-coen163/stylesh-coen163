const register = document.querySelector(".register-form");
const signin = document.querySelector(".login-form");
const message1 = document.querySelector(".msg-new-user");
const message2 = document.querySelector(".msg-sign-in");


message1.addEventListener("click", UserRegister);
message2.addEventListener("click", UserSignIn);


function UserRegister() {
    
    register.classList.toggle("active");
    signin.classList.toggle("active");
    
}

function UserSignIn() {
    register.classList.toggle("active");
    signin.classList.toggle("active");
}




