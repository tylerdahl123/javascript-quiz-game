var start = document.querySelector("#startBtn");
var Quiz = document.querySelector("#Quiz");
var question = document.querySelector("#theQuestions");
var aChoice = document.querySelector("#a");
var bChoice= document.querySelector("#b");
var cChoice = document.querySelector("#c");
var dChoice = document.querySelector("#d");
var userChoice= document.querySelector("#userChoice");
var answerChoices = document.querySelector("#choices");
var timer = document.getElementById("counter");
var timeGauge = document.getElementById("timeGuage");


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
const lastQuestion = questions.legnth -1;
let runningQuestion =0;
let count = 0;
const questionTime = 10;
const gaugeWidth =150;
const gaugeUnit= gaugeWidth / questionTime;
let TIMER;
let score=0;




function renderQuestion () {
    let q = questions[runningQuestion];

    question.innerHTML = "<p> Question " + (runningQuestion+1) + ": " + q.question +"</p>";
    aChoice.innerHTML=q.aChoice;
    bChoice.innerHTML=q.bChoice;
    cChoice.innerHTML=q.cChoice;
    dChoice.innerHTML=q.dChoice;
    answerChoices.style.display = "block";
}
start.addEventListener("click", startQuiz);
function startQuiz(){
start.style.display="none";
renderQuestion();
Quiz.style.display = "block";
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter,1000);
}

function renderProgress(){
    for(var qIndex = 0; qIndex<= lastQuestion; qIndex++){
        Progress.innerHTML +="<div class='prog' id ="+qindex+"></div>";
    }
}
function renderCounter(){
    if (count <= questionTime){
        count.innerHTML = count;
        timeGauge.style.width = count * guageUnit + "px";
        count ++
    }else{
        count = 0;
        answerIsWrong();
        if (runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else {
            cleartInterval(TIMER);
            scoreRender();
        }
    }
}



// start.addEventListener("click", )
// function start () {
//     // startBtn.setAttribute("style", "display: none");
//     displayQuestion();
//     // theQuiz.style.display="block";
// }