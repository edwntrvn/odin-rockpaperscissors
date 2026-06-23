function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "rock";
  }

  else if (Math.floor(Math.random() * 3) === 1) {
    return "paper";
  }

  else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose rock, paper, or scissors!");
}

let computerScore = 0;
let humanScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice()

function playRound(computerChoice, humanChoice) {
  // If the player and the computer make the same choice, it's a draw
  if (computerChoice === humanChoice.toLowerCase()) {
    console.log(`You chose ${humanSelection.toLowerCase()}.`);
    console.log(`The computer chose ${computerSelection}.`);
    console.log("It's a draw!");
  }

  else {
    // Computer chooses ROCK and player chooses PAPER
    if (computerChoice === "rock" && humanChoice.toLowerCase() === "paper") {
      humanScore += 1;
      console.log(`You chose ${humanSelection.toLowerCase()}.`);
      console.log(`The computer chose ${computerSelection}.`);
      console.log("Paper beats rock——you win!");
      console.log(`The score is Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer choose ROCK and player chooses SCISSORS
    else if (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors") {
      computerScore += 1;
      console.log(`You chose ${humanSelection.toLowerCase()}.`);
      console.log(`The computer chose ${computerSelection}.`);
      console.log("Rock beats scissors——you lose!");
      console.log(`The score is Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer chooses PAPER and player chooses ROCK
    else if (computerChoice === "paper" && humanChoice.toLowerCase() === "rock") {
      computerScore += 1;
      console.log(`You chose ${humanSelection.toLowerCase()}.`);
      console.log(`The computer chose ${computerSelection}.`);
      console.log("Paper beats rock——you lose!");
      console.log(`The score is Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer chooses PAPER and player chooses SCISSORS
    else if (computerChoice === "paper" && humanChoice.toLowerCase() === "scissors") {
      humanScore += 1;
      console.log(`You chose ${humanSelection.toLowerCase()}.`);
      console.log(`The computer chose ${computerSelection}.`);
      console.log("Scissors beats paper——you win!");
      console.log(`The score is Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer chooses SCISSORS and player chooses ROCK
    else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "rock") {
      humanScore += 1;
      console.log(`You chose ${humanSelection.toLowerCase()}.`);
      console.log(`The computer chose ${computerSelection}.`);
      console.log("Rock beats scissors——you win!");
      console.log(`The score is Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer choose SCISSORS and player chooses PAPER
    else {
      computerScore += 1;
      console.log(`You chose ${humanSelection.toLowerCase()}.`);
      console.log(`The computer chose ${computerSelection}.`);
      console.log("Scissors beats paper——you lose!");
      console.log(`The score is Computer: ${computerScore} You: ${humanScore}`);
    }
  }
}

playRound(computerSelection, humanSelection);