const button   = document.querySelector(".show-notification");
const wrapper  = document.querySelector(".notification-wrapper");
const message  = ["One", "Two", "Three", "Four"];
const divStyle = ["error", "info", "success"];

button.addEventListener('click', () => {
    const nMessage = Math.floor(Math.random() * message.length);
    const nStyle   = Math.floor(Math.random() * divStyle.length);
    wrapper.innerHTML += `<div class="toast ${divStyle[nStyle]}">Message ${message[nMessage]}</div>`;
    
    const toasts = document.getElementsByClassName("toast");
    setTimeout(() => {
        wrapper.removeChild(toasts[0]);
    }, 4000);
})