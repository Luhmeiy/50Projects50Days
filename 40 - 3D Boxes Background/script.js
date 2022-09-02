const magic = document.querySelector(".magic");
const boxes = document.querySelector(".boxes");
let   row   = 0;
let   col   = 0;

while (row != 4 && col != 4) {
    console.log(row, col)
    boxes.innerHTML += `<div class="box" style="background-position: ${col * -125}px ${row * -125}px;"></div>`;
    col++;
    if (col != 0 && col % 4 == 0) changeRow();
}

function changeRow() {
    row++;
    col = 0;
}

magic.addEventListener('click', () => boxes.classList.toggle("join"))