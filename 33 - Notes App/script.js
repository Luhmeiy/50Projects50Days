const add      = document.getElementById("add");
const notes    = document.querySelector(".notes");
let   counter  = 0;
var   texts    = texts || [];

add.addEventListener('click', () => {
    let textareas = document.querySelectorAll("#textarea");

    for (let y = 0; y <= textareas.length-1; y++) {
        texts[textareas[y].parentElement.id] = !textareas[y].value ? texts[textareas[y].parentElement.id] : textareas[y].value;
    }

    notes.innerHTML += `<div class="note" id="${counter}">
        <div class="nav">
            <button id="edit">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button id="delete">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
        <div class="main hidden">
            <p></p>
        </div>
        <textarea id="textarea"></textarea>
    </div>`;

    counter++;
    const edits    = document.querySelectorAll("#edit");
    const delNotes = document.querySelectorAll("#delete");

    textareas = document.querySelectorAll("#textarea");

    for (let y = 0; y <= textareas.length-1; y++) {
        textareas[y].value = texts[y] || '';
    }

    for (const edit of edits) {
        edit.addEventListener('click', () => {
            const i = edit.parentElement.parentElement.id;

            const textarea = edit.parentElement.nextElementSibling.nextElementSibling;
            const main     = edit.parentElement.nextElementSibling;

            const textareaValue = textarea.value;
            const mainValue     = main.innerText;

            texts[i] = !textareaValue ? '' : textareaValue;

            textarea.value = texts[i];
            main.innerHTML = `<p>${texts[i]}</p>`;

            textarea.classList.toggle("hidden");
            main.classList.toggle("hidden");
        })
    }

    for (const delNote of delNotes) {
        delNote.addEventListener('click', () => {
            delNote.parentElement.parentElement.remove();
        })
    }
})