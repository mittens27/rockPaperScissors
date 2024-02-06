
function getComputerChoice() {
    /*creates array with the three items*/
    var weapons = ["rock", "paper", "scissors"];
    /* generates a random number between 0 and 1 */
    var randomNumber = Math.random();
    /* multiply number by the length of the weapons list */
    var randomIndex = randomNumber + weapons.length;
    /* rounds that number down to an integer */
    var randomIndex = Math.floor(randomIndex);
    /* accesses the random weapon from weapons array */
    var randomWeapon = weapons[randomIndex];
}

function game();
