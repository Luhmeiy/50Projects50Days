// const body     = document.querySelector("body");
// const message  = document.getElementById("message");
// const keypress = document.querySelectorAll(".key");

// document.addEventListener('keypress', (e) => {
//     message.classList.add("hidden"),
//     keypress.forEach(key => {
//         key.classList.remove("hidden");
//     });
//     keypress[0].innerText = e.key;
//     keypress[1].innerText = e.keyCode;
//     keypress[2].innerText = e.code;
//     if (e.key == " ") {
//         keypress[0].innerText = e.code;
//     }
// })

const container = document.querySelector(".container");

window.addEventListener('keydown', (event) => {
    container.innerHTML = `<div class="key">
        ${event.key === ' ' ? 'Space' : event.key} 
        <p>event.key</p>
    </div>
    <div class="key">
        ${event.keyCode}
        <p>event.keyCode</p>
    </div>
    <div class="key">
        ${event.code}
        <p>event.code</p>
    </div>`
})