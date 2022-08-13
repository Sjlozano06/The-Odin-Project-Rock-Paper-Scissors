/* FUNCTIONS */

            /* This function gets the user input and converts the entire string to lower case */

            function getPlayerSelection (){
                while (true){

                let playerSelection = prompt('Please enter one of the following: Rock, Paper, or Scissors');
                playerSelection = playerSelection.toLowerCase();
                
                if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
                    return playerSelection;
                }

                else {
                    console.log('Not a valid prompt. Please try again!');
                }
            }
            }

            /* Generates a random number from 1-3, and depending on that number, assigns the computer selection to rock, paper, or scissors */

            function getComputerSelection(){
                min = 1;
                max = 3;
                computerSelection = Math.floor(Math.random()*(max-min+1)+min);
                
                if (computerSelection == 1){
                    computerSelection = 'rock';
                }

                else if (computerSelection == 2){
                    computerSelection = 'paper';
                }
                else {
                    computerSelection = 'scissors';
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

                console.log('The User score is:',userScore,'and the computer score is:',computerScore);
            }

            /* Combines the last three functions together into a single function. This encompasses a single round */

            function playRound(){

                playerSelection = getPlayerSelection();
                computerSelection = getComputerSelection()
                announceResults(playerSelection,computerSelection);

            }

            /* Utlizes all other functions to play five rounds and determines who wins overall */

            function game(){
                
            for (let i = 0; i<5; i++){
                playRound();
            }
            if (userScore > computerScore){
                console.log('You won the game!');
            }
            else if (userScore < computerScore){
                console.log('You lost the game!');
            }
            else{
                console.log('It is a tie!');
            }
            }

            /* END OF FUNCTIONS */

            let userScore = 0;
            let computerScore = 0;
            game();