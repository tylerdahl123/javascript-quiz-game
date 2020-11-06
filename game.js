const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("Score");
var start = document.getElementsByClassName("btn-start");
var counter = document.getElementById("counter");
let questions = [
    {
    question: "Who was Sarpedon's father in the Iliad?",
    choice1: "Poseidon",
    choice2: "Hephaestus",
    choice3: "Zeus",
    choice4: "Ares",
    answer: 3
},
{
    question: "Who killed Patroclus at the battle of Troy?",
    choice1: "Paris",
    choice2: "Prium",
    choice3: "Agamemnon",
    choice4: "Hector",
    answer: 4
},
{
    question: "Where was Menelaus from?",
    choice1: "Sparta",
    choice2: "Corinth",
    choice3: "Athens",
    choice4: "Thebes",
    answer: 1
},
];


const CORRECT_BONUS = 5;//this is used to record how many points for a correct answer they get
const MAX_QUESTIONS = 4;//this is used to determinet he max number of questions the quiz will ask before declaring it over. 


var count = 60;
var interval = setInterval(function(){
  document.getElementById('counter').innerHTML=count;
  count--;
counter.style.display = "block";
  if (count === 0){
    clearInterval(interval);
    // document.getElementById('count').innerHTML="00:" + sec;
    // or...
    alert("You're out of time!");
    return window.location.assign("index.html");
  }
}, 1000);
console.log(interval);



function startGame() {
    questionCounter = 0;
    score =0;
    availableQuestions = [...questions];//...spreads out the array so that it will use what is inside questions to populate the new array i.e. avaiable questions. this gets a full copy of each arrays and not just a one off  
    console.log(availableQuestions);
    getNewQuestion();
    // startTimer();
}

 function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("end.html");
      }
    questionCounter++;
    questionCounterText.innerHTML = questionCounter + "/" + MAX_QUESTIONS;
;

     const questionIndex= Math.floor(Math.random() * availableQuestions.length);
     currentQuestion =availableQuestions[questionIndex];
     question.innerText = currentQuestion.question;

choices.forEach( function(choice) {
    const number = choice.dataset["number"];
    choice.innerText= currentQuestion["choice" + number];
});

availableQuestions.splice(questionIndex, 1);
acceptingAnswers=true;


};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        // console.log(e.target);//allows me to get a reference of which choice they clicked so i can check for right and wrong answers.
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        var classToApply = "incorrect";
        if (classToApply == "incorrect"){
            count-5;  }//so by setting the default answer to incorrect i can avoid a bunch of if else statements but just seeing if my selected answer equals the answer i have in my questions array...if it does it changes the class to correct.
        if (selectedAnswer == currentQuestion.answer){
            classToApply = "correct";
        }
        if (classToApply == "correct") {
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);


        setTimeout (function() {
         selectedChoice.parentElement.classList.remove(classToApply);
         getNewQuestion();
         
        }, 1000);// sets a timer for the over all question...it takes a second for it to move on to the next page.
        
        console.log(classToApply);//it can compare if its true or false//
        
    })
})

    function incrementScore(num) {
        score +=num;
        scoreText.innerText= score;
    }

startGame();
