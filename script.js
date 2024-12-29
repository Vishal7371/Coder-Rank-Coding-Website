const startButton = document.getElementById('startQuiz');
const restartButton = document.getElementById('restartQuiz');
const homepage = document.getElementById('homepage');
const quizPage = document.getElementById('quizPage');
const resultPage = document.getElementById('resultPage');
const questionEl = document.getElementById('question');
const options = document.querySelectorAll('.option');
const timerBar = document.getElementById('timerBar');
const scoreEl = document.getElementById('score');

let currentQuestion = 0;
let score = 0;
let quizData = []; 


const scienceQuizData = [
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: 2,
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "H2"],
        answer: 1,
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        answer: 2,
    },
    {
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: 2,
    },
    {
        question: "Who developed the theory of evolution?",
        options: ["Albert Einstein", "Isaac Newton", "Charles Darwin", "Galileo Galilei"],
        answer: 3,
    },
];

const mathQuizData = [
    {
        question: "What is 5 + 5?",
        options: ["8", "10", "15", "20"],
        answer: 2,
    },
    {
        question: "What is the square of 3?",
        options: ["6", "9", "12", "16"],
        answer: 2,
    },
    {
        question: "What is 12 ÷ 4?",
        options: ["3", "2", "4", "6"],
        answer: 1,
    },
    {
        question: "What is the value of π (Pi)?",
        options: ["3.14", "3.15", "3.141", "3.1415"],
        answer: 4,
    },
    {
        question: "What is 7 × 6?",
        options: ["42", "36", "48", "56"],
        answer: 1,
    },
];

const generalQuizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 3,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "Shakespeare", "J.K. Rowling", "Charles Dickens"],
        answer: 2,
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        answer: 3,
    },
    {
        question: "What is the national sport of Japan?",
        options: ["Sumo", "Baseball", "Football", "Basketball"],
        answer: 1,
    },
    {
        question: "Which country is the largest by area?",
        options: ["Canada", "United States", "Russia", "China"],
        answer: 3,
    },
];


document.getElementById('scienceQuiz').addEventListener('click', () => {
    quizData = scienceQuizData;
    startQuiz();
});

document.getElementById('mathQuiz').addEventListener('click', () => {
    quizData = mathQuizData;
    startQuiz();
});

document.getElementById('generalQuiz').addEventListener('click', () => {
    quizData = generalQuizData;
    startQuiz();
});

restartButton.addEventListener('click', () => {
    resultPage.classList.add('hidden');
    homepage.classList.remove('hidden');
    currentQuestion = 0;
    score = 0;
});

function startQuiz() {
    homepage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    questionEl.textContent = questionData.question;
    questionEl.classList.add('slide-in');
    options.forEach((option, index) => {
        option.textContent = questionData.options[index];
        option.onclick = () => handleAnswer(index + 1);
    });
    resetTimer();
    setTimeout(() => questionEl.classList.remove('slide-in'), 500);
}

function handleAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function resetTimer() {
    timerBar.style.width = '100%';
    setTimeout(() => {
        if (currentQuestion < quizData.length) {
            handleAnswer(5); 
        }
    }, 25000);
}

function showResults() {
    quizPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    scoreEl.textContent = score;
}
