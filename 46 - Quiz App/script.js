const quizContainer = document.querySelector(".quiz-container");
const question = document.getElementById("question");
const answers  = document.querySelectorAll(".answer");
const answerA  = document.getElementById("answer-a");
const answerB  = document.getElementById("answer-b");
const answerC  = document.getElementById("answer-c");
const answerD  = document.getElementById("answer-d");
const submit   = document.querySelector(".submit");

let score   = 0;
let counter = 0;

fetchData();

submit.addEventListener('click', () => {
    const answer = selected();

    if (answer) {
        counter++;
        fetchData(answer);
        deselect();
    }
})

function fetchData(answer) {
    fetch('./answers.json')
        .then((response) => response.json())
        .then((data) => {
            if (counter > 0 && counter < 5) {
                if (answer === data[counter-1].correct) score++;
            }

            if (counter < 4) {
                question.innerText = data[counter].question;
                answerA.innerText  = data[counter].a;
                answerB.innerText  = data[counter].b;
                answerC.innerText  = data[counter].c;
                answerD.innerText  = data[counter].d;
            } else {
                quizContainer.innerHTML = `<h2>You answered ${score}/4 questions correctly</h2>
                <button class="reload">Reload</button>`;

                const reload = document.querySelector(".reload");

                reload.addEventListener('click', () => window.location.reload());
            }
        });
}

function selected() {
    let selectedAnswer;

    for (const answer of answers) {
        if (answer.checked) selectedAnswer = answer.id;
    }

    return selectedAnswer;
}

function deselect() {
    for (const answer of answers) answer.checked = false;
}