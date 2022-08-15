const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');

/* Creating UI effects when cursor hovers over a button */

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('mouseover',() => {
        button.classList.toggle('mouseOverButton');
    })

    button.addEventListener('mouseout',() => {
        button.classList.toggle('mouseOverButton');
     })

});


/* Generates a random number from 1-3, and depending on that number, assigns the computer selection to rock, paper, or scissors */

function getComputerSelection(){
    min = 1;
    max = 3;
    computerSelection = Math.floor(Math.random()*(max-min+1)+min);
    
    if (computerSelection == 1){
        computerSelection = 'rock';
        buttonRock.classList.toggle('computerSelecting');
    }
    
    else if (computerSelection == 2){
        computerSelection = 'paper';
        buttonPaper.classList.toggle('computerSelecting');
    }
    else {
        computerSelection = 'scissors';
        buttonScissors.classList.toggle('computerSelecting');
    }
    return computerSelection;
}

/* Gets both input from the user and the computer, announces the inputs, determines who wins, and keeps score. */

function announceResults(playerSelection,computerSelection){

    console.log('You chose: ', playerSelection);
    console.log('The computer chose: ', computerSelection);
    
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('The computer won! Paper beats rock!');
        computerScore++;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('You won! rock beats scissors!');
        userScore++;
    }
    
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('The computer won! scissors beats paper!');
        computerScore++;
    }
    
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('You won! paper beats rock!');
        userScore++;
    }
    

    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log('The computer won! rock beats scissors!');
        computerScore++;
    }
    
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('You won! scissors beats paper!');
        userScore++;
    }
    
    else {
        console.log(`It's a tie!`);
    }
    
    let userScoreString = userScore.toString();
    let computerScoreString = computerScore.toString();
    
    pScore.textContent = userScoreString;
    cScore.textContent = computerScoreString;
    console.log('The User score is:',userScore,'and the computer score is:',computerScore);
}

function clearButtons(computerSelection){

    if (computerSelection == 'rock'){
        buttonRock.classList.toggle('computerSelecting');
    }
    else if (computerSelection == 'paper'){
        buttonPaper.classList.toggle('computerSelecting');
    }
    else {
        buttonScissors.classList.toggle('computerSelecting');
    }
}


function playRound() {
    buttons.forEach((button) => {
        button.addEventListener('click',() => {
            
            let playerSelection;
            if (button == buttonRock){
                playerSelection = 'rock'
            }
            else if (button == buttonPaper){
                playerSelection = 'paper'
    
            }
            else {
                playerSelection = 'scissors'
            }

            getComputerSelection();
            announceResults(playerSelection,computerSelection);
            setTimeout(clearButtons,500,computerSelection);



        })
    });
}

let userScore = 0;
let computerScore = 0;
pScore.textContent = '0';
cScore.textContent = '0';
playRound();


