const images   = document.getElementById("imgs");
const leftBtn  = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img      = document.querySelectorAll(".slide");
let   i = 0;

let   interval = setInterval(run, 2000);

function run() {
    i++
    carousel();
}

function carousel() {
    if (i > img.length - 1) i = 0;
    else if (i < 0) i = img.length - 1;
    images.style.transform = `translateX(-${i*500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

leftBtn.addEventListener('click', () => {
    i--;
    carousel();
    resetInterval();
})

rightBtn.addEventListener('click', () => {
    i++;
    carousel();
    resetInterval();
})