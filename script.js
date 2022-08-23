'use strict';
const gameItems = ['rock', 'paper', 'scissors'];
let computerChoice = '';

function getComputerChoice() {
  const randomNum = Math.trunc(Math.random() * 3);
  computerChoice = gameItems[randomNum];
  return computerChoice;
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  // const result = `You Lose! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
  let result = '';
  let finalPlayerSelection = playerSelection.toLowerCase();
  if (finalPlayerSelection === 'paper') {
    if (computerSelection === gameItems[0]) {
      result = `You Win! 🎉 ${finalPlayerSelection} beats ${computerSelection}`;
    } else if (computerSelection === gameItems[2]) {
      result = `You Lose!😖 ${computerSelection} beats ${finalPlayerSelection}`;
    } else {
      result = `Draw! ⛔ ${computerSelection} = ${finalPlayerSelection}`;
    }
  } else if (finalPlayerSelection === 'rock') {
    if (computerSelection === gameItems[2]) {
      result = `You Win!🎉 ${finalPlayerSelection} beats ${computerSelection}`;
    } else if (computerSelection === gameItems[1]) {
      result = `You Lose!😖 ${computerSelection} beats ${finalPlayerSelection}`;
    } else {
      result = `Draw!⛔ ${computerSelection} = ${finalPlayerSelection}`;
    }
  } else if (finalPlayerSelection === 'scissors') {
    if (computerSelection === gameItems[1]) {
      result = `You Win! ${finalPlayerSelection} beats ${computerSelection}`;
    } else if (computerSelection === gameItems[0]) {
      result = `You Lose! ${computerSelection} beats ${finalPlayerSelection}`;
    } else {
      result = `Draw!⛔ ${computerSelection} = ${finalPlayerSelection}`;
    }
  } else {
    result = `Invalid Selection. Choose either "rock", "paper" or "scissors".`;
  }
  return result;
}
function game() {
  // for (let i = 0; i < 5; i++) {
  //   console.log(playRound(prompt(), getComputerChoice()));
  // }
  const btns = Array.from(document.querySelectorAll('button'));
  console.log(btns);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e => {
      console.log(e.target);
      console.log(playRound(e.target.textContent, getComputerChoice()));
    });
  }
}
game();
