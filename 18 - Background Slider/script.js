const body       = document.body;
const slide      = document.getElementsByClassName("slide");
let   slideIndex = 1;
showDivs(slideIndex);

document.getElementById('prev').addEventListener('click', () => showDivs(slideIndex--))
document.getElementById('next').addEventListener('click', () => showDivs(slideIndex++))

function showDivs() {
    if (slideIndex > slide.length) {slideIndex = 1}
    else if (slideIndex < 1) {slideIndex = slide.length}
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.opacity = 0;
    }
    slide[slideIndex-1].style.opacity = 1;
    body.style.backgroundImage = `${slide[slideIndex-1].style.backgroundImage}`
}