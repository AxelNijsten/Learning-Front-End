//give AI choices
let choices = ['Rock', 'Paper', 'Scissor'];
let computerChoice;
let wins = 0;
let losses = 0;

//adds scores
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;

//makes the AI pick Rock Paper or Scissor

function goComputer () {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    return computerChoice;
}

//calling AI to make a move

goComputer();

//rock options

function userRock(){

    if (computerChoice === choices[0]){
        document.getElementById('message').innerHTML = 'Draw';
    }

    if (computerChoice === choices[1]){
        losses++;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById('message').innerHTML = 'AI picked paper you lose';
    }

    if (computerChoice === choices[2]){
        document.getElementById('rock').setAttribute('class', 'wins');
        wins++
        document.getElementById('wins').innerHTML = 'wins';
        document.getElementById('message').innerHTML = 'AI picked scissor you win';
    }
    goComputer();
}


//Paper options
function userPaper (id) {  
  
    if (computerChoice === choices[1]) {
      document.getElementById("message").innerHTML = "Draw"; 
    }
    if (computerChoice === choices[2]) {
      losses++;
      document.getElementById("losses").innerHTML = losses;
      document.getElementById("message").innerHTML = "AI picked scissor you lose";
    }
    if (computerChoice === choices[0]) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("message").innerHTML = "AI picked rock you win";
    }
    
    goComputer();
  }

//scissor options
function userScissor (id) {  
  
    if (computerChoice === choices[2]) {
      document.getElementById("message").innerHTML = "Draw"; 
    }
    if (computerChoice === choices[0]) {
      losses++;
      document.getElementById("losses").innerHTML = losses;
      document.getElementById("message").innerHTML = "AI picked rock you lose";
    }
    if (computerChoice === choices[1]) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("message").innerHTML = "AI picked paper you win";
    }
    
    goComputer ();
  }



























  