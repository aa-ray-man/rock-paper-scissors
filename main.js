// function to hide start div and show game div
function hideStartShowGame() {

    let startElement = document.querySelector('.start');
    let gameElement = document.querySelector('.game');

    if (startElement) {
      startElement.style.display = 'none';
      gameElement.style.display = 'block';
    }

  }


  
// function computerPlay() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// let cscore=0 , pscore=0;

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     computerSelection = computerSelection.toLowerCase();
    
//     if (playerSelection === computerSelection) {
//         return "It's a tie!";
//     } else if (
//         (playerSelection === 'rock' && computerSelection === 'scissors') ||
//         (playerSelection === 'scissors' && computerSelection === 'paper') ||
//         (playerSelection === 'paper' && computerSelection === 'rock')
//         ) {
//             pscore++;
//             return `You win! ${playerSelection} beats ${computerSelection}.`;
//         } else {
//             cscore++;
//         return `You lose! ${computerSelection} beats ${playerSelection}.`;
//     }
// }

// function game() {
//     while (cscore<=5 && pscore<=5) {
//         const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));

//         if(cscore===5 || pscore===5){
//             break;
//         }
//     }
    
//     if(cscore===5){
//         console.log(`You lose!\ncomputer= ${cscore} You= ${pscore}`)
//     }
//     else if(pscore===5){
//         console.log(`You win!\ncomputer= ${cscore} You= ${pscore}`)
//     }
// }

// game();

