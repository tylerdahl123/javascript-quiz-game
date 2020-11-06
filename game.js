const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

let questions = [{
    question: "Who was Sarpedon's father in the Iliad?",
    Choice1: "Poseidon",
    Choice2: "Hephaestus",
    Choice3: "Zeus",
    Choice4: "Ares",
    answer: 3
},
{
    question: "Who killed Patroclus at the battle of Troy?",
    Choice1: "Paris",
    Choice2: "Prium",
    Choice3: "Agamemnon",
    Choice4: "Hector",
    answer: 4
},
{
    question: "Where was Menelaus from?",
    Choice1: "Sparta",
    Choice2: "Corinth",
    Choice3: "Athens",
    Choice4: "Thebes",
    answer: 1
},
];

//constants
const CORRECT_BONUS = 5;//this is used to record how many points for a correct answer they get
const MAX_QUESTIONS = 3;//this is used to determinet he max number of questions the quiz will ask before declaring it over. 

function startGame() {
    questionCounter = 0;
    score =0;
    availableQuestions = [...questions];//...spreads out the array so that it will use what is inside questions to populate the new array i.e. avaiable questions. this gets a full copy of each arrays and not just a one off  
    console.log(availableQuestions);
    getNewQuestion();
}
function getNewQuestion(){
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);// the length is always going to change thats why we set the random numbers to be equal to the length of how many questions are left.
    currentQuestion = availableQuestions[questionIndex];
    question.innerText=currentQuestion.question;
}
startGame();