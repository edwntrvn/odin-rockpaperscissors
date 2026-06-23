function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  
  if (randomNumber === 0) {
    return "rock";
  }

  else if (randomNumber === 1) {
    return "paper";
  }

  else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose rock, paper, or scissors!").toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
  // Computer and human both make the same choice
  if (computerChoice === humanChoice) {
    console.log(`The computer chose ${computerChoice}.`);
    console.log(`You chose ${humanChoice}.`);
    console.log("It's a draw!");
  }

  else {
    // Computer chooses ROCK and human chooses PAPER
    if (computerChoice === "rock" && humanChoice === "paper") {
      humanScore += 1;
      console.log(`The computer chose ${computerChoice}.`);
      console.log(`You chose ${humanChoice}.`);
      console.log("Paper beats rock--you win!");
      console.log(`The score is now Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer chooses ROCK and human chooses SCISSORS
    else if (computerChoice === "rock" && humanChoice === "scissors") {
      computerScore += 1;
      console.log(`The computer chose ${computerChoice}.`);
      console.log(`You chose ${humanChoice}.`);
      console.log("Rock beats scissors--you lose!");
      console.log(`The score is now Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer chooses PAPER and human chooses ROCK
    else if (computerChoice === "paper" && humanChoice === "rock") {
      computerScore += 1;
      console.log(`The computer chose ${computerChoice}.`);
      console.log(`You chose ${humanChoice}.`);
      console.log("Paper beats rock--you lose!");
      console.log(`The score is now Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer chooses PAPER and human chooses SCISSORS
    else if (computerChoice === "paper" && humanChoice === "scissors") {
      humanScore += 1;
      console.log(`The computer chose ${computerChoice}.`);
      console.log(`You chose ${humanChoice}.`);
      console.log("Scissors beats paper--you win!");
      console.log(`The score is now Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer chooses SCISSORS and human chooses ROCK
    else if (computerChoice === "scissors" && humanChoice === "rock") {
      humanScore += 1;
      console.log(`The computer chose ${computerChoice}.`);
      console.log(`You chose ${humanChoice}.`);
      console.log("Rock beats scissors--you win!");
      console.log(`The score is now Computer: ${computerScore} You: ${humanScore}`);
    }

    // Computer chooses SCISSORS and human chooses PAPER
    else {
      computerScore += 1;
      console.log(`The computer chose ${computerChoice}.`);
      console.log(`You chose ${humanChoice}.`);
      console.log("Scissors beats paper--you lose!");
      console.log(`The score is now Computer: ${computerScore} You: ${humanScore}`);
    }
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);