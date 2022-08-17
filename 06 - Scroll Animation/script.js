const elements = document.querySelectorAll(".content");

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    for (const element of elements) {
        const boxTop = element.getBoundingClientRect().top;
        boxTop < triggerBottom ? element.classList.add('show') : element.classList.remove('show');
    }
}

checkBoxes();