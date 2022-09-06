'use strict';
const gameItems = ['✊', '✋', '✌️'];
let playerScore = 0;
let computerScore = 0;
let playerScore_El = document.querySelector('.player-score');
let computerScore_El = document.querySelector('.computer-score');
let mainResult = document.querySelector('.main-result');
const mainRule = 'Choose your weapon';
let result = document.querySelector('.results');
const rule = 'First to score 5 points wins the game';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

game();

function game() {
  const btns = Array.from(document.querySelectorAll('.game-btns'));
  console.log(btns);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e => {
      // console.log(e.target.textContent);
      const playerr = e.target.textContent;
      const computerr = getComputerChoice();
      showPlayerSelection(playerr);
      showComputerSelection('?');
      setTimeout(() => {
        showComputerSelection(computerr);
        playRound(playerr, computerr);
      }, 500);
    });
  }
}

function getComputerChoice() {
  const randomNum = Math.trunc(Math.random() * 3);
  const computerChoice = gameItems[randomNum];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  // showPlayerSelection(playerSelection);
  // showComputerSelection(computerSelection);

  if (playerSelection === '✋') {
    if (computerSelection === gameItems[0]) {
      result.textContent = `Paper beats rock`;
      mainResult.textContent = 'You won!';

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[2]) {
      result.textContent = `Scissors beats paper`;
      mainResult.textContent = 'You lost!';

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Paper ties with paper`;
      mainResult.textContent = "It's a tie!";

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else if (playerSelection === '✊') {
    if (computerSelection === gameItems[2]) {
      result.textContent = `Rock beats scissors`;
      mainResult.textContent = 'You won!';

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[1]) {
      result.textContent = `Paper beats rock`;
      mainResult.textContent = 'You lost!';

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Rock ties with rock`;
      mainResult.textContent = "It's a tie!";

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else if (playerSelection === '✌️') {
    if (computerSelection === gameItems[1]) {
      result.textContent = `Scissors beats paper`;
      mainResult.textContent = 'You won!';

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[0]) {
      result.textContent = `Rock beats scissors`;
      mainResult.textContent = 'You lost!';

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Scissors ties with scissors`;
      mainResult.textContent = "It's a tie!";

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else {
    result.textContent = `Invalid Selection. Choose either "rock", "paper" or "scissors".`;
  }

  // Tracking winner
  if (playerScore === 5 || computerScore === 5) {
    showModal(playerScore > computerScore ? 'won...' : 'lost...');
    playerScore = 0;
    computerScore = 0;
    playerScore_El.innerHTML = playerScore;
    computerScore_El.innerHTML = computerScore;
  }
}

function showComputerSelection(computerSelection) {
  const computer = document.querySelector('.computer-selection');
  computer.innerHTML = computerSelection;
}

function showPlayerSelection(playerSelection) {
  const player = document.querySelector('.player-selection');
  player.innerHTML = playerSelection;
}
// Show modal when anyone wins
function showModal(str) {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  document.querySelector('.modal-str').innerHTML = str;

  playAgain();
}

// Play again when play-again btn is clicked
function playAgain() {
  const playAgainBtn = document.querySelector('.play-again');
  playAgainBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    mainResult.textContent = mainRule;
    result.textContent = rule;
  });
}
