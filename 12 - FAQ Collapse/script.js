const toggle = document.querySelectorAll(".fa-toggle");

for (const toggled of toggle) {
    toggled.addEventListener('click', () => {
        toggled.parentNode.parentNode.classList.toggle("active");
    })
}