gsap.registerPlugin(ScrollTrigger);

const duration = 0.7;
let allLinks = document.querySelectorAll("#slider-headline .ce_sliderStart .slider-control > a");
console.log(allLinks);

allLinks.forEach(sliderNav => {
    sliderNav.addEventListener('click', function() {
        gsap.from( "#slider-headline .ce_sliderStart .ce_image img",{
            x: -800,
            duration: duration,
            opacity: 1,
            scrollTrigger: {
                trigger: "#slider-headline .ce_sliderStart .ce_image img",
                start: "top bottom",
                end: "bottom bottom",
                toggleActions: "play none none none"
            }
        })

        gsap.from("#slider-headline .ce_sliderStart .ce_image .description ",{
            x: 400,
            duration: duration,
            opacity: 0,
            scrollTrigger: {
                trigger: "#slider-headline .ce_sliderStart .ce_image .description",
                start: "top bottom",
                end: "bottom bottom",
                toggleActions: "play none none none"
            }
        })
    })
})



let test = document.querySelector("#slider-headline .ce_sliderStart .slider-control > a");
console.log(test);







