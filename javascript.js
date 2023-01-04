//variable for scoreboard

let userScore = 0,
  computerScore = 0;
(rounds = 1), (i = 0);

// context
const context = document.querySelector("div#context");
const instructor = document.createElement("div");
instructor.classList.add("instructor");
instructor.textContent = "Hey Trainer! Want to battle? \r\n";
instructor.textContent += " \r\n";
instructor.textContent +=
  "Charmander beats Bulbasaur, Bulbasaur beats Squirtle \r\n";
instructor.textContent += "and Squirtle beats Charmander\r\n";
instructor.textContent += " \r\n";
instructor.textContent += "Choose your pokemon and let`s play for 5 rounds!\n";

context.appendChild(instructor);
const confirm = document.createElement("div");
confirm.classList.add("confirm");
const body = document.querySelector("body");
const selection = document.querySelector("#selection");

// element for score board
const gameui = document.querySelector("#game");
const scoreBoard = document.createElement("div");
const playerScore = document.createElement("div");
const compScore = document.createElement("div");
const round = document.createElement("div");

// add attribute for scoreboard

scoreBoard.classList.add("board");
playerScore.classList.add("scores");
compScore.classList.add("scores");
round.classList.add("scores");

// append scoreboard into the html file

scoreBoard.appendChild(playerScore);
scoreBoard.appendChild(compScore);
gameui.appendChild(round);
gameui.appendChild(scoreBoard);

// show the rounds and score
round.textContent = `Round ${rounds}`;
playerScore.textContent = `Player Score = ${userScore}`;
compScore.textContent = `Computer Score = ${computerScore}`;

//choices are bulbasaur charmander and squirtle

let bulb = "Bulbasaur",
  char = "Charmander",
  squir = "Squirtle";

//variable for choices
let computerChoice, playerChoice;

//get computer choice which the user and put it in a variable
function getComputerChoice() {
  let rate = Math.floor(Math.random() * 3);
  console.log(rate);
  if (rate === 0) {
    computerChoice = bulb;
  } else if (rate === 2) {
    computerChoice = char;
  } else {
    computerChoice = squir;
  }
  instructor.textContent = `My Choice is ${computerChoice}\r\n`;
}

//user selects by pressing the button
const charmander = document.querySelector(".charmander");
const squirtle = document.querySelector(".squirtle");
const bulbasaur = document.querySelector(".bulbasaur");

//buttons to restart the game
const yesbtn = document.createElement("button");
yesbtn.textContent = "Sure!";
const nobtn = document.createElement("button");
nobtn.textContent = "I'm Busy!";
yesbtn.classList.add("confirmbtn");
nobtn.classList.add("confirmbtn");

charmander.addEventListener("click", () => {
  if (i < 5) {
    playerChoice = char;
    game();
  } else if (i >= 5) {
    instructor.textContent = "Do you want to Battle again?";
    context.appendChild(confirm);
    confirm.appendChild(yesbtn);
    confirm.appendChild(nobtn);
  }
});

squirtle.addEventListener("click", () => {
  if (i < 5) {
    playerChoice = squir;
    game();
  } else if (i >= 5) {
    instructor.textContent = "Do you want to Battle again?";
    context.appendChild(confirm);
    confirm.appendChild(yesbtn);
    confirm.appendChild(nobtn);
  }
});

bulbasaur.addEventListener("click", () => {
  if (i < 5) {
    playerChoice = bulb;
    game();
  } else if (i >= 5) {
    instructor.textContent = "Do you want to Battle again?";
    context.appendChild(confirm);
    confirm.appendChild(yesbtn);
    confirm.appendChild(nobtn);
  }
});

//compare user choice and computer choice
//user choice:bulbasaur vs
//charmander=loser || squirtle=winner || bulbasaur=draw
//user choice:charmander vs
//computer choice:squirtle=loser || bulbasaur=winner || charmander=draw
//user choice:squirlte vs
//computer choice:bulbasaur=loser || charmander=winner || squiretle=draw
function playRound(playerChoice, computerChoice) {
  switch (true) {
    case playerChoice == bulb && computerChoice == bulb:
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "It's a draw! We both chose Bulbasaur!";
      break;
    case playerChoice == bulb && computerChoice == char:
      computerScore++;
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "Charmander, Use ember! You Lose!";
      break;
    case playerChoice == bulb && computerChoice == squir:
      userScore++;
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "Oh no! Bulbasaur used razor leaf! You Win!";
      break;
    case playerChoice == squir && computerChoice == squir:
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "It's a draw! We both chose Suirtle!";
      break;
    case playerChoice == squir && computerChoice == bulb:
      computerScore++;
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "Bulbasaur use razor leaf! You Lose!";
      break;
    case playerChoice == squir && computerChoice == char:
      userScore++;
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "Oh no! Squirtle used water gun! You Win!";
      break;
    case playerChoice == char && computerChoice == char:
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "It's a draw! We both chose Charmander.";
      break;
    case playerChoice == char && computerChoice == squir:
      computerScore++;
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "Squirtle, use water gun! You Lose!";
      break;
    case playerChoice == char && computerChoice == bulb:
      userScore++;
      playerScore.textContent = `Player Score = ${userScore}`;
      compScore.textContent = `Computer Score = ${computerScore}`;
      instructor.textContent += "Oh no! Charmander used ember! You Win!";
      break;
    default:
      instructor.textContent += "Please select among the choices";
      break;
  }
}

//function to call on the game
function game() {
  getComputerChoice();
  playRound(playerChoice, computerChoice);
  win();
}

//choice to reset game or close
function win() {
  if (rounds < 5) {
    rounds++;
    i++;
    round.textContent = `Round ${rounds}`;
  } else if (rounds == 5) {
    context.appendChild(confirm);
    confirm.appendChild(yesbtn);
    confirm.appendChild(nobtn);
    i++;

    if (userScore == computerScore) {
      instructor.textContent +=
        "\r\n \r\nNice Battle! \nDo you want to clash again?";
    } else if (userScore >= computerScore) {
      instructor.textContent +=
        "\r\n \r\nCongratulation!!! \nDo you want to battle again?";
    } else if (userScore <= computerScore) {
      instructor.textContent +=
        "\r\n \r\nI Won the Game!\nDo you want to battle again?";
    }
  }
}

yesbtn.addEventListener("click", retry);

function retry() {
  (userScore = 0), (computerScore = 0), (rounds = 1), (i = 0);
  playerScore.textContent = `Player Score = ${userScore}`;
  compScore.textContent = `Computer Score = ${computerScore}`;
  round.textContent = `Round ${rounds}`;
  instructor.textContent = "Remember \r\n";
  instructor.textContent +=
    "Charmander beats Bulbasaur, Bulbasaur beats Squirtle \r\n";
  instructor.textContent += "and Squirtle beats Charmander\r\n";
  confirm.removeChild(yesbtn);
  confirm.removeChild(nobtn);
}

nobtn.addEventListener("click", () => {
  confirm.removeChild(yesbtn);
  confirm.removeChild(nobtn);
  if (i < 6) {
    i++;
  }
  if (userScore == computerScore) {
    instructor.textContent = "Ok then, I'm going to train to get better!";
  } else if (userScore >= computerScore) {
    instructor.textContent = "You should try for the Pokemon League!";
  } else if (userScore <= computerScore) {
    instructor.textContent =
      "Thanks for the battle! I'm training for the Pokemon League!";
  }
});
