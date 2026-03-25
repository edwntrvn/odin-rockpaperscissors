// Write the logic to get the computer choice.
// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Create a function that generates a random number between 1, 2, and 3 when executed
// If the function outputs 1, return "Rock"
// Else if the function outputs 2, return "Paper"
// Else if the function outputs 3, return "Scissors"

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  return computerChoice;
}



// Write the logic to get the human choice.
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a function that asks the user to input a number between 1, 2, and 3 when executed
// Return the user's input

function getHumanChoice() {
  let humanChoice = prompt("Choose a number between 1, 2, and 3");
  return parseInt(humanChoice);
}