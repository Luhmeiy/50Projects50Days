const heart     = document.querySelector(".heart");
const times     = document.getElementById("times");
let   count     = 0;
let   clickTime = 0;

heart.addEventListener("click", (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        (new Date().getTime() - clickTime) < 800 ? like(e) : clickTime = new Date().getTime();
    }
})

function like(e) {
    times.innerText = ++count;

    const xInside = e.clientX - e.target.offsetLeft;
    const yInside = e.clientY - e.target.offsetTop;

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fas');
    heartIcon.classList.add('fa-solid');
    heartIcon.classList.add('fa-heart');
    heartIcon.style.left = `${xInside}px`;
    heartIcon.style.top  = `${yInside}px`;

    heart.appendChild(heartIcon);

    setTimeout(() => heartIcon.remove(), 1000);

    clickTime = 0;

    // count++;
    // times.innerText = count;

    // const xInside = e.clientX - e.target.offsetLeft;
    // const yInside = e.clientY - e.target.offsetTop;

    // heart.innerHTML += `<i class="fas fa-solid fa-heart" style="top: ${yInside}px; left: ${xInside}px;"></i>`;

    // const hearts = document.getElementsByClassName("fas");

    // setTimeout(() => {
    //     heart.removeChild(hearts[0]);
    // }, 1000)

    // clickTime = 0;
}