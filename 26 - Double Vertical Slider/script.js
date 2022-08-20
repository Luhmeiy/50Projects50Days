const container    = document.querySelector(".container");
const leftSlider   = document.querySelector(".left-slider");
const rightSlider  = document.querySelector('.right-slider')
const sliderLength = leftSlider.querySelectorAll('div').length;
let   slideIndex   = 0;

document.getElementById('prev').addEventListener('click', () => changeSlide('up', slideIndex--));
document.getElementById('next').addEventListener('click', () => changeSlide('down', slideIndex++));

leftSlider.style.top = `-${(sliderLength - 1) * 100}vh`;

function changeSlide(direction) {
    const sliderHeight = container.clientHeight;
    if (direction === 'up' && slideIndex < 0) {
        slideIndex = sliderLength - 1;
    } 
    else if (direction === 'down' && slideIndex > sliderLength - 1) {
        slideIndex = 0;
    }

    rightSlider.style.transform = `translateY(-${slideIndex * sliderHeight}px)`;
    leftSlider.style.transform = `translateY(${slideIndex * sliderHeight}px)`;
}