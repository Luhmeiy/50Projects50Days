const search   = document.getElementById("search");
const userList = document.querySelector(".user-list");

search.focus();
getData();

search.addEventListener('input', () => searchUser(search.value));

async function getData() {
    const res         = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json();

    userList.innerHTML = '';

    for (const user of results) {
        userList.innerHTML += `<li class="user">
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        </li>`
    }
}

function searchUser(search) {
    const users = document.querySelectorAll(".user");
    
    for (const user of users) {
        if (!(user.innerText.toLowerCase().indexOf(search.toLowerCase()) !== -1)) {
            user.classList.add("hidden");
        } else {
            user.classList.remove("hidden");
        }
    }
}