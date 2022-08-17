const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add('active');
    })
}

function removeActiveClasses() {
    for (const card of cards) {
        card.classList.remove('active');
    }
}