const question = document.querySelector("#question");
const choices = Array.from(document.querySelector(".choice - text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [{
        question: "what is 2 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: 2,
    },
    {
        question: "what is 2 + 8?",
        choice1: "2",
        choice2: "4",
        choice3: "10",
        choice4: "7",
        answer: 3,
    },
    {
        question: "what is 2 + 5?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "7",
        answer: 4,
    },
    {
        question: "what is 2 + 3?",
        choice1: "5",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: 1,
    },
    {
        question: "what is 2 + 1?",
        choice1: "2",
        choice2: "4",
        choice3: "3",
        choice4: "17",
        answer: 3,
    }
]

const SCORE_POINT = 100
const MAX_QUESTIONS = 5


startGame = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign('/end.html')
    }
}
questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width = '${(questionCounter/Max_Questions) * 100}%'

const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = acceptingAnswers[questionsIndex]
question.innerText = currentQuestion.question


choice.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})


availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
    })
})