// function to hide start div and show game div
function hideStartShowGame() {

    let startElement = document.querySelector('.start');
    let gameElement = document.querySelector('.game');

    if (startElement) {
      startElement.style.display = 'none';
      gameElement.style.display = 'block';
    }

  }
  


let compChoice = {Value: ""};
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const buttons = document.querySelectorAll('.choice');

let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "May the Best Person Win!"


buttons.forEach((button)=>{button.addEventListener('click',()=>{
    
    playerChoice = button.id;
    if (playerChoice == "rock"){
        playerChoiceInt = 0;
    }
    else if (playerChoice == "paper"){
        playerChoiceInt = 1;
    }
    else if (playerChoice == "scissors")
    {
        playerChoiceInt = 2;
    }
    compChoiceInt = computerPlay(compChoice);
    playGame();
})

})

function computerPlay(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice.Value = "rock";
    }
    else if (choiceNum == 1){
        compChoice.Value = "paper";
    }
    else if(choiceNum == 2){
        compChoice.Value = "scissors";
    }
    return choiceNum;
}

function playRound(){
        let win_array = [[0, 2, 1], 
                        [1, 0, 2], 
                        [2, 1, 0]];
    let result = win_array[playerChoiceInt][compChoiceInt];
    if (result == 0){
        output.textContent = `Its a tie! You chose ${playerChoice} and The computer chose ${compChoice.Value}`;
    }
    else if (result == 1){
        output.textContent = `You won! You chose ${playerChoice} and The computer chose ${compChoice.Value}`;
        playerScore++;
        
    }
    else if (result == 2){
        output.textContent = `You lost! You chose ${playerChoice} and The computer chose ${compChoice.Value}`;
        compScore++;
    }
}

function playGame(){
        output.textContent = "Choose Rock, Paper, or Scissors";
        playRound();
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
        if (playerScore == 5){
            output.textContent = "You Won the Game! Congrats";
            playerScore = 0;
            compScore = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${compScore}`;
        }
        else if (compScore == 5){
            output.textContent = "You Lost the game:/ Maybe find something else to do?"
            playerScore = 0;
            compScore = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${compScore}`;
        }
    }





    // function computerPlay() {
    //     const choices = ['rock', 'paper', 'scissors'];
    //     const randomIndex = Math.floor(Math.random() * choices.length);
    //     return choices[randomIndex];
    // }
    
    // let cscore=0 , pscore=0;
    
    // const player = document.querySelector("#player-score");
    // const computer = document.querySelector("#comp-score");
    // const output = document.querySelector("#output");
    // output.textContent = "May the Best Person Win!"
    
    // buttons.forEach((button)=>{button.addEventListener('click',()=>{
    //     game();
    // })
    // })
    
    // function playRound(playerSelection, computerSelection) {
        
    //     if (playerSelection === computerSelection) {
    //         output.textContent= "It's a tie!";
    //     } else if (
    //         (playerSelection === 'rock' && computerSelection === 'scissors') ||
    //         (playerSelection === 'scissors' && computerSelection === 'paper') ||
    //         (playerSelection === 'paper' && computerSelection === 'rock')
    //         ) {
    //             pscore++;
    //             output.textContent= `You win! ${playerSelection} beats ${computerSelection}.`;
    //         } else {
    //             cscore++;
    //             output.textContent= `You lose! ${computerSelection} beats ${playerSelection}.`;
    //         }
    //     }
        
    //     function game() {
    //         while (cscore<=5 && pscore<=5) {
    //             const playerSelection= button.id;
    //             const computerSelection = computerPlay();
    //             playRound(playerSelection, computerSelection);
    //             player.textContent = `Player Score: ${pscore}`;
    //             computer.textContent = `Computer Score: ${cscore}`;
                
    //         if(cscore===5 || pscore===5){
    //             break;
    //         }
    //     }
        
    //     if(cscore===5){
    //       output.textContent = "You Won the Game! Congrats";
    //       pscore = 0;
    //       cscore = 0;
    //     }
    //     else if(pscore===5){
    //       output.textContent = "You Lost the game:/ Maybe find something else to do?"
    //       pscore = 0;
    //       cscore = 0;
    //     }
    // }