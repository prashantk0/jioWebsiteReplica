
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideIndex = 0;


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

setInterval(showSlides,5000);


// navigation bar hide

 lastScrollPos = window.pageYOffset;
let navbar = document.getElementById('navigationBar');


window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;
    if (lastScrollPos > currentScrollPos){
        navbar.style.top = '0';
    }
    else {
        navbar.style.top = '-8.1em';
    }

    lastScrollPos = currentScrollPos;

}


// hamburger icon

let hamElement = document.getElementById('hamburgerBtn');
let ham1Element = document.getElementById('ham1');
let ham2Element = document.getElementById('ham2');
let ham3Element = document.getElementById('ham3');
let menuBar = document.getElementById('menuBarId');
let offCanvas = document.getElementById('offCanvasSection');
let Body = document.getElementById('Body');
let slideShow = document.getElementById('slideShow');
let plusBtn1 = document.getElementById('plusBtn1');
let plusBtn2 = document.getElementById('plusBtn2');
let plusBtn3 = document.getElementById('plusBtn3');
let plusBtn4 = document.getElementById('plusBtn4');
let plusBtn5 = document.getElementById('plusBtn5');
let plusBtn6 = document.getElementById('plusBtn6');
let plusBtn7 = document.getElementById('plusBtn7');
let plusBtn8 = document.getElementById('plusBtn8');
let plusChildBtn1 = document.getElementById('plusChildBtn1');
let plusChildBtn2 = document.getElementById('plusChildBtn2');
let plusChildBtn3 = document.getElementById('plusChildBtn3');
let plusChildBtn4 = document.getElementById('plusChildBtn4');
let plusChildBtn5 = document.getElementById('plusChildBtn5');
let plusChildBtn6 = document.getElementById('plusChildBtn6');
let plusChildBtn7 = document.getElementById('plusChildBtn7');
let plusChildBtn8 = document.getElementById('plusChildBtn8');
let mobileContainer1 = document.getElementById('mobileCont1');
let mobileContainer2 = document.getElementById('mobileCont2');
let mobileContainer3 = document.getElementById('mobileCont3');
let mobileContainer4 = document.getElementById('mobileCont4');
let offerings = document.getElementById('offerings');
let support = document.getElementById('support');
let ourCompany = document.getElementById('ourCompany');
let usefulLinks = document.getElementById('usefulLinks');
let hamVar = 0;
let plusVar1 = 0;
let plusVar2 = 0;
let plusVar3 = 0;
let plusVar4 = 0;
let plusVar5 = 0;
let plusVar6 = 0;
let plusVar7 = 0;
let plusVar8 = 0;

hamElement.addEventListener("click", function(){
    if (hamVar == 0){
        openHam();
    }
    else if(hamVar == 1){
        closeHam();
    }
});

function openHam(){
    ham1Element.style.position = 'absolute';
    ham1Element.style.width = '20px';
    ham1Element.style.top = '20px';
    ham1Element.style.transform = 'rotate(-45deg)';
    ham2Element.style.display = 'none';
    ham3Element.style.position = 'absolute';
    ham3Element.style.width = '20px';
    ham3Element.style.top = '20px';
    ham3Element.style.transform = 'rotate(45deg)';
    bgChange();
    hamVar = 1;
    menuBar.style.position = 'fixed';
    slideShow.style.marginTop = '96px'
    offCanvas.style.width = '421px';
    offCanvas.style.opacity = '1';
    Body.style.overflow = 'hidden';

    

}
function closeHam(){
    ham1Element.style.position = 'relative';
    ham1Element.style.width = '18px';
    ham1Element.style.top = '0px';
    ham1Element.style.transform = 'rotate(0deg)';
    ham2Element.style.display = 'block';
    ham3Element.style.position = 'relative';
    ham3Element.style.width = '18px';
    ham3Element.style.top = '0px';
    ham3Element.style.transform = 'rotate(0deg)';
    bgChange();
    hamVar = 0;
    menuBar.style.position = 'relative';
    slideShow.style.marginTop = '0px'
    offCanvas.style.width = '0px';
    offCanvas.style.opacity = '0';
    Body.style.overflow = 'visible';
}


function bgChange(){
    hamElement.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
    setTimeout(function(){
        hamElement.style.backgroundColor = 'transparent';
    },150);
}


// plus buttons

// ----mobile show---

let MobileShow1 = ()=> {
    plusChildBtn1.style.display = 'none';
    mobileContainer1.style.height = '354px';
    plusVar1 = 1;
}

let MobileShow2 = ()=> {
    plusChildBtn2.style.display = 'none';
    mobileContainer2.style.height = '354px';
    plusVar2 = 1;
}

let MobileShow3 = ()=> {
    plusChildBtn3.style.display = 'none';
    mobileContainer3.style.height = '354px';
    plusVar3 = 1;
}

let MobileShow4 = ()=> {
    plusChildBtn4.style.display = 'none';
    mobileContainer4.style.height = '175px';
    plusVar4 = 1;
}

// ----mobile hide---

let MobileHide1 = ()=> {
    plusChildBtn1.style.display = 'block';
    mobileContainer1.style.height = '0px';
    plusVar1 = 0;
}

let MobileHide2 = ()=> {
    plusChildBtn2.style.display = 'block';
    mobileContainer2.style.height = '0px';
    plusVar2 = 0;
}

let MobileHide3 = ()=> {
    plusChildBtn3.style.display = 'block';
    mobileContainer3.style.height = '0px';
    plusVar3 = 0;
}

let MobileHide4 = ()=> {
    plusChildBtn4.style.display = 'block';
    mobileContainer4.style.height = '0px';
    plusVar4 = 0;
}

plusBtn1.addEventListener('click', function(){
    if (plusVar1 == 0){
        if (plusVar2){
            MobileHide2();
        } 
        else if(plusVar3){
            MobileHide3();
        }
        else if(plusVar4){
            MobileHide4();
        }
        MobileShow1();
    }
    else if(plusVar1 == 1){
        MobileHide1();
    }  
});

plusBtn2.addEventListener('click', function(){
    if (plusVar2 == 0){
        if (plusVar1){
            MobileHide1();
        } 
        else if(plusVar3){
            MobileHide3();
        }
        else if(plusVar4){
            MobileHide4();
        }
        MobileShow2();
    }
    else if(plusVar2 == 1){
        MobileHide2();
    }  
});

plusBtn3.addEventListener('click', function(){
    if (plusVar3 == 0){
        if (plusVar1){
            MobileHide1();
        } 
        else if(plusVar2){
            MobileHide2();
        }
        else if(plusVar4){
            MobileHide4();
        }
        MobileShow3();
    }
    else if(plusVar3 == 1){
        MobileHide3();
    }  
});

plusBtn4.addEventListener('click', function(){
    if (plusVar4 == 0){
        if (plusVar2){
            MobileHide2();
        } 
        else if(plusVar3){
            MobileHide3();
        }
        else if(plusVar1){
            MobileHide1();
        }
        MobileShow4();
    }
    else if(plusVar4 == 1){
        MobileHide4();
    }  
});


// list container

let offeringShow = ()=> {
    plusChildBtn5.style.display = 'none';
    offerings.style.height = '343px';
    plusVar5 = 1;
}

let supportShow = ()=> {
    plusChildBtn6.style.display = 'none';
    support.style.height = '278px';
    plusVar6 = 1;
}

let companyShow = ()=> {
    plusChildBtn7.style.display = 'none';
    ourCompany.style.height = '211px';
    plusVar7 = 1;
}

let linkShow = ()=> {
    plusChildBtn8.style.display = 'none';
    usefulLinks.style.height = '165px';
    plusVar8 = 1;
}

// ----mobile hide---

let offeringHide = ()=> {
    plusChildBtn5.style.display = 'block';
    offerings.style.height = '0px';
    plusVar5 = 0;
}

let supportHide = ()=> {
    plusChildBtn6.style.display = 'block';
    support.style.height = '0px';
    plusVar6 = 0;
}

let companyHide = ()=> {
    plusChildBtn7.style.display = 'block';
    ourCompany.style.height = '0px';
    plusVar7 = 0;
}

let linkHide = ()=> {
    plusChildBtn8.style.display = 'block';
    usefulLinks.style.height = '0px';
    plusVar8 = 0;
}

plusBtn5.addEventListener('click', function(){
    if (plusVar5 == 0){
        if (plusVar6){
          supportHide();
        } 
        else if(plusVar7){
            companyHide();
        }
        else if(plusVar8){
            linkHide();
        }
        offeringShow();
    }
    else if(plusVar5 == 1){
        offeringHide();
    }  
});

plusBtn6.addEventListener('click', function(){
    if (plusVar6 == 0){
        if (plusVar7){
            companyHide();
        } 
        else if(plusVar8){
            linkHide();
        }
        else if(plusVar5){
            offeringHide();
        }
        supportShow();
    }
    else if(plusVar6 == 1){
        supportHide();
    }  
});

plusBtn7.addEventListener('click', function(){
    if (plusVar7 == 0){
        if (plusVar8){
            linkHide();
        } 
        else if(plusVar5){
            offeringHide();
        }
        else if(plusVar6){
            supportHide();
        }
        companyShow();
    }
    else if(plusVar7 == 1){
        companyHide();
    }  
});

plusBtn8.addEventListener('click', function(){
    if (plusVar8 == 0){
        if (plusVar5){
            offeringHide();
        } 
        else if(plusVar6){
            supportHide();
        }
        else if(plusVar7){
            companyHide();
        }
        linkShow();
    }
    else if(plusVar8 == 1){
        linkHide();
    }  
});
