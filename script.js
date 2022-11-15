let choices = ["Rock", "Paper", "Scissors"];
let score = { human: 0, computer: 0 };
const NUMBER_OF_GAMES = 5;
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

function resetScore() {
  score.human = 0;
  score.computer = 0;
  let scoreSent = document.getElementById("score-sentence");
  //scoreSent.textContent = "Start by choosing your move!";
  let scoreNum = document.getElementById("score-number");
  scoreNum.textContent = "0 - 0";
  scoreSent.classList.remove("text-red-500");
  scoreSent.classList.add("text-white");
}
function game(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  let scoreNum = document.getElementById("score-number");
  let scoreSent = document.getElementById("score-sentence");
  if (score.human + score.computer == NUMBER_OF_GAMES) {
    resetScore();
  }
  score.human += result.score;
  score.computer += 1 - result.score;
  console.log(score);

  scoreSent.textContent = result.sentence;
  scoreNum.textContent = [score.human, "-", score.computer].join(" ");

  if (score.human + score.computer == NUMBER_OF_GAMES) {
    // The game is a best of NUMBER_OF_GAMES. It musts end after that number of game
    if (score.human > score.computer) {
      res = "You Win!";
    } else if (score.human < score.computer) {
      res = "You Loose!";
    } else {
      res = "Draw";
    }
    console.log(res);
    scoreSent.classList.remove("text-white");
    scoreSent.classList.add("text-red-500");
    scoreSent.textContent = res;
  }
}
