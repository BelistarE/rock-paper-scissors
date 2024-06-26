let humanScore = 0;
let computerScore = 0;
let ties = 0;
//hover
// Select all elements with class .pImg
const images = document.querySelectorAll('.pImg');

// Loop through each image and add event listeners
images.forEach(image => {
    // Add event listener for mouseover (hover)
    image.addEventListener('mouseover', function() {
        // Enlarge the image on hover
        this.style.width = '180px'; // Adjust width to desired size
    });

    // Add event listener for mouseout (hover out)
    image.addEventListener('mouseout', function() {
        // Shrink the image back to its original size on mouse leave
        this.style.width = '160px'; // Return to initial width
    });
});

//hover on reset
const resetButton = document.querySelector('.reset');

    resetButton.addEventListener('mouseover', function() {
        this.style.width = '90px';
        this.style.letterSpacing = '3px';
    });

    resetButton.addEventListener('mouseout', function(){
        this.style.width = '70px';
        this.style.letterSpacing = '.5px';
    });


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
    displayChoices(humanChoice, computerChoice);
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

function displayChoices(humanChoice, computerChoice) {
    document.querySelector('.humanDisplay').textContent = `You choose: ${humanChoice}`;
    document.querySelector('.computerDisplay').textContent = `Computer chooses: ${computerChoice}`;
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
