// function computerPlay(compChoice){
//     let choiceNum = Math.floor(Math.random() * 3);
//     if (choiceNum == 0){
//         compChoice.Value = "rock";
//     }
//     else if (choiceNum == 1){
//         compChoice.Value = "paper";
//     }
//     else if(choiceNum == 2){
//         compChoice.Value = "scissor";
//     }
//     console.log(choiceNum);
//     return choiceNum;
// }
// function gameplay(compChoice,playerchoice){
//     let playerchoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
//     let compChoice = computerPlay();
//     let result;
//     if(compChoice==playerchoice){
//         result = "Its  tie!";
//         return result;
//     }
//     else if(compChoice==rock && playerchoice==scissor || compChoice==paper && playerchoice==rock || compChoice==scisssor && playerchoice==paper ){
//         result = "You win!";
//         return result;
//     }
//     else if(compChoice==rock && playerchoice==paper || compChoice==paper && playerchoice==scissor || compChoice==scisssor && playerchoice==rock){
//         result = "You lose!";
//         return result;
//     }
// }
// function scorekeeping(gameplay){
//     let cscore=0 , pscore=0;
//     if(result = "You win!"){
//         pscore++;
//     }
//     else if(result = "You lose!"){
//         cscore++;
//     }
// }
// function game(computerPlay,gameplay,scorekeeping){
//     for(const i=0;i<5;i++){
//         computerPlay();
//         gameplay();
//         scorekeeping();
//         if (cscore==5 || pscore==5){
//             break;
//         }
//     }
//     if(cscore>pscore){
//         console.log("You lose the entire match")
//     }
//     else{
//         console.log("You win the entire match")
//     }
// }
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let cscore=0 , pscore=0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
        ) {
            cscore++;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            pscore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    while (cscore<=5 && pscore<=5) {
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

        if(cscore===5 || pscore===5){
            break;
        }
    }
    
    if(cscore===5){
        console.log("You win! Computer loses.")
    }
    else if(pscore===5){
        console.log("You lose! Computer win.")
    }
}

game();