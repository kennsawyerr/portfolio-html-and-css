let slideIndex = 0;
SlideShow()


const navBtn = document.getElementById("nav-btn")
const navList =document.querySelector(".nav-list")

navBtn.addEventListener("click", function(){
    navList.classList.toggle("active");
    animateBtn();
    
})

document.querySelector('header').style.height = document.querySelector('.navbar').getBoundingClientRect().height + 'px';





  /*    portfolio section 5
    portfolio toolbox 6
    port images interval 7
    port project page 8
    remove projects btn 9
    sneskers dropdown cart

  */

    function SlideShow(){
      let i;
      let slides =document.getElementsByClassName("Slides");
      for (let i= 0; i< slides.length; i++){

          slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
     slides[slideIndex-1].style.display = "block";
    setTimeout(SlideShow, 5000); // Change image in seconds
    }

  function animateBtn(){
    document.getElementsByClassName("bar").classList.toggle("change")
  }