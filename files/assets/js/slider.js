/*// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


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
showSlides(slideIndex);*/


//sliderShow

const allSliderElements = document.querySelectorAll('.kk-slider-element');
const sliderNext = document.querySelector('.kk-slider-next img');
const sliderPrev = document.querySelector('.kk-slider-prev img');
const sliderCount = allSliderElements.length-1;
let shownImage = 0;

console.log(sliderPrev);
allSliderElements[0].classList.add('kk-slider-shown');

sliderNext.addEventListener('click', function() {
    if(shownImage === sliderCount) {
        console.log(shownImage)
        shownImage = 0;
    } else {
        console.log(shownImage)
        shownImage++;
    }
    allSliderElements.forEach(function(element, index) {
        element.classList.remove('kk-slider-shown');
        if(index === shownImage) {
            element.classList.add('kk-slider-shown');
        }
    })
})

sliderPrev.addEventListener('click', function() {
    if(shownImage === 0) {
        shownImage = sliderCount;
    } else {
        shownImage--;
    }
    allSliderElements.forEach(function(element, index) {
        element.classList.remove('kk-slider-shown');
        if(index === shownImage) {
            element.classList.add('kk-slider-shown');
        }
    })
})


