


const navBtn = document.getElementById("nav-btn")
const navList =document.querySelector(".nav-list")

navBtn.addEventListener("click", function (){
    navList.classList.toggle("active");
})

document.querySelector('header').style.height = document.querySelector('.navbar').getBoundingClientRect().height + 'px';


  /*    portfolio section 5
    portfolio toolbox 6
    port images interval 7
    port project page 8
    remove projects btn 9
    sneskers dropdown cart
  */