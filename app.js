var userChoice = undefined;
var compChoice = undefined;

var userScore = 0;
var compScore = 0;

function game(userChoice){
    this.userChoice = userChoice;
    compChoice = getComputerSelect();
    determineWin(userChoice, compChoice);
}

function determineWin(userChoice, compChoice){
    var choiceCombo = userChoice+"-"+compChoice;
    switch(choiceCombo){
        case "ROCK-SCISSORS":
        case "PAPER-ROCK":
        case "SCISSORS-PAPER":
            userScore++;
            updateScoreboard("YOU WIN!");
            break;
        case "ROCK-PAPER":
        case "PAPER-SCISSORS":
        case "SCISSORS-ROCK":
            compScore++;
            updateScoreboard("YOU LOSE!");
            break;
        default: 
            updateScoreboard("ITS A TIE!");
            break;
    }
}

function updateScoreboard(gameMessage){
    document.getElementById("game-message").innerText = gameMessage;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = compScore;
    document.getElementById("game-choices").innerText = "You selected : " + userChoice + " \t \nComputer selected: " + compChoice;
}

function getComputerSelect(){
    choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * 3)];
}