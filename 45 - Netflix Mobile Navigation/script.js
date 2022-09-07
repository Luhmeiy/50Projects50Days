const btnOpen  = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const navs     = document.querySelectorAll(".nav");
 
btnOpen.addEventListener('click', () => {
    for (const nav of navs) nav.classList.add("active");
})

btnClose.addEventListener('click', () => {
    for (const nav of navs) nav.classList.remove("active");
})