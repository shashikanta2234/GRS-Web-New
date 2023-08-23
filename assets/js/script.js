
/* Nave menu */
const nav_class=document.querySelector(".nav");
const showNavbar= () =>{
    nav_class.classList.toggle('active');
}

const mobile_nav = document.querySelector(".nav-btn");
mobile_nav.addEventListener('click',()=>showNavbar());

const nav_content=document.querySelector('.nav-content');
nav_content.addEventListener('mouseout',()=>showNavbar());
