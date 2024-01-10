let mobileMenu = document.querySelector(".mobile_menu_trigger");
let activeMenu = document.querySelector(".mobile_menu_active");
let overlay = document.querySelector(".menu_overlay");
let logo = document.querySelector(".header-right-bg");
let menuClose = document.querySelector(".menu-close");
let logoBottom =  document.querySelector(".header-logo-right");
let logoBottomMobile =  document.querySelector(".header-logo-right.mobile");
let headerBG =  document.querySelector(".header-bg");
let headerLeft =  document.querySelector(".header-contain .header-left");
let mobileActive = document.querySelector(".mobile_menu_active");
let logoMobile =  document.querySelector(".header-right-bg.mobile");
console.log(logoMobile)



mobileMenu.addEventListener('click',() => {
    overlay.classList.add('bg');
    logo.classList.add('transition');
    headerBG.classList.add('fading');
    headerLeft.classList.add('fading');
    mobileMenu.style.opacity = "0";
    logoBottom.style.display = "none";
    logoBottomMobile.style.display = "none";
    logoMobile.classList.remove('fading');
})

menuClose.addEventListener('click',() => {
    overlay.classList.remove ('bg');
    logo.classList.remove('transition');
    headerBG.classList.remove('fading')
    headerLeft.classList.remove('fading');
    mobileMenu.style.opacity = "1";
    logoBottom.style.display = ""
    logoBottomMobile.style.display = ""
    logoMobile.classList.add('fading');
})
