// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { checkResult } from '../get-random-throw';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getComputerChoice = 'rock';
    const userChoice = 'rock';
    const expected = 'tie';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = checkResult (getComputerChoice, userChoice);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
