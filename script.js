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
    console.log("The computer picked rock!");
    return "rock";
  }

  else if (computerChoice === 2) {
    console.log("The computer picked paper!");
    return "paper";
  }

  else {
    console.log("The computer picked scissors!");
    return "scissors";
  }
}



// Write the logic to get the human choice.
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a function that asks the user to input "rock", "paper", or "scissors" when executed
// If the user inputs "rock", return "rock"
// Else if the user inputs "paper", return "paper"
// Else if the user inputs "scissors", return "scissors"

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors!").toLowerCase();
  if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    console.log(`You picked ${humanChoice}!`)
    return humanChoice;
  }
}



// Declare the players score variables.
// Your game will keep track of the players score. You will write variables to keep track of the players score.

let computerScore = 0;
let humanScore = 0;



// Write the logic to play a single round.
// Your game will be played round by round. You will write a function that takes the human and computer player choices 
// as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.



// Create a function that takes the user choice and the computer choice, and compares the two against each other

// If both choices are the same, then it's a tie--tell the user to try again

// If both choices are different, evaluate them against each other

  // If the user picked ROCK and the computer picked SCISSORS
  // Add 1 to the user's score and tell the user that they've won

  // Else if the user picked ROCK and the computer picked PAPER
  // Add 1 to the computer's score and tell the user that they've lost

  // Else if the user picked PAPER and the computer picked ROCK
  // Add 1 to the user's score and tell the user that they've won

  // Else if the user picked PAPER and the computer picked SCISSORS
  // Add 1 to the computer's score and tell the user that they've lost

  // Else if the user picked SCISSORS and the computer picked PAPER
  // Add 1 to the user's score and tell the user that they've won

  // Else if the user picked SCISSORS and the computer picked ROCK
  // Add 1 to the computer's score and tell the user that they've lost

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  function playRound(humanMove, computerMove) {
    if (humanMove === computerMove) {
      console.log("It's a tie; try again!");
    }

    else {
      if (humanMove === "rock" && computerMove === "scissors") {
        humanScore += 1;
        console.log("You've won this round!");
        console.log(`The score is now\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
      }

      else if (humanMove === "rock" && computerMove === "paper") {
        computerScore += 1;
        console.log("You've lost this round!");
        console.log(`The score is now\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
      }

      else if (humanMove === "paper" && computerMove === "rock") {
        humanScore += 1;
        console.log("You've won this round!");
        console.log(`The score is now\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
      }

      else if (humanMove === "paper" && computerMove === "scissors") {
        computerScore += 1;
        console.log("You've lost this round!");
        console.log(`The score is now\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
      }

      else if (humanMove === "scissors" && computerMove === "paper") {
        humanScore += 1;
        console.log("You've won this round!");
        console.log(`The score is now\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
      }

      else {
        computerScore += 1;
        console.log("You've lost this round!");
        console.log(`The score is now\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
      }
    }
  }

  playRound(humanSelection, computerSelection);