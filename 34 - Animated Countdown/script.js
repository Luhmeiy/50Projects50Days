const rotate  = document.querySelector(".rotate");
const numbers = document.querySelectorAll("span");
const replay  = document.querySelector(".replay");
const repAni  = document.getElementById("replay-animation")
let   counter = 0;

animate();

function animate() {
    for (const number of numbers) {
        setTimeout(() => number.classList.add("in"), counter += 500)
        setTimeout(() => {
            number.classList.remove("in")
            number.classList.add("out")
        }, counter += 500)
    }
    
    setTimeout(() => {
        rotate.style.display = "none";
        replay.style.display = "block";
    }, 4500)
}

function animateHandler() {
    rotate.style.display = "block";
    replay.style.display = "none";
    counter = 0;
    for (const number of numbers) {
        number.classList.remove("out");
    }
    animate();
}

repAni.addEventListener('click', animateHandler)