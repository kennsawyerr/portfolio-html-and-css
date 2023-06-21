// first create media queries
//
//i dont understand how to solve this problem oo. 
/*     I NEED TO HIDE THIS BUTTON WHEN ITS ON LARGE SCREENS OR ONLY SHOW IT ON LARGE SCREENS

once ul is on small screens its display:block

nav buttons in small screen
how to control flex wrap
how to move my navbar to b responsive esp RHS
my project img is not filling screen size






*/
const navBtn = document.getElementById("nav-btn")
const navList =document.querySelector(".nav-list")

navBtn.addEventListener("click", function (){
    navList.classList.toggle("active");
})

document.querySelector('header').style.height = document.querySelector('.navbar').getBoundingClientRect().height + 'px';