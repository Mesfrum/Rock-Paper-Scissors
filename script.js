let playerScore = 0;
let computerScore = 0;
let round = 0;
let msg = 'Can you beat the computer?';

function updateInfo(msg, playerScore, computerScore, round) {
    document.getElementById('msg').textContent = msg;
    document.getElementById('player-score').textContent = `player score - ${playerScore}`;
    document.getElementById('computer-score').textContent = `computer score - ${computerScore}`;
    document.getElementById('round').textContent = `round - ${round}`;
}

function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissor'];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
};

function game(playerChoice) {
    let computerChoice = getComputerChoice();

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            msg = "You Win";
        }
        else {
            msg = "You Lose";
        }
        updateInfo(msg, playerScore, computerScore, round);
        return 0;
    }
    // DRAW
    if (playerChoice === computerChoice) {
        msg = ("The game is a DRAW!! You both choose " + playerChoice + "!");
    }
    // Player WIN
    else if ((playerChoice === "rock" && computerChoice === "scissor") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissor" && computerChoice === "paper")) {
        msg = ("You WIN!! You choose " + playerChoice + " and Computer chose " + computerChoice + ".");
        playerScore++;
    }
    // PLAYER LOSE
    else {
        msg = ("You LOSE!! You choose " + playerChoice + " and Computer chose " + computerChoice + ".");
        outcome = -1
        computerScore++;
    }
    round++;
    updateInfo(msg, playerScore, computerScore, round);
};

document.getElementById('rock').addEventListener('click', () => {
    game('rock');
});
document.getElementById('paper').addEventListener('click', () => {
    game('paper');
});
document.getElementById('scissor').addEventListener('click', () => {
    game('scissor');
});

document.getElementById('new-game').addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    msg = 'Can you beat the computer?';
    updateInfo(msg, playerScore, computerScore, round);
});