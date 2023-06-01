const slides = document.querySelectorAll('.carousel-item');
let slidePosition = 0;
function hideAllSlides(){
    for(const slide of slides){
        slide.classList.remove('carousel-item-visible') && slide.classList.add('carousel-item-hidden');
    }
}

/* nav div classes buttons */
const aboutBtn = document.querySelector(".aboutBtn");
const projectsBtn = document.querySelectorAll(".projectsBtn");
const contactBtn = document.querySelector(".contactBtn");
/* nav div classes buttons end here*/

/* sI means section intro */
const [ sI1, sI2, sI3 ] = [document.querySelector('h1'), document.querySelector('.projects-title'),
document.querySelector('.contact-description')];

const header = document.querySelector('header');
const headerDiv = document.querySelector('.header');
const [topBun,inBuns,bottomBun] = 
[
    document.querySelector('.top-bun'),
    document.querySelector('.in-buns'),
    document.querySelector('.bottom-bun')
];
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

function hamburgerBack(){
    topBun.classList.remove('topBunToX');
    inBuns.classList.remove('inBunsToX');
    bottomBun.classList.remove('bottomBunToX');
    mobileMenu.style.backgroundColor = "rgba(0, 0, 0, 0.441)";
    topBun.classList.add('topBunBack');
    inBuns.classList.add('inBunsBack');
    bottomBun.classList.add('bottomBunBack');
    setTimeout(() => {
    topBun.classList.remove('topBunBack');
    inBuns.classList.remove('inBunsBack');
    bottomBun.classList.remove('bottomBunBack');
    }, 501)
}

function removeHeaderPopupClasses(){
    header.classList.remove('header-popup');
    headerDiv.classList.remove('header-div-popup'); 
}
function goToSection(sectionIntro, slidePosition){
    switch (sectionIntro){
        case sI1:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
        break;
        case sI2:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
        break;
        case sI3:
            removeHeaderPopupClasses()
            hamburgerBack()
            hideAllSlides();
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    sectionIntro.scrollIntoView();
}
function goToSectionWithoutUsingMobileMenu(sectionIntro, slidePosition){
    switch (sectionIntro){
        case sI1:
            hideAllSlides();
        break;
        case sI2:
            hideAllSlides();
        break;
        case sI3:
            hideAllSlides();
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    sectionIntro.scrollIntoView();
}
function activateBtn(btn, sectionIntro, slidePosition){
    btn.addEventListener("click", () => {
        if(!header.classList.contains('header-popup')){
            goToSectionWithoutUsingMobileMenu(sectionIntro, slidePosition)
        } else {
            goToSection(sectionIntro, slidePosition)
        }
    });
    }
    mobileMenu.addEventListener("click", function(){
        if (!header.classList.contains('header-popup')){
            topBun.classList.remove('topBunBack');
            inBuns.classList.remove('inBunsBack');
            bottomBun.classList.remove('bottomBunBack');
            mobileMenu.style.backgroundColor = "rgba(0,0,0,0)";
            topBun.classList.add('topBunToX');
            inBuns.classList.add('inBunsToX');
            bottomBun.classList.add('bottomBunToX');
            header.classList.add('header-popup');
            headerDiv.classList.add('header-div-popup');
        
        } else {
            header.classList.remove('header-popup');
            headerDiv.classList.remove('header-div-popup');
            hamburgerBack()   
        }
    
    });

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }
    function isNotInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom <= 0
        );
    }
    let lapTopScreen = window.matchMedia("(min-width: 1024px)");

    document.addEventListener('scroll', function () {
        if(isNotInViewport(contactBtn) && !lapTopScreen.matches) mobileMenu.style.display = "flex";
        if(isInViewport(contactBtn) &&
         !header.classList.contains('header-popup')) mobileMenu.style.display = "none";
    }, {
        passive: true
    });


    activateBtn(aboutBtn, sI1, 0);
    activateBtn(projectsBtn[0],sI2, 1);
    activateBtn(projectsBtn[1],sI2, 1);
    activateBtn(contactBtn, sI3, 2);

    document.querySelector('.ftr-nav-link').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* text copy for now but add contact form with my own human-verification test generator
   human-verification test generator could have random visuals with matching test questions for human about them
*/


    /* Contact Page Email Copy JS Below */
    
    const copyEmailBtn = document.querySelector('.email-copy-btn');
    const myEmail = document.querySelector(".email");
    /*
    myEmail.addEventListener("click"/* ''? *//*, () => {
        navigator.clipboard.writeText("<empty clipboard>").then(
        () => {
          // clipboard successfully set
        },
        () => {
          // clipboard write failed
        }
      );})
      */
     copyEmailBtn.addEventListener("mouseleave", ()=>{
            /* remove unhover class if el hovered */
            copyEmailBtn.classList.add("email-copy-btn-unhover");
            /*
            setTimeout(()=>{
                copyEmailBtn.classList.remove("email-copy-btn-unhover");
            }, 1001);
        */
           
            /* test code
           const copyEmailBtnBGcolor = copyEmailBtn.style.color === "black"? "yellow": "black";
            copyEmailBtn.style.backgroundColor = copyEmailBtnBGcolor;
            */
           console.log(copyEmailBtn.classList.contains("email-copy-btn-unhover")? "has unhover class": "!has unhover class");
            //console.log('log from copyEmailBtn event listener');
            
     });
     //if(copyEmailBtn.classList.contains("email-copy-btn-unhover")) ;