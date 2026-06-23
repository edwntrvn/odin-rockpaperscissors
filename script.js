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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    
    console.log(`The computer chose ${computerChoice}.`);
    console.log(`You chose ${humanChoice}.`);
    
    // Computer and human both make the same choice
    if (computerChoice === humanChoice) {
      console.log("It's a draw!");
    }

    else {
      // Computer chooses ROCK and human chooses PAPER
      if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        console.log("Paper beats rock--you win!");
      }

      // Computer chooses ROCK and human chooses SCISSORS
      else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        console.log("Rock beats scissors--you lose!");
      }

      // Computer chooses PAPER and human chooses ROCK
      else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("Paper beats rock--you lose!");
      }

      // Computer chooses PAPER and human chooses SCISSORS
      else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        console.log("Scissors beats paper--you win!");
      }

      // Computer chooses SCISSORS and human chooses ROCK
      else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        console.log("Rock beats scissors--you win!");
      }

      // Computer chooses SCISSORS and human chooses PAPER
      else {
        computerScore++;
        console.log("Scissors beats paper--you lose!");
      }
    }

    console.log(`The score is now Computer: ${computerScore} You: ${humanScore}`);
  }

  for (let i = 1; i <= 5; i++) {
    playRound();
  }

  console.log(`The final score is Computer: ${computerScore} You: ${humanScore}`);
  
  if (computerScore > humanScore) {
    console.log("You lost… Better luck next time!");
  }

  else if (computerScore < humanScore) {
    console.log("You won--congratulations!");
  }

  else {
    console.log("It's a draw. Play again!");
  }
}