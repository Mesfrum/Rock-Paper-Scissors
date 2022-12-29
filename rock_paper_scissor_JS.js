function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10 + 1);
    // console.log(computerChoice);
    if (computerChoice < 3) {
        return "rock";
    }
    else if (computerChoice < 6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function validatePlayerChoice(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return true;
    }
    else {
        return false;
    }
}
function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock Paper OR Scissors - ");
    if (validatePlayerChoice(playerChoice)) {
        return playerChoice.toLowerCase();
    }
    else {
        alert("Choose only rock paper or scissors!");
        getPlayerChoice();
    }
}

function game(playerChoice, computerChoice) {
    let outcome = 0;
    // DRAW
    if (playerChoice === computerChoice) {
        alert("The game is a DRAW!! You both choose " + playerChoice + "!");
    }
    // Player WIN
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        alert("You WIN!! You choose " + playerChoice + " and Computer chose " + computerChoice + ".");
        outcome = 1;
    }
    // PLAYER LOSE
    else {
        alert("You LOSE!! You choose " + playerChoice + " and Computer chose " + computerChoice + ".");
        outcome = -1
    }
    return outcome;
}

let computerScore = 0;
let playerScore = 0;
for (let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (playerChoice === null) {
        console.log("Ok");
    }
    let score = game(playerChoice, computerChoice);
    if (score === 1) {
        playerScore++;
    }
    else if (score === -1) {
        computerScore++;
    }
    console.group("SCOREBOARD");
    console.log("player score - " + playerScore);
    console.log("computer score - " + computerScore);
    console.groupEnd();
}

if (playerScore > computerScore) {
    console.log("YOU WIN!!!");
}
else if (playerScore < computerScore) {
    console.log("YOU LOSE!!!");
}
else {
    console.log("IT IS A DRAW -_-");
}