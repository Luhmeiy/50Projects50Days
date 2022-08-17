const secHand    = document.querySelector('.second-hand');
const minHand    = document.querySelector('.min-hand');
const hourHand   = document.querySelector('.hour-hand');
const time       = document.getElementById("time");
const element    = document.body;
const toggleMode = document.getElementById("toggleMode");
const hand       = document.querySelectorAll("hand")
const months     = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDays   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

setInterval(setDate, 1000);

function setDate() {
    const d     = new Date();
    const day   = d.getDate();
    const week  = d.getDay();
    const month = d.getMonth();
    let   hour  = d.getHours();
    let   min   = d.getMinutes();
    const sec   = d.getSeconds();

    // Update Clock
    const secondsDegrees = ((sec / 60) * 360) + 90;
    const minsDegrees    = ((min / 60) * 360) + ((sec/60)*6) + 90;
    const hourDegrees    = ((hour / 12) * 360) + ((min/60)*30) + 90;

    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    // Update Date
    min = min.toString().length == 1 ? `0${min}` : min
    let ampm  = hour >= 12 ? 'PM' : 'AM';
    hour = hour.toString().length == 1 ? `0${hour}` : hour
    hour = ampm == 'AM' && (hour % 12) == 12 ?  12 : hour;
    time.innerHTML = `<h1>${hour}:${min} ${ampm}</h1>
                      <p class='date'>${weekDays[week]}, ${months[month]} <span id='day'>${day}</span></p>`;


}

toggleMode.addEventListener('click', () => {
    element.classList.toggle("dark");
    toggleMode.classList.toggle("light");
    toggleMode.innerText = toggleMode.innerText === "Dark Mode" ? "Light Mode" : "Dark Mode";
})