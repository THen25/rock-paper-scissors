let humanScore = 0;
let computerScore = 0;

// Updating the DOM instead of using console.log
const scoreDiv = document.querySelector(".score");
const roundResultDiv = document.querySelector(".round-result");

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Logic to play one round
const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundResultDiv.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}, it's a draw!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResultDiv.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}, you win!`;
  } else {
    computerScore++;
    roundResultDiv.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}, you lose!`;
  }

  // Update the score after every round
  scoreDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;

  // Check for winner
  if (humanScore === 5) {
    roundResultDiv.textContent = "You won the game!";
  } else if (computerScore === 5) {
    roundResultDiv.textContent = "Computer won the game!";
  }
};
