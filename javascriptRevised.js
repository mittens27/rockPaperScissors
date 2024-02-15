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

var rounds = 5;
var userScore = 0;
var computerScore = 0;

for (let i = 0; i <= rounds; i++);

    var userChoice = prompt("Do you choose rock, paper, or scissors?");
    userChoice = userChoice.toLowerCase();

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
    console.log("You chose: " + userChoice);
    console.log("The computer chose: " + computerChoice);
    var outcome = outcomes[userChoice][computerChoice];
    console.log(outcome);
    console.log("Round " + i + ": You have " + userScore + " points, and the computer has " + computerScore + " points.");


