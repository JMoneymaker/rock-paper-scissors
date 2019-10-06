// imports

import { getComputerChoice } from './get-random-throw.js';
import { checkResult } from './get-random-throw.js';

// initialize/fetch DOM elements

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawsSpan = document.getElementById('draws');
const setWinLossStatement = document.getElementById('win-loss-statement');
const computerChoiceSpan = document.getElementById('computer-throw');
const userThrowSpan = document.getElementById('user-throw');

// set some initial state

let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;

//play game

playButton.addEventListener('click', () => {
    const selectedRadioValue = document.querySelector('input:checked');
    const userChoice = selectedRadioValue.value;
    const computerChoice = getComputerChoice();
    const matchResults = checkResult(userChoice, computerChoice);
    setWinLossStatement.textContent = matchResults;
    computerChoiceSpan.textContent = computerChoice;
    userThrowSpan.textContent = userChoice;
    
    if (matchResults === 'win') {
        setWinLossStatement.textContent = 'You\'re the G.D. winner!';
        winsSpan.textContent = totalWins += 1;
    } else if (matchResults === 'lose') {
        setWinLossStatement.textContent = 'You\'re the G.D. loser!';
        lossesSpan.textContent = totalLosses += 1;
    } else {
        setWinLossStatement.textContent = 'It was a G.D. draw!';
        drawsSpan.textContent = totalDraws += 1;
    }
    
});

   
