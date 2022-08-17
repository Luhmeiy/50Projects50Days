const empties = document.getElementsByClassName("empty");
const dragged = document.querySelector(".drag");

dragged.addEventListener('dragstart', dragStart);
dragged.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', drop);
}

function dragStart() {
    setTimeout(() => this.className = "invisible", 0);
}

function dragEnd() {
    this.className = "drag";
}

function dragEnter() {
    this.classList.add("hovered");
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave() {
    this.classList.remove("hovered");
}

function drop() {
    this.classList.remove("hovered");
    this.append(dragged);
}