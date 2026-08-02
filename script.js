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