console.log("Would you like to play rock paper scissors?")

let humanScore = 0
let computerScore = 0

function checkWins(humanScore,computerScore){
    return Math.max(humanScore, computerScore);

}

function playRound(humanChoice, computerChoice) {
    let roundWinner;
    let wins = checkWins(humanScore, computerScore);
    if(wins >= 5){
        return;
    }
    // Determine the round winner based on choices
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        roundWinner = 'human';
    
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
               (computerChoice === 'paper' && humanChoice === 'rock') ||
               (computerChoice === 'scissors' && humanChoice === 'paper')) {
        roundWinner = 'computer';
        
    } else {
        roundWinner = 'tie';
    }

     // Log the result of the round
     if (roundWinner === 'human') {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        // Increment humanScore
        humanScore++;
    } else if (roundWinner === 'computer') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        // Increment computerScore
        computerScore++;
    } else {
        console.log("It's a tie! Both chose " + humanChoice);
    }

    //display scores
    console.log("Scores:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    
    tallyWins(humanScore, computerScore);
  }

  function tallyWins(humanScore, computerScore){
    const hScore = humanScore;
    const cScore = computerScore;
    document.querySelector('.playerScore').textContent = `Score: ${hScore}`;
    document.querySelector('.computerScore').textContent = `Score: ${cScore}`;

  }

function getComputerChoice() {

    //TODO - Update DOM with computer selection
    let choice = Math.random();
    if (choice >= 0 && choice <= (1/3)) {
        return "rock";
    } else if (choice > (1/3) && choice <= (2/3)) {
        return "paper";
    } else if (choice > (2/3) && choice <= 1) {
        return "scissors";
    } else {
        return "error"
    }
    
}

function getHumanChoice() {
    let userInput;
    //TODO get user input via buttons

    

    return userInput;
}



function playGame(){

    //play the game until someone wins 5 times
    let imgs = document.querySelectorAll('img');
        imgs.forEach((img) =>
            img.addEventListener(('click'),() => {
                if(img.id){
                    playRound(img.id);
                }
            })
        );
    

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log("Human choice:", humanSelection);

    console.log("Computer choice:" , computerSelection);
    playRound(humanSelection, computerSelection);
    
}


function resetGame(){
    //reset game
}

playGame();