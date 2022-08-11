let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".moves>img");
for (let button of buttons) {
    button.addEventListener("click", e => {
        const result = playRound(e.target.id, getComputerChoice());
        game(result);
    });
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let selectionIndex = Math.floor(Math.random()*3);
    return choices[selectionIndex];
}

function toTitleCase(string) {
    const firstLetter = string[0].toUpperCase();
    const restOfString = string.slice(1).toLowerCase();
    return firstLetter + restOfString;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors"
     || playerSelection === "scissors" && computerSelection === "paper"
     || playerSelection === "paper" && computerSelection === "rock") {
        return [playerSelection, computerSelection, true];
    } else if (playerSelection === "scissors" && computerSelection === "rock"
            || playerSelection === "paper" && computerSelection === "scissors"
            || playerSelection === "rock" && computerSelection === "paper") {
        return [playerSelection, computerSelection, false];
    } else if (playerSelection === computerSelection) {
        return null;
    } else {
        console.error("Invalid game state");
        return;
    }
}

const resultsParagraph = document.querySelector("#results");
const playerScoreParagraph = document.querySelector("#player-score");
const computerScoreParagraph = document.querySelector("#computer-score");

function game(result) {
    let resultString = "";

    if (result === null) {
        resultString = "It's a draw! Nobody wins!";
        resultsParagraph.textContent = resultString;
        return;
    }

    const player = result[0];
    const computer = result[1];
    const gameWon = result[2];

    if (gameWon) {
        resultString = `You win! ${toTitleCase(player)} beats ${computer}!`
        playerScore += 1;
    } else {
        resultString = `You lose! ${toTitleCase(computer)} beats ${player}!`
        computerScore += 1;
    }

    if (playerScore === 5) {
        gameEnd(true);
        return;
    } else if (computerScore === 5) {
        gameEnd(false);
        return;
    }

    resultsParagraph.textContent = resultString;
    playerScoreParagraph.textContent = playerScore;
    computerScoreParagraph.textContent = computerScore;
}

const body = document.querySelector("body");
function gameEnd(gameWon) {
    while (body.firstElementChild) {
        body.removeChild(body.firstElementChild);
    }
    const endingDiv = document.createElement("div");
    endingDiv.setAttribute("id", "end");
    endingDiv.innerHTML = gameWon ? "You won the game!<br><br><span>Click here or refresh the page to play again.</span>"
                                    : "You lost the game!<br><br><span>Click here or refresh the page to play again.</span>";
    endingDiv.addEventListener("click", () => window.location.reload());
    body.style.justifyContent = "center";
    body.appendChild(endingDiv); 
}