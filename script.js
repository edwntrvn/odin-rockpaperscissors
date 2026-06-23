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