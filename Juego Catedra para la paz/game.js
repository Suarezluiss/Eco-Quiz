const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter =  0;
let availableQuesions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript",
        choice1: "<Script>",
        choice2: "<JavaScript>",
        choice3: "<js>",
        choice4: "<Scripting>",
        answer: 1
    },
    {
        question: "What is te correct Syntax for referring to an external script called 'XXX.js?'",
        choice1: "<Script href= 'xxx.js'>",
        choice2: "<Script name= 'xxx.js'>",
        choice3: "<Script src= 'xxx.js'>",
        choice4: "<Script file= 'xxx.js'>",
        answer: 3
    },
    {
        question: "How do you write 'Hello world' in an alert box?",
        choice1: "msgBox('Hello world');",
        choice2: "alertBox ('Hello World');",
        choice3: "msg('Hello World')",
        choice4: "alert('Hello World')",
        answer: 4
    }

];

//Constants
const CORRECT_BONUS = 10;
const MAX_Questions = 3;

startGame = () => {
    questionCounter = 0;
    score = 0
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion ["choice" + number];

    });

    availableQuesions.splice(questionIndex, 1)

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("Click", e => {
        console.log(e.target);
    });
});


startGame ();