'use strict';
const gameItems = ['✊', '✋', '✌️'];
const computer = document.querySelector('.computer-selection');
const player = document.querySelector('.player-selection');

let playerScore = 0;
let computerScore = 0;
const playerScore_El = document.querySelector('.player-score');
const computerScore_El = document.querySelector('.computer-score');

const mainResult = document.querySelector('.main-result');
const result = document.querySelector('.results');
const mainRule = 'Choose your weapon';
const rule = 'First to score 5 points wins the game';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

game();

function game() {
  const btns = Array.from(document.querySelectorAll('.game-btns'));

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e => {
      showPlayerSelection(e.target.textContent);
      showComputerSelection('?');
      // Show computer selection and playround after 500ms
      setTimeout(() => {
        showComputerSelection(getComputerChoice());
        playRound(e.target.textContent, getComputerChoice());
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
  if (playerSelection === '✋') {
    if (computerSelection === gameItems[0]) {
      result.textContent = `Paper beats rock`;
      mainResult.textContent = `You won!`;

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[2]) {
      result.textContent = `Scissors beats paper`;
      mainResult.textContent = `You lost!`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Paper ties with paper`;
      mainResult.textContent = `It's a tie!`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else if (playerSelection === '✊') {
    if (computerSelection === gameItems[2]) {
      result.textContent = `Rock beats scissors`;
      mainResult.textContent = `You won!`;

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[1]) {
      result.textContent = `Paper beats rock`;
      mainResult.textContent = `You lost!`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Rock ties with rock`;
      mainResult.textContent = `It's a tie!`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else if (playerSelection === '✌️') {
    if (computerSelection === gameItems[1]) {
      result.textContent = `Scissors beats paper`;
      mainResult.textContent = `You won!`;

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[0]) {
      result.textContent = `Rock beats scissors`;
      mainResult.textContent = `You lost!`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Scissors ties with scissors`;
      mainResult.textContent = `It's a tie!`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else {
    // This line will never run anymore as Player's selection now comes from ui
    // During development, I tested logic by taking input from alert popup, hence why it's here.
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
  computer.innerHTML = computerSelection;
}

function showPlayerSelection(playerSelection) {
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
    computer.innerHTML = player.innerHTML = '?';
  });
}
