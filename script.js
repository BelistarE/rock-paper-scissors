console.log("Would you like to play rock paper scissors?")

function getComputerChoice() {
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

// Example usage:
const humanChoice = getHumanChoice();
console.log("Human choice:", humanChoice);

console.log("Computer choice:" , getComputerChoice());

let humanScore = 0
let computerScore = 0
