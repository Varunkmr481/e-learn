const fullStackDevelopmentQuiz = [
    {
        question: "What does MERN stack stand for?",
        options: ["MongoDB, Express.js, React.js, Node.js", "MySQL, Express.js, React.js, Node.js", "MongoDB, Ember.js, React.js, Node.js", "MySQL, Ember.js, React.js, Node.js"],
        correctAnswer: "MongoDB, Express.js, React.js, Node.js"
    },
    {
        question: "Which of the following is NOT a valid HTTP request method?",
        options: ["GET", "POST", "UPDATE", "DELETE"],
        correctAnswer: "UPDATE"
    },
    {
        question: "What is the purpose of JSX in React.js?",
        options: ["To define component state", "To render HTML elements in JavaScript", "To define CSS styles in JavaScript", "To handle asynchronous operations"],
        correctAnswer: "To render HTML elements in JavaScript"
    },
    {
        question: "Which of the following databases is commonly used in the MERN stack?",
        options: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
        correctAnswer: "MongoDB"
    },
    {
        question: "What role does Express.js play in the MERN stack?",
        options: ["Front-end framework", "Back-end framework", "Database management system", "CSS preprocessor"],
        correctAnswer: "Back-end framework"
    },
    {
        question: "What is the purpose of npm in Node.js development?",
        options: ["To manage project dependencies", "To write server-side code", "To create user interfaces", "To perform database operations"],
        correctAnswer: "To manage project dependencies"
    },
    {
        question: "What is the significance of RESTful APIs in full-stack development?",
        options: ["They enable communication between the client and server", "They manage database operations", "They handle user authentication", "They define user interfaces"],
        correctAnswer: "They enable communication between the client and server"
    },
    {
        question: "Which of the following is NOT a valid HTTP status code?",
        options: ["200 OK", "404 Not Found", "500 Internal Server Error", "300 Redirect"],
        correctAnswer: "300 Redirect"
    }
];

let currentQuestionIndex = 0;
let selectedAnswers = [];

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionButtons = document.querySelectorAll('.option-button');
    
    questionElement.textContent = fullStackDevelopmentQuiz[currentQuestionIndex].question;
    optionButtons.forEach((button, index) => {
        button.textContent = fullStackDevelopmentQuiz[currentQuestionIndex].options[index];
        button.classList.remove('selected');
    });

    if (selectedAnswers[currentQuestionIndex] !== undefined) {
        optionButtons[selectedAnswers[currentQuestionIndex]].classList.add('selected');
    }
}

function selectOption(optionIndex) {
    selectedAnswers[currentQuestionIndex] = optionIndex;
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => button.classList.remove('selected'));
    optionButtons[optionIndex].classList.add('selected');
}

function nextQuestion() {
    if (currentQuestionIndex < fullStackDevelopmentQuiz.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
        if (fullStackDevelopmentQuiz[index].options[answer] === fullStackDevelopmentQuiz[index].correctAnswer) {
            score++;
        }
    });
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your score is ${score} out of ${fullStackDevelopmentQuiz.length}`;
}

document.addEventListener('DOMContentLoaded', loadQuestion);
