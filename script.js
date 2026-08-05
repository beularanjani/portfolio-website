const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {
    alert("👋 Welcome to Beula David's Portfolio!");
});
const role = document.getElementById("role");

role.innerHTML = "AI Enthusiast | Frontend Developer";
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.documentElement.scrollTop > 200){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill in all the fields.");

        return;

    }

    alert("Thank you! Your message has been submitted.");

    form.reset();

});