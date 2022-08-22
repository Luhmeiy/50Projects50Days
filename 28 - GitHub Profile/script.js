const form      = document.getElementById("form");
const user      = document.getElementById("user");
const container = document.querySelector(".container");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    makeRequest(user.value);
    user.value = '';
})

function printUserInfo() {
    const responseObj = JSON.parse(this.responseText);

    if (responseObj.name === undefined) {
        container.innerHTML = `<div class="user-github">
            <h1>No profile with this username</h1>
        </div>`;
    } else {
        container.innerHTML = `<div class="user-github">
            <div>
            <img src="${responseObj.avatar_url}" alt="User Avatar">
            </div>
            
            <div class="user-info">
                <h2>${responseObj.name}</h2>
                <p>${responseObj.bio}</p>
                <ul>
                    <li>${responseObj.followers} <strong>Followers</strong></li>
                    <li>${responseObj.following} <strong>Following</strong></li>
                    <li>${responseObj.public_repos} <strong>Repos</strong></li>
                </ul>
                <div class="repos">
                </div>
            </div>
        </div>`;
        makeRepoRequest(responseObj.repos_url);
    }
}

function makeRequest(user) {
    const request = new XMLHttpRequest();

    request.onload = printUserInfo;
    request.open('get', `https://api.github.com/users/${user}`, true);
    request.send();
}

function printRepos() {
    const responseObj = JSON.parse(this.responseText);
    const repos = document.querySelector(".repos");

    if (responseObj.length >= 5) {
        for (let i = 0; i < 5; i++) {
            repos.innerHTML += `<a href="${responseObj[i].html_url}" target="_blank">${responseObj[i].name}</a>`
        }
    } else {
        for (let i = 0; i < responseObj.length; i++) {
            repos.innerHTML += `<a href="${responseObj[i].html_url}" target="_blank">${responseObj[i].name}</a>`
        }
    }
}

function makeRepoRequest(repo) {
    const request = new XMLHttpRequest();

    request.onload = printRepos;
    request.open('get', `${repo}?sort=created`, true);
    request.send();
}