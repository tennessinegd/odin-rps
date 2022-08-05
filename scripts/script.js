function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let selectionIndex = Math.floor(Math.random()*3)
    return choices[selectionIndex];
}