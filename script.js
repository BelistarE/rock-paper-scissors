let humanScore = 0;
let computerScore = 0;
let ties = 0;

function checkWins(humanScore, computerScore) {
    return Math.max(humanScore, computerScore);
}

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
        ties++;
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

    // Display scores in the console
    console.log("Scores:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    console.log("ties: " + ties)

    // Update scores in the HTML
    tallyWins(humanScore, computerScore);

    // Check if someone has won the game
    if (humanScore >= 5) {
        winGame();
    }

    if (computerScore >=5) {
        winGame();
    }
}

function tallyWins(humanScore, computerScore) {
    const hScore = humanScore;
    const cScore = computerScore;
    document.querySelector('.playerScore').textContent = `Score: ${hScore}`;
    document.querySelector('.computerScore').textContent = `Score: ${cScore}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function getComputerChoice() {
    let choice = Math.random();
    if (choice >= 0 && choice <= (1/3)) {
        return "rock";
    } else if (choice > (1/3) && choice <= (2/3)) {
        return "paper";
    } else if (choice > (2/3) && choice <= 1) {
        return "scissors";
    } else {
        return "error";
    }
}
function winGame(){
    if(humanScore >=5){
        alert("you win, you scored 5 points! :3");
    }
    if(computerScore >=5){
        alert("you lose, computer scored 5 points. :( ")
    }
    document.querySelector('.playerScore').textContent = `Score: 0`;
    document.querySelector('.computerScore').textContent = `Score: 0`;
    document.querySelector('.ties').textContent = `Ties: 0`;
    humanScore = 0;
    computerScore = 0;
    ties = 0;
    
}
function playGame() {
    
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
        img.addEventListener('click', () => {
            let humanSelection = img.id; // Assuming img.id is set to 'rock', 'paper', or 'scissors'
            let computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        });
    });
}

function resetGame(){
    document.querySelector('.playerScore').textContent = `Score: 0`;
    document.querySelector('.computerScore').textContent = `Score: 0`;
    document.querySelector('.ties').textContent = `Ties: 0`;
    humanScore = 0;
    computerScore = 0;
    ties = 0;

}
// Initialize the game
playGame();
