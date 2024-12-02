// script.js
const questions = [
    {
        question: "Jak nazywał się pies felixa?",
        options: ["1.Puszek", "2.Rufus", "3.Caban", "4.Nie było nanpisane"],
        answer: "3.Caban"
    },
    {
        question: "Jak nazywał się dyrektor szkoły, do której uczęszczali bohaterowie?",
        options: ["1.Stefan Jamnik", "2.Juliusz Stokrota", "3.Konstancja Konstantynopolska", "4.Michalina Małolepsza"],
        answer: "2.Juliusz Stokrota"
    },
    {
        question: "Kogo spotkała Nika gdy na stoku rozpędzona wjechała w las?",
        options: ["1.Niedzwiedzia brunatnego", "2.Niedźwiedzia Albinosa", "3.Lisa polarnego", "4.Łosia"],
        answer: "2.Niedźwiedzia Albinosa"
    },
    {
        question: "Jak brzmiało nazwisko Neta?",
        options: ["1.Polon", "2.Mickiewicz", "3.Gong", "4.Bielecki"],
        answer: "4.Bielecki"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    nextButton.disabled = false; // Allow to go to the next question
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").classList.remove("hidden");
    resultElement.classList.add("hidden");
    loadQuestion();
    nextButton.disabled = true;
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

loadQuestion();  // Load the first question


