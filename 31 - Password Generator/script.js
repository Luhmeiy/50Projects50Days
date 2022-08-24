const generated  = document.getElementById("generated");
const generate   = document.getElementById("generate");
const copy       = document.getElementById("copy");
let   result     = "";
let   characters = ""

// Inputs
const pLength   = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers   = document.getElementById("numbers");
const symbols   = document.getElementById("symbols");

// Characters, Numbers and Symbols
const lUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lLowercase = "abcdefghijklmnopqrstuvwxyz";
const lNumbers   = "0123456789";
const lSymbols   = "!@#$%^&*(){}[]=<>/,.";

generate.addEventListener('click', () => {
    characters += uppercase.checked ? lUppercase : "";
    characters += lowercase.checked ? lLowercase : "";
    characters += numbers.checked ? lNumbers : "";
    characters += symbols.checked ? lSymbols : "";

    const charactersLength = characters.length;
    for (let i = 0; i < pLength.value; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    generated.innerText = result;
    result     = ""
    characters = ""
})

copy.addEventListener('click', () => {
    if (!generated.innerText) return;
    navigator.clipboard.writeText(generated.innerText);
    alert("Password copied to clipboard!");
})