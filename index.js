const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return `Rock`;
  } else if (randomNum === 2) {
    return `Paper`;
  } else {
    return `Scissors`;
  }
};

const getHumanChoice = () => {
  let userChoice = prompt(`Please enter: "Rock", "Paper", or "Scissors"`);
  return userChoice;
};

// New playGame function containing everything else
const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}\n`);
  };

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Declare winner
  console.log("=== GAME OVER ===");
  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`
    );
  } else {
    console.log(
      `It's a tie game! Final Score - You: ${humanScore}, Computer: ${computerScore}`
    );
  }
};

// Start the game
playGame();
