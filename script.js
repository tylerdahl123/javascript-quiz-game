var startBtn = document.querySelector("#startBtn");
var theQuiz = document.querySelector("#theQuiz");
var question = document.querySelector("#theQuestions");
var aChoice = document.querySelector("#a");
var bChoice= document.querySelector("#b");
var cChoice = document.querySelector("#c");
var dChoice = document.querySelector("#d");
var userChoice= document.querySelector("#userChoice");
var answerChoices = document.querySelector("#answerChoices");



let questions = [{
        question: "Who was Sarpedon's father in the Iliad?",
        aChoice: "Poseidon",
        bChoice: "Hephaestus",
        cChoice: "Zeus",
        dChoice: "Ares",
        correctAnswer: "c"
    },
    {
        question: "Who killed Patroclus at the battle of Troy?",
        aChoice: "Paris",
        bChoice: "Prium",
        cChoice: "Agamemnon",
        dChoice: "Hector",
        correctAnswer: "d",
    },
    {
        question: "Where was Menelaus from?",
        aChoice: "Sparta",
        bChoice: "Corinth",
        cChoice: "Athens",
        dChoice: "Thebes",
        correctAnswer: "a",
    },
];

var questionArray =0;
userChoice.style.display="none";
function displayQuestion () {
    var q = questions[questionArray];
    question.innerHTML = "<p> Question " + (questionArray+1) + ": " + q.question +"</p>";
    aChoice.innerHTML=q.aChoice;
    bChoice.textContent=q.bChoice;
    cChoice.textContent=q.cChoice;
    dChoice.textConent=q.dChoice;
    answerChoices.style.display = "block";
}


function start () {
    // startBtn.setAttribute("style", "display: none");
    displayQuestion();
    // theQuiz.style.display="block";
}