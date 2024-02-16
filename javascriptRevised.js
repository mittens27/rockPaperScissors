const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', playRound);

paperBtn.addEventListener('click', playRound);

scissorsBtn.addEventListener('click', playRound);

const userChoices = document.querySelector('#userChoices');
const compChoices = document.querySelector('#compChoices');

const results = document.querySelector('#results');

const scoreUser = document.querySelector('#userScore');
const scoreComp = document.querySelector('#compScore');


var outcomes = {
    rock: {
      rock: "It's a tie!",
      paper: "You lose!",
      scissors: "You win!"
    },
    paper: {
      rock: "You win!",
      paper: "It's a tie!",
      scissors: "You lose!"
    },
    scissors: {
      rock: "You lose!",
      paper: "You win!",
      scissors: "It's a tie!"
    }
  };

/*var rounds = 5;*/
var userScore = 0;
var computerScore = 0;

/*for (var i = 1; i <= rounds; i++) {*/
function playRound() {

    var userChoice;

    if (event.target.id === "rockBtn") {
        userChoice = "rock";
    } else if (event.target.id === "paperBtn") {
        userChoice = "paper";
    } else if (event.target.id === "scissorsBtn") {
        userChoice = "scissors";
    }



    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    if (userChoice === "rock" && computerChoice === "scissors") {
        userScore++;
    } else if (userChoice === "rock" && computerChoice === "paper") {
        computerScore++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        userScore++;
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        userScore++;
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
    }

    userChoices.textContent = ("You chose: " + userChoice);
    compChoices.textContent = ("The computer chose: " + computerChoice);
    var outcome = outcomes[userChoice][computerChoice];
    results.textContent = (outcome);
    scoreUser.textContent = ("Player Score - " + userScore);
    scoreComp.textContent = ("Computer Score - " + computerScore);
    /*console.log("Round " + i + ": You have " + userScore + " points, and the computer has " + computerScore + " points.");*/
}


