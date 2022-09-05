'use strict';
const gameItems = ['rock', 'paper', 'scissors'];
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let playerScore_El = document.querySelector('.player-score');
let computerScore_El = document.querySelector('.computer-score');

// console.log(score);

function getComputerChoice() {
  const randomNum = Math.trunc(Math.random() * 3);
  computerChoice = gameItems[randomNum];
  return computerChoice;
}
console.log(getComputerChoice());

function playRound(finalPlayerSelection, computerSelection) {
  let result = document.querySelector('.results');

  // let finalPlayerSelection = playerSelection.toLowerCase();
  if (finalPlayerSelection === 'paper') {
    if (computerSelection === gameItems[0]) {
      result.textContent = `You Win! 🎉 ${finalPlayerSelection} beats ${computerSelection}`;
      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
      // console.log(playerScore);
    } else if (computerSelection === gameItems[2]) {
      result.textContent = `You Lose!😖 ${computerSelection} beats ${finalPlayerSelection}`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Draw! ⛔ ${computerSelection} = ${finalPlayerSelection}`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else if (finalPlayerSelection === 'rock') {
    if (computerSelection === gameItems[2]) {
      result.textContent = `You Win!🎉 ${finalPlayerSelection} beats ${computerSelection}`;

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[1]) {
      result.textContent = `You Lose!😖 ${computerSelection} beats ${finalPlayerSelection}`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Draw!⛔ ${computerSelection} = ${finalPlayerSelection}`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else if (finalPlayerSelection === 'scissors') {
    if (computerSelection === gameItems[1]) {
      result.textContent = `You Win! ${finalPlayerSelection} beats ${computerSelection}`;

      playerScore += 1;
      playerScore_El.innerHTML = playerScore;
    } else if (computerSelection === gameItems[0]) {
      result.textContent = `You Lose! ${computerSelection} beats ${finalPlayerSelection}`;

      computerScore += 1;
      computerScore_El.innerHTML = computerScore;
    } else {
      result.textContent = `Draw!⛔ ${computerSelection} = ${finalPlayerSelection}`;

      playerScore = playerScore;
      computerScore = computerScore;
      playerScore_El.innerHTML = playerScore;
      computerScore_El.innerHTML = computerScore;
    }
  } else {
    result.textContent = `Invalid Selection. Choose either "rock", "paper" or "scissors".`;
  }
  return result;
}
function game() {
  const btns = Array.from(document.querySelectorAll('button'));
  console.log(btns);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e => {
      console.log(e.target.textContent.toLowerCase());
      playRound(e.target.textContent.toLowerCase(), getComputerChoice());
    });
  }
}
game();
