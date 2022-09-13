const play    = document.getElementById("play");
const insects = document.querySelectorAll(".favorite-insect");
const game    = document.getElementById("game");
const timeEl  = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

let favInsect;
let [minute, second, score] = [0, 0, 0];

play.addEventListener('click', () => play.parentNode.classList.add("up"));

for (const insect of insects) {
    insect.addEventListener('click', () => {
        favInsect = insect.querySelector("img");
        insect.parentNode.parentNode.classList.add("up");
        startGame();
    })
}

function startGame() {
    setInterval(increaseTime, 1000);
    addInsect();
}

function addInsect() {
    const insect = document.createElement("div");
    insect.classList.add("insect");

    const x = Math.random() * (window.innerWidth - 200) + 100;
    const y = Math.random() * (window.innerHeight - 200) + 100;

    insect.style.left = `${x}px`;
    insect.style.top  = `${y}px`;

    insect.innerHTML = `<img src="${favInsect.src}" alt="${favInsect.alt}" style="transform: rotate(${Math.random() * 360}deg)">`;

    insect.addEventListener('click', catchInsect);

    game.appendChild(insect);
}

function addInsects() {
    setTimeout(addInsect, 1500);
    setTimeout(addInsect, 2000);
}

function catchInsect() {
    increaseScore();

    this.classList.add("caught");

    setTimeout(() => this.remove(), 2000);
    addInsects();
}

// Increase and Converts Time
function increaseTime() {
    second++;

    if (second >= 60) {
        minute += 1;
        second  = 0;
    }

    minuteConverted = minute.toString().length === 1 ? `0${minute}` : minute;
    secondConverted = second.toString().length === 1 ? `0${second}` : second;

    timeEl.innerText = `Time: ${minuteConverted}:${secondConverted}`
}

// Increase Score
function increaseScore() {
    score++; 
    scoreEl.innerText = `Score: ${score}`;

    if (score >= 20) message.classList.add("active");
}