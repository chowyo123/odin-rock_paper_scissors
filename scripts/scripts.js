
const TIE = 'tie';
const WIN = 'win';
const LOSS = 'loss';

// receives "rock", "paper", or "scissors" from user using prompt() and sanitizes it
function getPlayerSelection() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    return playerSelection.toLowerCase();
}

// return random selection of rock, paper, or scissors
function computerPlay() {
    // generate random number from 1 to 3, since we have 3 possible answers
    const generatedNumber = Math.floor(Math.random() * 3 + 1);
    switch(generatedNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default: 
            console.log(`Unexpected error: generated random number outside expected range ${generatedNumber}`);
    }
}

// Returns string declaring the winner of round
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            return computerSelection === "rock" ? TIE
                 : computerSelection === "paper" ? LOSS
                 : WIN;     //scissors
            break;
        case "paper":
            return computerSelection === "rock" ? WIN
                 : computerSelection === "paper" ? TIE
                 : LOSS;    //scissors
            break;
        case "scissors":
            return computerSelection === "rock" ? LOSS
                 : computerSelection === "paper" ? WIN
                 : TIE;     //scissors
            break;
        default:
            console.log(`Unexpected error: playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`);
    }
} 

// Returns winner of 5 rounds of rock paper scissors, prompting user for input each round
// keeps count of each round
// logs to console the winner at end of each round
function game() {
    let gamesPlayed = 0;
    let gamesPlayerWon = 0;
    let gamesComputerWon = 0;
    let gamesTied = 0;
    let playerSelection;
    let computerSelection;
    let roundResult;

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerSelection();

        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            alert("Invalid selection. Must enter rock, paper, or scissors!");
            playerSelection = getPlayerSelection();
        }

        computerSelection = computerPlay();

        if (!computerSelection && !playerSelection) {
            console.log("We\'ve got a problem. Computer selection or player selection does not contain a value");
            return
        }

        roundResult = playRound(playerSelection, computerSelection);
        
        gamesPlayed++;

        switch(roundResult) {
            case WIN:
                gamesPlayerWon++;
                console.log(`You win this round. Computer chose ${computerSelection}, and you chose ${playerSelection}.`);
                break;
            case LOSS:
                gamesComputerWon++;
                console.log(`You lose this round. Computer chose ${computerSelection}, and you chose ${playerSelection}.`);
                break;
            case TIE:
                gamesTied++;
                console.log(`Tied round. Computer chose ${computerSelection} and you chose ${playerSelection}.`);
                break;
            default:
                console.log("Something unexpected went wrong");
        }
    }

    console.log(`Final score:`);
    console.log(`Games won: ${gamesPlayerWon}`);
    console.log(`Games lost: ${gamesComputerWon}`);
    console.log(`Games tied: ${gamesTied}`);

    return gamesPlayerWon > gamesComputerWon ? WIN
         : gamesPlayerWon < gamesComputerWon ? LOSS
         : TIE;
}

// Alert user of the result
function notifyResult(result) {
    let message = result === WIN ? "You won!" 
                : result === LOSS ? "You lost" 
                : "Tie";
    
    alert(message);
}

