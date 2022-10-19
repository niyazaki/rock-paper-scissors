let choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(choice);
  return choice;
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  let res = {
    sentence: "",
    score: 0,
  };
  switch (playerSelection) {
    case "ROCK":
      if (computerSelection === "Rock") {
        res.sentence = "Draw";
        res.score = 0.5;
      } else if (computerSelection === "Paper") {
        res.sentence = "You Lose! Paper beats Rock";
      } else if (computerSelection === "Scissors") {
        res.sentence = "You Win! Rock beats Scissors";
        res.score = 1;
      }
      break;
    case "PAPER":
      if (computerSelection === "Rock") {
        res.sentence = "You Win! Paper beats Rock";
        res.score = 1;
      } else if (computerSelection === "Paper") {
        res.sentence = "Draw";
        res.score = 0.5;
      } else if (computerSelection === "Scissors") {
        res.sentence = "You Lose! Scissors beats Paper";
      }
      break;
    case "SCISSORS":
      if (computerSelection === "Rock") {
        res.sentence = "You Lose! Rock beats Scissors";
      } else if (computerSelection === "Scissors") {
        res.sentence = "Draw";
        res.score = 0.5;
      } else if (computerSelection === "Paper") {
        res.sentence = "You Win! Scissors beats Paper";
        res.score = 1;
      }
      break;
  }
  console.log(res);
  return res;
}

function game() {
  let res = "";
  let score = { human: 0, computer: 0 };
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Your move :", "rock");
    let result = playRound(playerSelection, computerSelection);
    score.human += result.score;
    score.computer += 1 - result.score;
    console.log(score);
  }
  if (score.human > score.computer) {
    res = "You Win!";
  } else if (score.human < score.computer) {
    res = "You Loose!";
  } else {
    res = "Draw";
  }
  console.log(res);
  return res;
}

game();
