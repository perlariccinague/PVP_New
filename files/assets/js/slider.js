// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/*function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}*/


let sliderAll = document.querySelectorAll(".mySlides");
let dotAll = document.querySelectorAll(".dot")
function showSlides(n) {
    if (n > sliderAll.length) {slideIndex = 1}
    if (n < 1) {slideIndex = sliderAll.length}
    sliderAll.forEach(slides=> {
        slides.style.display = 'none'
    })
    sliderAll[slideIndex-1].style.display = "block";
    dotAll.forEach(dots=> {
        dots.className = dots.className.replace(" active", "");
    })
    dotAll[slideIndex-1].className += " active";
}

console.log(sliderAll)
console.log(sliderAll.length)


let slideIndex = 1;
showSlides(slideIndex);


