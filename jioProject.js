
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 0;


slides[0].style.display = "block";
dots[0].classList.add("active");
slides[1].style.display = "none";
slides[2].style.display = "none";


function currentSlide(n) {
    
        if(n==1){
            slides[0].style.display = "block";
            dots[0].classList.add("active");
            slides[1].style.display = "none";
            dots[1].classList.remove("active");
            slides[2].style.display = "none";
            dots[2].classList.remove("active");
            slideIndex = 0;
        }
        else if(n==2){
            slides[0].style.display = "none";
            dots[0].classList.remove("active");
            slides[1].style.display = "block";
            dots[1].classList.add("active");
            slides[2].style.display = "none";
            dots[2].classList.remove("active");
            slideIndex = 1;
        }
        else if(n==3){
            slides[0].style.display = "none";
            dots[0].classList.remove("active");
            slides[1].style.display = "none";
            dots[1].classList.remove("active");
            slides[2].style.display = "block";
            dots[2].classList.add("active");
            slideIndex = 2;
        }
    
}

function showSlides(){
    if (slideIndex == 0){
        slides[0].style.display = "none";
        dots[0].classList.remove("active");
        slides[1].style.display = "block";
        dots[1].classList.add("active");
        slides[2].style.display = "none";
        dots[2].classList.remove("active");
        slideIndex = 1;
    }
    else if(slideIndex == 1){
        slides[0].style.display = "none";
        dots[0].classList.remove("active");
        slides[1].style.display = "none";
        dots[1].classList.remove("active");
        slides[2].style.display = "block";
        dots[2].classList.add("active");
        slideIndex = 2;
    }
    else if(slideIndex == 2){
        slides[0].style.display = "block";
        dots[0].classList.add("active");
        slides[1].style.display = "none";
        dots[1].classList.remove("active");
        slides[2].style.display = "none";
        dots[2].classList.remove("active");
        slideIndex = 0;
    }

}

setInterval(showSlides,4000);


// navigation bar hide

var lastScrollPos = window.pageYOffset;
var navbar = document.getElementById('navigationBar');


window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if (lastScrollPos > currentScrollPos){
        navbar.style.top = '0';
    }
    else {
        navbar.style.top = '-8.1em';
    }

    lastScrollPos = currentScrollPos;

}