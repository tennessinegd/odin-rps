const buttons = document.querySelectorAll(".buttons>button");
for (let button of buttons) {
    button.addEventListener("click", e => {
        const result = playRound(e.target.textContent, getComputerChoice());
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
        return `You win! ${toTitleCase(playerSelection)} beats ${computerSelection.toLowerCase()}!`;
    } else if (playerSelection === "scissors" && computerSelection === "rock"
            || playerSelection === "paper" && computerSelection === "scissors"
            || playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! ${toTitleCase(computerSelection)} beats ${playerSelection.toLowerCase()}!`;
    } else if (playerSelection === computerSelection) {
        return "It's a draw! Nobody wins!";
    } else {
        return;
    }
}

const resultsParagraph = document.querySelector("#results");
function game(result) {
    resultsParagraph.textContent = result;
}

game();