const buttons = document.querySelectorAll("li");
const images  = document.querySelectorAll(".image");

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        hideContents();
        hideItems();

        button.classList.add("active");
        images[i].classList.add("show");
    })
}) 

function hideContents() {
    images.forEach(image => image.classList.remove('show'))
}

function hideItems() {
    buttons.forEach(button => button.classList.remove('active'))
}