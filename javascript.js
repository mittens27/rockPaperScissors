getComputerChoice();
getPlayerChoice();
const randomWeapon = getComputerChoice();
const playerSelection = getPlayerChoice();

console.log(playRound(playerSelection, randomWeapon));
function getComputerChoice() {
    /*creates array with the three items*/
    var weapons = ["rock", "paper", "scissors"];
    /* generates a random number between 0 and 1 */
    var randomNumber = Math.random();
    /* multiply number by the length of the weapons list */
    var randomIndex = randomNumber * weapons.length;
    /* rounds that number down to an integer */
    var randomIndex = Math.floor(randomIndex);
    /* accesses the random weapon from weapons array */
    var randomWeapon = weapons[randomIndex];
    return randomWeapon;
}

function getPlayerChoice() {
    /* asks player for choice */
    /*let playerSelection = prompt("Do you choose rock, paper, or scissors?");*/
    /* converts choice to lowercase */
    let playerSelection = "rock"
    playerSelection = playerSelection.toLowerCase();
    /* eliminates invalid answers */
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        /* calls function again to re-ask player selection */
        return getPlayerChoice();
    }
}

function playRound(playerSelection, randomWeapon) {
    if (playerSelection === randomWeapon) {
        return "Game is a draw!"
    } else if (playerSelection === "paper") {
        return paper();
    } else if (playerSelection === "scissors") {
        return scissors();
    } else if (playerSelection === "rock") {
        return rock();
    }
    function rock() {
        if (randomWeapon === "paper") {
            return "Paper covers Rock. You lose!"
        } else if (randomWeapon === "scissors") {
            return "Rock smashes Scissors. You win!"
        }
    }
    function paper() {
        if (randomWeapon === "scissors") {
            return "Scissors cuts Paper. You lose!"
        } else if (randomWeapon === "rock") {
            return "Paper covers Rock. You win!"
        }
    }
    function scissors() {
        if (randomWeapon === "rock") {
            return "Rock smashes Scissors. You lose!"
        } else if (randomWeapon === "paper") {
            return "Scissors cuts Paper. You win!"
        }
    }
}