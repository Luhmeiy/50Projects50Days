const form    = document.getElementById("todo-container");
const input   = document.getElementById("todo-input");
const todosEl = document.querySelector(".todos");
const todos   = JSON.parse(localStorage.getItem("todos"));

if (todos) for (const todo of todos) addTodo(todo);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();

    input.value = "";
})

function addTodo(todo) {
    let todoText = input.value;

    if (todo) todoText = todo.text;

    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.classList.add("todo");

        if(todo && todo.done) todoEl.classList.add("done");

        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle("done");
            updateLS();
        }) 

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        }) 

        todosEl.appendChild(todoEl);
        updateLS();
    }
}

function updateLS() {
    const todsEl = document.querySelectorAll("li");
    const todos  = [];

    for (const todoEl of todsEl) {
        todos.push({
            text: todoEl.innerText,
            done: todoEl.classList.contains("done")
        })
    }

    localStorage.setItem('todos', JSON.stringify(todos));
}