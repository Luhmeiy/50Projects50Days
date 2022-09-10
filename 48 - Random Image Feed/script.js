const imageFeed = document.querySelector(".image-feed");

makeRequest();

async function fetchImages() {
    const images = JSON.parse(this.responseText);
    for (let i = 0; i < 18; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
    
        imageFeed.innerHTML += `<img src="${images[randomNumber].download_url}">`;
    }
}

function makeRequest() {
    const request = new XMLHttpRequest();

    request.onload = fetchImages;
    request.open('get', `https://picsum.photos/v2/list?limit=100`, true);
    request.send();
}