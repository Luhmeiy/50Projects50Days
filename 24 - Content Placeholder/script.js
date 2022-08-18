const header  = document.querySelector(".content-header");
const title   = document.getElementById("title");
const text    = document.getElementById("text");
const img     = document.getElementById("img");
const author  = document.getElementById("author");
const date    = document.getElementById("date");
const maskers = document.querySelectorAll(".bg-masker");

setTimeout(getData, 3000);

function getData() {
    header.innerHTML = "<img src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80' alt='notebook'>";
    title.innerHTML  = "Lorem ipsum dolor sit amet";
    text.innerHTML   = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
    img.innerHTML    = "<img src='https://randomuser.me/api/portraits/men/45.jpg' alt='profile'>";
    author.innerHTML = "John Doe";
    date.innerHTML   = "Oct 08, 2020";

    for (const masker of maskers) { masker.classList.remove("bg-masker"); }
}