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