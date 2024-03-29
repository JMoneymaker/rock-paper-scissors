
export const getComputerChoice = () => {

    const randomNumber = Math.floor(Math.random() * 3); 
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'Error';
    }
};

export const checkResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'draw';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'lose';
        } else {
            return 'win';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'lose';
        } else {
            return 'win';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'lose';
        } else {
            return 'win';
        }
    }
};