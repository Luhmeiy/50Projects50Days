const testimonial = document.querySelector(".testimonial");
const userImage   = document.getElementById("user-img");
const userName    = document.getElementById("user-name");
const userRole    = document.getElementById("user-role");

let counter = 0;

fetchData();

setInterval(fetchData, 10000);

function fetchData() {
    fetch('./testimonials.json')
        .then((response) => response.json())
        .then((data) => {
            if (counter > 6) counter = 0;

            const { name, position, photo, text } = data[counter]

            testimonial.innerText = text;

            userImage.src = photo;
            userImage.alt = name;

            userName.innerText = name;
            userRole.innerText = position;

            counter++;
        })
}