const nav = document.getElementById("nav");

document.addEventListener('scroll', () => {
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? nav.classList.add('active') : nav.classList.remove('active');
})