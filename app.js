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
    
    
    // conditional statement checking results and changing text content of a the setWinLossStatement span depening on game result. Move 47 into each condition of the conditional statment.
    
});
// make changes to state and dom

/* const runMatch = () => {
    const displayGameStats = () => {
        winsSpan.textContent = wins;
        lossesSpan.textContent = losses;
        drawsSpan.textcontent = draws;
    const radioButtonValue = document.querySelector('input:checked');
    const userChoice = radioButtonValue.value;
    const gameResults = checkResult(userChoice, computerChoice);
    gameStats(userChoice, computerChoice, gameResults);
    setWinLossStatement(gameResults);
    */
   
   // add event listeners
   
   
   //define DOM utility function
   
