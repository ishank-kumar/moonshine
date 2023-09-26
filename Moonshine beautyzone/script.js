const hamburgMenu = document.querySelector(".hamburg")
const navMenu = document.querySelector(".nav-ul")

hamburgMenu.addEventListener("click",function(){
    hamburgMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

const navLinks = document.querySelectorAll(".nav-links")
navLinks.forEach( function(link) {
    link.addEventListener("click",function(){
        hamburgMenu.classList.remove("active")
        navMenu.classList.remove("active")
    })
})