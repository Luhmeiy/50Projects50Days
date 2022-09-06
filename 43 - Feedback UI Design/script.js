const container = document.querySelector(".review-container");
const ratings   = document.querySelectorAll(".rating");
const send      = document.querySelector(".send");

for (const rating of ratings) {
    rating.addEventListener('click', () => {
        removeActive();
        rating.classList.add("active");
    })
}

send.addEventListener('click', () => {
    const selected      = document.querySelector(".rating.active");
    const selectedValue = selected.innerText.slice(2).trim();

    container.innerHTML = `<p id="heart">🧡</p>
        <strong>Thank You!</strong><br>
        <strong>Feedback: ${selectedValue}</strong>
        <p>We'll use your feedback to improve our customer support</p>`;
})

function removeActive() {
    for (const rating of ratings) {
        rating.classList.remove("active");
    }
}