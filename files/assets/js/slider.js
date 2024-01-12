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
const sliderImg = document.querySelectorAll('.kk-slider-element .image');
const sliderNext = document.querySelector('.kk-slider-next img');
const sliderPrev = document.querySelector('.kk-slider-prev img');

const sliderCount = allSliderElements.length-1;
let shownImage = 0;
/*console.log(sliderImg[0]);*/

const sliders = document.querySelectorAll("#kk-slider");


for (let i = 0; i < sliders.length; ++i) {
    const slider = sliders[i];
    const dots = slider.querySelector(".dots");

    // Creates dots and add listeners to them
    for (let i = 0; i < sliderImg.length; ++i) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        /*console.log(dot)*/
        dots.appendChild(dot);
        dot.addEventListener("click", dotClick.bind(null, i), false);
    }
    const allDots = dots.querySelectorAll(".dot");
    allDots.forEach(allDot => {
      /*  if(allDot === showImage){
            allDot.classList.add("active") ;
        }*/
        console.log(allDot)

    })

    allDots[0].classList.add("active");

    function dotClick(index) {
        if (index == shownImage){
            return false;
        }

      /*  if (index > shownImage) {
          /!*  return(num + 1);*!/
            return true;
        }

        else {
            return false
        }*/

    }
}



allSliderElements[0].classList.add('kk-slider-shown');


sliderNext.addEventListener('click', function() {
    if(shownImage === sliderCount) {
        shownImage = 0;
    } else {
        shownImage++;
    }
    allSliderElements.forEach(function(element, index) {
        element.classList.remove('kk-slider-shown');
        if(index === shownImage) {
            element.classList.add('kk-slider-shown');
        }
    })

const dot1 = document.querySelectorAll('.dot')
    dot1.forEach(function (element, index){
        element.classList.remove('active');
        if(index === shownImage) {
            element.classList.add('active')
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
    const dot1 = document.querySelectorAll('.dot')
    dot1.forEach(function (element, index){
        element.classList.remove('active');
        if(index === shownImage) {
            element.classList.add('active')
        }
    })
})


