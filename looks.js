const hamburger = document.querySelector(".hamburger-logo");
const navMenu = document.querySelector(".nav-menu");
const surveyBtn = document.querySelector(".button-survey");

hamburger.addEventListener("click", mobileMenu);
surveyBtn.addEventListener("click", goToSubmit);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function goToSurvey(){
    window.location.href="survey.html";
}