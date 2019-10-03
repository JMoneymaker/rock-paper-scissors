// imports

import { getComputerChoice } from './get-random-throw.js';
import { checkResult } from './get-random-throw.js';

// initialize/fetch DOM elements

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const gameResults = document.getElementById('game-results');
const gameStats = document.getElementById('game-stats');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawsSpan = document.getElementById('draws');


// set some initial state

let wins = 0;
let losses = 0;
let draws = 0;


//define DOM utility function
const displayGameStats = () => {
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textcontent = draws;
};

const resultsDisplay = (results) => {
    if (results = 'win') {
        return "You won!";
   }
}

// make changes to state and dom

// add event listeners

playButton.addEventListener('click', () => {
    let userChoice = document.querySelector('input:checked').value;
    const computerChoice = getComputerChoice();
    const results = checkResult(userChoice, computerChoice);

    
}); 

