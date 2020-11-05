var start = document.querySelector("#startBtn");
var Quiz = document.querySelector("#Quiz");
var question = document.querySelector("#theQuestions");
var aChoice = document.querySelector("#a");
var bChoice= document.querySelector("#b");
var cChoice = document.querySelector("#c");
var dChoice = document.querySelector("#d");
var userChoice= document.querySelector("#userChoice");
var choiceResponse=document.querySelector("#choiceResponse");
var answerChoices = document.querySelector("#choices");
var timer = document.querySelector("#counter");
var timeGauge = document.querySelector("#timeGuage");
var progress = document.querySelector("#progress");
var scoreDiv = document.querySelector("#scoreContainer");
var userScore = JSON.parse(localStorage.getItem(userScore));
var highScore = JSON.parse(localStorage.getItem(highScore));
var highDiv= document.querySelector("#highScoreContainer");


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
const lastQuestion = questions.length -1;
let runningQuestion =0;
let count = 0;
const questionTime = 10;
const gaugeWidth =150;
const gaugeUnit= gaugeWidth / questionTime;
// let TIMER;
let score=0;
var highScore = 0;



function renderQuestion () {
    choiceResponse.style.display="none";
    let q = questions[runningQuestion];

    question.innerHTML = "<p> Question " + (runningQuestion+1) + ": " + q.question +"</p>";
    aChoice.innerHTML=q.aChoice;
    bChoice.innerHTML=q.bChoice;
    cChoice.innerHTML=q.cChoice;
    dChoice.innerHTML=q.dChoice;
    answerChoices.style.display = "block";
}


start.addEventListener("click", startQuiz);
(function() {
    var sec = 60;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
                return;
            }
            if (answerIsWrong){
                let a = 5;
                timer=-a;
            }
        }, 1000);
    }
    // document.getElementById('incorrect').addEventListener('click', function() {
    //     sec -= 5;
    //     document.getElementById('timerDisplay').innerHTML='00:'+sec;
    // });
    startTimer();
})();


function startQuiz(){
start.style.display="none";
renderQuestion();
Quiz.style.display = "block";
renderProgress();
// renderCounter();
// TIMER = setInterval(renderCounter,1000);
}


function renderProgress(){
    for(let qIndex = 0; qIndex < lastQuestion; qIndex++){
        progress.innerHTML +="<div class='prog' id ="+qIndex+"></div>";
    }
}


// function renderCounter(){
//     if (count <=questionTime){
//         counter.innerHtml = count;
//         timeGauge.style.width = count * gaugeUnit + "px";
//         count ++
//     }else{
//         count = 0;
//         answerIsWrong();
//         if(runningQuestion < lastQuestion){
//             runningQuestion ++;
//             renderQuestion();
//         }else{
//             clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// }
function check(answer){
    if (answer == questions[runningQuestion].correctAnswer){
        userScore++;
        answerIsCorrect();
    }else {
        answerIsWrong();
    
    }
    count = 0; 
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(timer);
        scoreRender();
        localStorage.setItem("userScore",userScore);
        localStorage.setItem("highScore", highScore);
    }
}

function answerIsCorrect(){
    alert("You are Correct!");
}
function answerIsWrong(){
    alert("SORRY!");
}

function scoreRender(){
    // score = JSON.parse(localStorage.getItem(userScore));
    Quiz.style.display="none";
    scoreDiv.style.display="block";
    highDiv.style.display="block";
    scoreDiv.innerHTML = "<p>SCORE: " + userScore + " out of 10</p>";
    highDiv.innerHTML= "<p> PREVIOUS HIGH SCORE: " + highScore + " !";
    if (userScore > highScore){
        userScore.append(highScore);
        console.log(highScore);
    }
    // const scorePerCent = Math.round(100 * score/questions.length);
    
}

// start.addEventListener("click", )
// function start () {
//     // startBtn.setAttribute("style", "display: none");
//     displayQuestion();
//     // theQuiz.style.display="block";
// }