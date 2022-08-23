'use strict';
const gameItems = ['rock', 'paper', 'scissors'];
let computerChoice = '';
let score = Number(document.querySelector('.score').textContent);
// console.log(score);

function getComputerChoice() {
  const randomNum = Math.trunc(Math.random() * 3);
  computerChoice = gameItems[randomNum];
  return computerChoice;
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  // const result = `You Lose! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
  let result = document.querySelector('.results');

  let finalPlayerSelection = playerSelection.toLowerCase();
  if (finalPlayerSelection === 'paper') {
    if (computerSelection === gameItems[0]) {
      result.textContent = `You Win! 🎉 ${finalPlayerSelection} beats ${computerSelection}`;
      score += 1;
    } else if (computerSelection === gameItems[2]) {
      result.textContent = `You Lose!😖 ${computerSelection} beats ${finalPlayerSelection}`;
      score -= 1;
    } else {
      result.textContent = `Draw! ⛔ ${computerSelection} = ${finalPlayerSelection}`;
      score = score;
    }
  } else if (finalPlayerSelection === 'rock') {
    if (computerSelection === gameItems[2]) {
      result.textContent = `You Win!🎉 ${finalPlayerSelection} beats ${computerSelection}`;
      score += 1;
    } else if (computerSelection === gameItems[1]) {
      score -= 1;
      result.textContent = `You Lose!😖 ${computerSelection} beats ${finalPlayerSelection}`;
    } else {
      result.textContent = `Draw!⛔ ${computerSelection} = ${finalPlayerSelection}`;
      score = score;
    }
  } else if (finalPlayerSelection === 'scissors') {
    if (computerSelection === gameItems[1]) {
      result.textContent = `You Win! ${finalPlayerSelection} beats ${computerSelection}`;
      score += 1;
    } else if (computerSelection === gameItems[0]) {
      result.textContent = `You Lose! ${computerSelection} beats ${finalPlayerSelection}`;
      score -= 1;
    } else {
      result.textContent = `Draw!⛔ ${computerSelection} = ${finalPlayerSelection}`;
      score = score;
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
      console.log(e.target);
      playRound(e.target.textContent, getComputerChoice());
    });
  }
}
game();
