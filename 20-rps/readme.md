// Rock Paper Scissors Console Game
// 2 Players => human, computer
// 3 weapons => rock, paper, scissors
// roundss => winner, loser

// plan
// console game
// human input => weapon of choice
// computer choice => weapon of choice
// process
// output => winner
// Pseudocode
// 1. Get input of human player using prompt method
// 2. Store the human input in a variable
// 3. Get the weapon of computer
// 4. Create a function that generates random weapon of choice for computer => 'rock', 'paper', 'scissors'
// 5. Store the computer weapon in a variable
// 6. Create a function that takes two parameters (playerWeapon, computerWeapon)
// 7. Process the weapons to find out the winner

function getComputerSelection() {
const weapons = ["rock", "paper", "scissors"];
const randomIndex = Math.round(Math.random() \* (weapons.length - 1));

return weapons[randomIndex];
}

// if the weapons are the same, return "tie"
// if the playerWeapon is a rock and the computer weapon is a scissors, ruturn "You Win";
// if the playerWeapon is a paper and the computer weapon is a rock, return "You Win"
// if the playerWeapon is a scissors and the computer weapon is a paper, return "You Win"
// else return "You lose"
function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
return "tie";
} else if (
(playerSelection === "rock" && computerSelection === "scissors") ||
(playerSelection === "paper" && computerSelection === "rock") ||
(playerSelection === "scissors" && computerSelection === "paper")
) {
return "YOU WIN";
} else {
return "YOU LOSE";
}
}
function game() {
for (let i = 0; i < 3; i++) {
const playerSelection = prompt("type your weapon!");
const computerSelection = getComputerSelection();

    console.log(playRound(playerSelection, computerSelection));

}
}
game();
