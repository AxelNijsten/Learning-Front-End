const choices = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock'];
let wins = 0;
let losses = 0;

//adds scores
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;

//makes the AI pick Rock Paper or Scissor

function goComputer () {     
    return Math.floor(Math.random() * choices.length);
}


function action(playerChoice) {
    // get computer choice as a number
    const computerChoice = goComputer();

    // check who won
    // draw 
    if (computerChoice === playerChoice) {
        document.getElementById('message').innerHTML = 'Draw';
    }
    // Rock
    if (computerChoice === 0 && (playerChoice === 2 || playerChoice == 3)) {
        playerLooses(computerChoice);
    } else if (playerChoice === 0 && (computerChoice === 2 || computerChoice == 3)) {
        // dry win action
        playerWins(playerChoice, computerChoice);
    }
    // paper 
    if (computerChoice === 1 && (playerChoice === 0 || playerChoice == 4)) {
        // dry loose action
        playerLooses(computerChoice);
    } else if (playerChoice === 1 && (computerChoice === 0 || computerChoice == 4)){
        playerWins(playerChoice, computerChoice);
    }
    // scissor
    if (computerChoice === 2 && (playerChoice === 1 || playerChoice == 3)) {
        playerLooses(computerChoice);
    } else if (playerChoice === 2 && (computerChoice === 1 || computerChoice == 3)) {
        playerWins(playerChoice, computerChoice);
    }
    // lizard
    if (computerChoice === 3 && (playerChoice === 1 || playerChoice == 4)) {
        playerLooses(computerChoice);
    } else if (playerChoice === 3 && (computerChoice === 1 || computerChoice == 4)) {
        playerWins(playerChoice, computerChoice);
    }  
    //spock
    if (computerChoice === 4 && (playerChoice === 2 || playerChoice == 0)) {
        playerLooses(computerChoice);
    } else if (playerChoice === 4 && (computerChoice === 2 || computerChoice == 0)) {
        playerWins(playerChoice, computerChoice);
    }        
}

function playerLooses(computerChoice) {
    losses++;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('message').innerHTML = `AI picked ${choices[computerChoice]} you lose`;
}

function playerWins(playerChoice, computerChoice) {
    wins++;
    document.getElementById(choices[playerChoice].toLowerCase()).setAttribute('class', 'wins');
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('message').innerHTML = `AI picked ${choices[computerChoice]} you win`;
}