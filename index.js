let computerChoice = ""
// Pedirle al usuario que elija entre piedra papel o tijera
let userChoice = prompt("Please choose Rock, Paper or Scissors").toLowerCase();

// Crear funcion que devuelva aleatoriamente la eleccion de la computadora
function getComputerChoice() {
    let randomChoice = Math.floor( Math.random() * 3 ) + 1;
    if (randomChoice === 1) {
        return computerChoice = "rock";
    } else if (randomChoice === 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

// Crear funcion que compare las elecciones y nombre al ganador

function compareChoices() {
    if        ( (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")) {
                    alert("¡Human Wins!");
    } else if ( (computerChoice === "rock" && userChoice === "scissors") ||
                (computerChoice === "paper" && userChoice === "rock") ||
                (computerChoice === "scissors" && userChoice === "paper")) {
                    alert("¡Computer Wins!"); 
    } else {
                    alert("¡It's a draw!");
    }
}

// Vamo a juga

getComputerChoice();
compareChoices();
alert(computerChoice);

