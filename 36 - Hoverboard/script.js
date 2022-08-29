const container   = document.querySelector(".container");
const colors      = ["rgb(142, 68, 173)", "rgb(52, 152, 219)", "rgb(230, 126, 34)", "rgb(46, 204, 113)", "rgb(231, 76, 60)"];

for (let i = 0; i < 500; i++) {
    container.innerHTML += `<div class="square"></div>`;
}

const squares = document.querySelectorAll(".square");

for (const square of squares) {
    square.addEventListener('mouseover', () => addColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function addColor(square) {
    randomColor = colors[Math.floor(Math.random() * colors.length)];

    square.style.background = `${randomColor} none repeat scroll 0% 0%`;
    square.style.boxShadow  = `${randomColor} 0px 0px 2px, ${randomColor} 0px 0px 10px`;
}

function removeColor(square) {
    square.style.background = `#1d1d1d none repeat scroll 0% 0%`;
    square.style.boxShadow  = `rgb(0, 0, 0) 0px 0px 2px`;
}