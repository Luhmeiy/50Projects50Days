const background = document.querySelector(".background");
const password   = document.getElementById("password");

password.addEventListener('input', (e) => {
    background.style.filter = `blur(${20 - e.target.value.length*2}px)`;
})