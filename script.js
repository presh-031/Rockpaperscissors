'use strict';
const gameItems = ['✊', '✋', '✌️'];
// let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let playerScore_El = document.querySelector('.player-score');
let computerScore_El = document.querySelector('.computer-score');
let result = document.querySelector('.results');

game();

function game() {
  const btns = Array.from(document.querySelectorAll('button'));
  console.log(btns);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e => {
      // console.log(e.target.textContent);
      playRound(e.target.textContent, getComputerChoice());
    });
  }
}

function getComputerChoice() {
  const randomNum = Math.trunc(Math.random() * 3);
  const computerChoice = gameItems[randomNum];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  showPlayerSelection(playerSelection);
  showComputerSelection(computerSelection);

  if (playerSelection === '✋') {
    if (computerSelection === gameItems[0]) {
      result.textContent = `You Win! 🎉 paper beats ${computerSelection}`;

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[2]) {
      result.textContent = `You Lose!😖 ${computerSelection} beats paper`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Draw! ⛔ ${computerSelection} = paper`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else if (playerSelection === '✊') {
    if (computerSelection === gameItems[2]) {
      result.textContent = `You Win!🎉 rock beats ${computerSelection}`;

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[1]) {
      result.textContent = `You Lose!😖 ${computerSelection} beats rock`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Draw!⛔ ${computerSelection} = rock`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else if (playerSelection === '✌️') {
    if (computerSelection === gameItems[1]) {
      result.textContent = `You Win! scissors beats ${computerSelection}`;

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[0]) {
      result.textContent = `You Lose! ${computerSelection} beats scissors`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Draw!⛔ ${computerSelection} = scissors`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else {
    result.textContent = `Invalid Selection. Choose either "rock", "paper" or "scissors".`;
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
// Tracking first-to-five
console.log(playerScore);
