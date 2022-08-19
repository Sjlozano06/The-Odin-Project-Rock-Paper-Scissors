/* Selecting elements to manipulate from the DOM */

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const victorMessage = document.querySelector('#victor');
const buttons = document.querySelectorAll('button');

let playerSelection; // Initial values for player score and computer score
let userScore = 0;
let computerScore = 0;
pScore.textContent = '0';
cScore.textContent = '0';

/* Creating events that run the page */

buttons.forEach((button) => {

    button.addEventListener('mouseover',() => {
        button.classList.toggle('mouseOverButton');

        if (button == buttonRock){
            playerChoice.textContent = 'Rock';

        }
        else if (button == buttonPaper){
            playerChoice.textContent = 'Paper';
        }
        else {
            playerChoice.textContent = 'Scissors';
        }
    })

    button.addEventListener('mouseout',() => {
        button.classList.toggle('mouseOverButton');
        playerChoice.textContent = '?'
     })

     button.addEventListener('click',() => {
        playRound(button);
    })
        
    });
    
/* FUNCTIONS */

/* Plays round upon user click */

function playRound(button) {

    if (button == buttonRock){
        playerSelection = 'rock';
    }
    else if (button == buttonPaper){
        playerSelection = 'paper';

    }
    else {
        playerSelection = 'scissors';
    }
    let computerSelection = getComputerSelection();
    let winner = announceResults(playerSelection,computerSelection);
    setTimeout(clear,750,computerSelection,winner);
} 
    
    /* Generates a random number from 1-3 and depending on that number, assigns the computer selection to rock, paper, or scissors */
    
    function getComputerSelection(){
        min = 1;
        max = 3;
        let computerSelection = Math.floor(Math.random()*(max-min+1)+min);
        
    if (computerSelection == 1){
        computerSelection = 'rock';
        buttonRock.classList.toggle('computerSelecting');
        computerChoice.textContent = 'Rock';
    }
    
    else if (computerSelection == 2){
        computerSelection = 'paper';
        buttonPaper.classList.toggle('computerSelecting');
        computerChoice.textContent = 'Paper';
    }
    else {
        computerSelection = 'scissors';
        buttonScissors.classList.toggle('computerSelecting');
        computerChoice.textContent = 'Scissors';
    }
    return computerSelection;
}

/* Decides results based on selections and updates score. Assigns a winner. */

function announceResults(playerSelection,computerSelection){

    let userWin = false;
    let computerWin = false;

    if (playerSelection == 'rock'){
        if (computerSelection == 'rock'){
            console.log(`It's a tie!`);
            victorMessage.textContent = "It's a tie!";
        }
        else if (computerSelection == 'paper'){
            victorMessage.textContent = "The computer won! Paper beats rock!";
            computerScore++;
            computerWin = true;
        }
        else {
            victorMessage.textContent = "You won! rock beats scissors!";
            userScore++;
            userWin = true;
        }
    }

    else if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            victorMessage.textContent = "You won! Paper beats rock!"
            userScore++;
            userWin = true;
        }
        else if (computerSelection == 'paper'){
            victorMessage.textContent = "It's a tie!";
        }
        else {
            victorMessage.textContent = "You lost! scissors beats paper!";
            computerScore++;
            computerWin = true;
        }
    }

    else {
        if (computerSelection == 'rock'){
            victorMessage.textContent = "You lost! Rock beats scissors!"
            computerScore++;
            computerWin = true;
        }
        else if (computerSelection == 'paper'){
            victorMessage.textContent = "You win! Scissors beats paper!";
            userScore++;
            userWin = true;
        }
        else {
            victorMessage.textContent = "It's a tie!";
        }
    }

    let userScoreString = userScore.toString();
    let computerScoreString = computerScore.toString();
    pScore.textContent = userScoreString;
    cScore.textContent = computerScoreString;

    if (userWin == true){
        pScore.classList.toggle('pScoreIncrease');
        return 'userWin'
    }
    else if (computerWin == true) {
        cScore.classList.toggle('cScoreIncrease');
        return 'computerWin'
    }

}

/* Clears for following round */

function clear(computerSelection,winner){

    if (computerSelection == 'rock'){
        buttonRock.classList.toggle('computerSelecting');
    }
    else if (computerSelection == 'paper'){
        buttonPaper.classList.toggle('computerSelecting');
    }
    else {
        buttonScissors.classList.toggle('computerSelecting');
    }

    if (winner == 'userWin') {
        pScore.classList.toggle('pScoreIncrease');
    }
    else if (winner == 'computerWin'){
        cScore.classList.toggle('cScoreIncrease')
    }
    
    computerChoice.textContent = '?';
    victorMessage.textContent = '';
}









