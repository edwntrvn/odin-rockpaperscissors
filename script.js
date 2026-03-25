// Write the logic to get the computer choice.
// Your game will be played against the computer. You will write a function that randomly returns 
// “rock”, “paper” or “scissors”.

// Create a function that generates a random number between 1, 2, and 3 when executed
// If the function outputs 1, return "rock"
// Else if the function outputs 2, return "paper"
// Else if the function outputs 3, return "scissors"

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  if (computerChoice === 1) {
    return "rock";
  }

  else if (computerChoice === 2) {
    return "paper";
  }

  else {
    return "scissors";
  }
}



// Write the logic to get the human choice.
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a function that asks the user to input a number between 1, 2, and 3 when executed
// If the user inputs 1, return "Rock"
// Else if the user inputs 2, return "Paper"
// Else if the user inputs 3, return "Scissors"
// Return the user's input

function getHumanChoice() {
  let humanChoice = prompt("Choose a number between 1, 2, and 3");
  return parseInt(humanChoice);
}



// Declare the players score variables.
// Your game will keep track of the players score. You will write variables to keep track of the players score.

let computerScore = 0;
let humanScore = 0;



// Write the logic to play a single round.
// Your game will be played round by round. You will write a function that takes the human and computer player choices 
// as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.