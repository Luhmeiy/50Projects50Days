// Definitions
const canvas    = document.getElementById("paint-canvas");
const context   = canvas.getContext("2d");
const boundings = canvas.getBoundingClientRect();
const color     = document.getElementById("color");
const sizeBtn   = document.getElementById("size");
let   size      = Number(document.getElementById("size").innerText);
const buttons   = document.getElementsByClassName("menu")[0];
const clear     = document.getElementById('clear');

// Specifications
context.strokeStyle = color.value;
let isDrawing = false;
let mouseX    = 0;
let mouseY    = 0;

// Handle Colors
color.addEventListener('input', () => { 
    context.strokeStyle = color.value; 
});

// Handle Brushes
buttons.addEventListener('click', function(e) {
    if (e.target.id === 'minus' && size > 5) {
        size -= 5;
    }
    else if (e.target.id === 'plus' && size < 50) {
        size += 5;
    }
    sizeBtn.innerText = size;
});

// Handle Mouse Movement
canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    mouseX    = e.offsetX;
    mouseY    = e.offsetY;
});

canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
        const mouseX2 = e.offsetX;
        const mouseY2 = e.offsetY;

        drawCircle(mouseX2, mouseY2);
        drawLine(mouseX, mouseY, mouseX2, mouseY2);

        mouseX = mouseX2;
        mouseY = mouseY2;
    }
});

canvas.addEventListener('mouseup', function(e) {
    isDrawing = false;
    mouseX    = undefined;
    mouseY    = undefined;
});

// Handle Drawing
function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = context.strokeStyle;
    context.fill();
}

function drawLine(x, y, x2, y2) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x2, y2);
    context.lineWidth = size * 2
    context.stroke();
}

// Handle Clear Button
clear.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});