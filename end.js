var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");//local storage is always a string//
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
var MAX_HIGH = 5;










finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;//! means negative or opposite.//

})


function saveHighScore (event) {
    console.log("clicked the save button");
    event.preventDefault();
    var score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    
    highScores.sort( (a,b) => {
        return b.score-a.score;
    })//had lots of help wit this part from youtube.
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("index.html");
    console.log(highScores);
};