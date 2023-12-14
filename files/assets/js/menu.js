let mobileMenu = document.querySelector(".mobile_menu_trigger");
let activeMenu = document.querySelector(".mobile_menu_active");
let overlay = document.querySelector(".menu_overlay");
let logo = document.querySelector(".header-right-bg");
let menuClose = document.querySelector(".menu-close");
let logoBottom =  document.querySelector(".header-logo-right")
let headerBG =  document.querySelector(".header-bg")
let headerLeft =  document.querySelector(".header-contain .header-left")

console.log(overlay);

/*if(activeMenu) {
    overlay.style.opacity = "1";
    overlay.style.zIndex = "10";
    console.log("test")
}*/

mobileMenu.addEventListener('click',() => {
    overlay.classList.add('bg');
    logo.classList.add('transition');
    headerBG.classList.add('fading');
    headerLeft.classList.add('fading');
    mobileMenu.style.opacity = "0";
    logoBottom.style.display = "none"
})

menuClose.addEventListener('click',() => {
    overlay.classList.remove ('bg');
    logo.classList.remove('transition');
    headerBG.classList.remove('fading')
    headerLeft.classList.remove('fading');
    mobileMenu.style.opacity = "1";
    logoBottom.style.display = ""
})
