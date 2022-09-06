const slider      = document.getElementById("slider");
const sliderLabel = document.getElementById("slider-label");

slider.addEventListener('input', () => {
    const sliderValue = slider.value;

    sliderLabel.innerText  = sliderValue;
    sliderLabel.style.left = `${-20 + (2.65 * sliderValue)}px`;
})