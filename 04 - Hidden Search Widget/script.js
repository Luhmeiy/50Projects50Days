const search    = document.getElementById("search");
const container = document.querySelector(".container");
const searchbar = document.querySelector(".searchbar");

search.addEventListener('click', () => {
    container.classList.toggle('expanded');
    searchbar.focus();
})