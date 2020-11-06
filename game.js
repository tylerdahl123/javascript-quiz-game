const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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
const MAX_QUESTIONS = 3;//this is used to determinet he max number of questions the quiz will ask before declaring it over. 

function startGame() {
    questionCounter = 0;
    score =0;
    availableQuestions = [...questions];//...spreads out the array so that it will use what is inside questions to populate the new array i.e. avaiable questions. this gets a full copy of each arrays and not just a one off  
    console.log(availableQuestions);
    getNewQuestion();
}
 function getNewQuestion() {
    questionCounter++;
     const questionIndex= Math.floor(Math.random() * availableQuestions.length);
     currentQuestion =availableQuestions[questionIndex];
     question.innerText = currentQuestion.question;

choices.forEach( function(choice) {
    const number = choice.dataset["number"];
    choice.innerText= currentQuestion["choice" + number];
})


}

    

startGame();