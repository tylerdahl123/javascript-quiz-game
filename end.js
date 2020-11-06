var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;//! means negative or opposite.//

})


function saveHighScore (event) {
    console.log("clicked the save button");
    event.preventDefault();
}