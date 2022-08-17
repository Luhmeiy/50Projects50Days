const text    = document.getElementById("choice");
const choices = document.getElementById("choices");

text.focus();

text.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if (e.key === 'Enter') {
        e.target.value = '';
        selectRandom();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    choices.innerHTML = '';
    for (const tag of tags) {
        const choice = document.createElement('span');
        choice.classList.add('span');
        choice.innerText = tag;
        choices.appendChild(choice);
    }
}

function selectRandom() {
    const times    = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        if (randomTag !== undefined) {
            highlightTag(randomTag);
            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
	    }
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.span');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}