const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    console.log(possibleChoices.length);
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber == 1) {
        computerChoice = 'ROCK';
    }
    if (randomNumber == 2) {
        computerChoice = "PAPER";
    }
    if (randomNumber == 3) {
        computerChoice = "SCISSORS";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Its a draw";
    }
    if (computerChoice === 'ROCK' && userChoice === "PAPER") {
        result = "You Win!";
    }
    if (computerChoice === "ROCK" && userChoice == "SCISSORS") {
        result = "You Lost!";
    }
    if (computerChoice == "PAPER" && userChoice == "ROCK") {
        result = "You Lost!";
    }
    if (computerChoice == "PAPER" && userChoice == "SCISSORS") {
        result = "You Win!";
    }

    if (computerChoice === "SCISSORS" && userChoice == "PAPER") {
        result = "You Lost!";
    }
    if (computerChoice === "SCISSORS" && userChoice == "ROCK") {
        result = "You Win!";
    }
    resultDisplay.innerHTML = result;
}