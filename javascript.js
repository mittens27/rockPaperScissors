playGame();

function playGame() {

    let playerScore = 0;
    let computerScore = 0;

    let roundCounter = 0;
    if (roundCounter <= 5) {
        const randomItem = getComputerChoice();
        const playerSelection = getPlayerChoice();

        console.log(playRound(playerSelection, randomItem));

        function getComputerChoice() {
            var items = ["rock", "paper", "scissors"];
            var randomNumber = Math.random();
            var randomIndex = randomNumber * items.length;
            var randomIndex = Math.floor(randomIndex);
            var randomItem = items[randomIndex];
            return randomItem;
        }
    
        function getPlayerChoice() {
            /* asks player for choice */
            let playerSelection = prompt("Do you choose rock, paper, or scissors?");
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                return playerSelection;
            } else {
                alert("Invalid choice. Please enter rock, paper, or scissors.");
                return getPlayerChoice();
            }
        }
    
        function playRound(playerSelection, randomItem) {
            roundCounter++;
            if (playerSelection === randomItem) {
                playerScore++;
                computerScore++;
                return "Game is a draw!"
            } else if (playerSelection === "paper") {
                return paper();
            } else if (playerSelection === "scissors") {
                return scissors();
            } else if (playerSelection === "rock") {
                return rock();
            }
            function rock() {
                if (randomItem === "paper") {
                    computerScore++;
                    return "Paper covers Rock. You lose!"
                } else if (randomItem === "scissors") {
                    playerScore++;
                    return "Rock smashes Scissors. You win!"
                }
            }
            function paper() {
                if (randomItem === "scissors") {
                    computerScore++;
                    return "Scissors cuts Paper. You lose!"
                } else if (randomItem === "rock") {
                    playerScore++;
                    return "Paper covers Rock. You win!"
                }
            }
            function scissors() {
                if (randomItem === "rock") {
                    computerScore++;
                    return "Rock smashes Scissors. You lose!"
                } else if (randomItem === "paper") {
                    playerScore++;
                    return "Scissors cuts Paper. You win!"
                }
            }
        }
    } else if (roundCounter == 5) {
        return (("Final Score: Player - ") + playerScore + (". ") + ("Computer - ") + computerScore ("."));
        }
    playGame();
}

