const title      = document.getElementById("title");
const speed      = document.getElementById("speed");
let   speedText  = 300 / speed.value;
const text       = "We Love Programming!";
const characters = text.split("");
let   i          = 0;

writeText();

function writeText() {
    if (characters[i] == " ") {
            title.innerHTML += "&nbsp;";
            characters[i++];
    } else {
        title.innerHTML += characters[i++];
    }
    
    if (characters.length < i) {
        i = 0;
        title.innerHTML = "";
    }

    setTimeout(writeText, speedText)
}

speed.addEventListener('input', (e) => speedText = 300 / e.target.value)