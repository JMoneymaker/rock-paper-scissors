// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;

test('rock and rock should return draw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getComputerChoice = 'rock';
    const userChoice = 'rock';
    const expected = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = checkResult (userChoice, getComputerChoice);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);

});

test('rock and paper should return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'rock';
    const getComputerChoice = 'paper';
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = checkResult (userChoice, getComputerChoice);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});

test('rock and scissors should return win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'rock';
    const getComputerChoice = 'scissors';
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = checkResult (userChoice, getComputerChoice);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});

test('paper and paper should return draw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'paper';
    const getComputerChoice = 'paper';
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = checkResult (userChoice, getComputerChoice);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});

test('paper and rock should return win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'paper';
    const getComputerChoice = 'rock';
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = checkResult (userChoice, getComputerChoice);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});

test('paper and scissors should return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'paper';
    const getComputerChoice = 'scissors';
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = checkResult (userChoice, getComputerChoice);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});

test('scissors and scissors should return draw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'scissors';
    const getComputerChoice = 'scissors';
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = checkResult (userChoice, getComputerChoice);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});

test('scissors and paper should return win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'scissors';
    const getComputerChoice = 'paper';
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = checkResult (userChoice, getComputerChoice);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});

test('scissors and rock should return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userChoice = 'scissors';
    const getComputerChoice = 'rock';
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = checkResult (userChoice, getComputerChoice);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});