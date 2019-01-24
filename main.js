let userScore = 0;
let compScore = 0;
let userScore_h3 = document.getElementById("playerScore");
let compScore_h3 = document.getElementById("computerScore");
const resultMessage_h3 = document.querySelector(".round_msg");
let resultGame_h1 = document.querySelector(".result_Game > h1");
let countdown_h2 = document.getElementById('coutdown');
const currentRound_h3 = document.querySelector(".round")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const button = document.querySelectorAll('.btn');
let round = 1;
let countdown = 10;

mainGame();

function mainGame() {

  currentRound_h3.textContent = `Round ${round}`;
  playerSelect();

}

function computerSelect() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playerSelect() {

  rock_div.addEventListener('click', function () {
    gamePlay('rock');
  })
  paper_div.addEventListener('click', function () {
    gamePlay('paper');
  })
  scissor_div.addEventListener('click', function () {
    gamePlay('scissor');
  })
}

function gamePlay(playerChoice) {
  const computerChoice = computerSelect();
  switch (playerChoice + computerChoice) {
    case 'rockscissor':
    case 'paperrock':
    case 'scissorpaper':
      win(playerChoice, computerChoice);
      break;
    case 'scissorrock':
    case 'rockpaper':
    case 'paperscissor':
      lose(playerChoice, computerChoice);
      break;
    case 'scissorscissor':
    case 'rockrock':
    case 'paperpaper':
      draw(playerChoice, computerChoice);
      break;
  }
}

function convertToText(letter) {
  if (letter === 'rock') return "Rock";
  if (letter === 'paper') return "Paper";
  return "Scissor";
}

function win(user, computer) {
  userScore++;
  userScore_h3.innerHTML = userScore;
  compScore_h3.innerHTML = compScore;
  resultMessage_h3.innerHTML = `${convertToText(user)} beats ${convertToText(computer)}. You win! `;
  document.getElementById(user).classList.add('btn-bluegreen-glow');
  //Timeout for the color
  //ES6
  setTimeout(() =>
    document.getElementById(user).classList.remove('btn-bluegreen-glow'), 900);

  checkScores();
}

function lose(user, computer) {
  compScore++;
  userScore_h3.innerHTML = userScore;
  compScore_h3.innerHTML = compScore;
  resultMessage_h3.innerHTML = `${convertToText(user)} beaten by ${convertToText(computer)}. You lost! `;
  document.getElementById(user).classList.add('btn-red-glow');
  //Timeout for the color
  setTimeout(function () {
    document.getElementById(user).classList.remove('btn-red-glow')
  }, 900);

  checkScores();
}

function draw(user, computer) {
  resultMessage_h3.innerHTML = `Both chose ${convertToText(user)}. It\'s a draw. `;
  document.getElementById(user).classList.add('btn-gray-glow');
  //Timeout for the color
  //ES6
  setTimeout(() =>
    document.getElementById(user).classList.remove('btn-gray-glow'), 900);
  checkScores();
}

function checkScores() {
  if (compScore == 5) {
    resultGame_h1.innerHTML = 'You lost !';
    document.getElementById('result_Game').classList.add('resultGame_show');
    document.getElementById('choices').classList.add('choices_none');
    document.getElementsByClassName('player').classList.add('lose_glow');
    document.getElementsByClassName('computer').classList.add('win_glow');
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  } else if (userScore == 5) {
    resultGame_h1.innerHTML = 'You win !';
    document.getElementById('result_Game').classList.add('resultGame_show');
    document.getElementById('choices').classList.add('choices_none');
    document.getElementById('player').classList.add('win_glow');
    document.getElementById('computer').classList.add('lose_glow');
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  } else {
    round++;
    currentRound_h3.textContent = `Round ${round}`;
  }
}

// function refresh(countdown) {
//   if (countdown = 0)
//     window.location.reload(true);
//   countdown_h2.innerHTML = countdown;
//   setTimeout(function () {
//     refresh(countdown - 1);
//   }, 10000);
// }