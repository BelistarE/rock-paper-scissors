console.log("Would you like to play rock paper scissors?")

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    let roundWinner;

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
    const validChoices = ['rock', 'paper', 'scissors'];

    do {
        // Prompt the user to input their choice
        userInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

        // Check if the user's input is valid
        if (!validChoices.includes(userInput)) {
            // If the input is not valid, display an alert message
            alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
        }
    } while (!validChoices.includes(userInput)); // Continue the loop until valid input is provided

    return userInput;
}


/*
function playGame(){


    for (let i = 0; i < 5; i++) {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log("Human choice:", humanSelection);

    console.log("Computer choice:" , computerSelection);
    playRound(humanSelection, computerSelection);
    }
}
playGame();

*/

