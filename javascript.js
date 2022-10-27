//choices are bulbasaur charmander and squirtle

let bulb = 'Bulbasaur',
    char = 'Charmander',
    squir = 'Squirtle';
//get computer choice which the user and put it in a variable

function getComputerChoice() {
    let rate = Math.floor(Math.random()*100) + 1;
    let choice;
    if (rate <= 33) {choice = bulb;
    } else if (rate >= 67) {choice = char;
    } else {choice = squir;}
    return choice;
}

let computerChoice = getComputerChoice();

//get user choice and input it in a variable

const playerSelection = prompt('Choose your Pokemon! \n Bulbasaur, Charmander, or Squirtle?', '');
let playerChoice;

    if(playerSelection == 'Squirtle') {
        playerChoice = squir
    } else if(playerSelection == 'Bulbasaur') {
        playerChoice = bulb
    } else if (playerSelection == 'Charmander') {
        playerChoice = char
    } else {''};

//variable for scoreboard

let userScore = 0,
    computerScore = 0;

//compare user choice and computer choice
//user choice:bulbasaur vs 
//charmander=loser || squirtle=winner || bulbasaur=draw
//user choice:charmander vs 
//computer choice:squirtle=loser || bulbasaur=winner || charmander=draw
//user choice:squirlte vs 
//computer choice:bulbasaur=loser || charmander=winner || squiretle=draw

function playRound(playerChoice, computerChoice) {
    console.log(playerChoice);
    console.log(computerChoice);
        switch (true) {
        case (playerChoice == bulb && computerChoice == bulb):
          return ('It\'s a draw! We both chose Bulbasaur!');
            break;
        case (playerChoice == bulb && computerChoice == char):
            (computerScore++);
           return ('Charmander, Use ember! You Lose!');
            break;
        case (playerChoice == bulb && computerChoice == squir):
            (userScore++);
           return ('Oh no! Bulbasaur used razor leaf! You Win!'); 
            break;
        case (playerChoice == squir && computerChoice == squir):
            return ('It\'s a draw! We both chose Suirtle!');
            break;
        case (playerChoice == squir && computerChoice == bulb):
            (computerScore++);
            return ('Bulbasaur use razor leaf! You Lose!'); 
            break;
        case (playerChoice == squir && computerChoice == char):
            (userScore++);
            return ('Oh no! Squirtle used water gun! You Win!');
            break;
        case (playerChoice == char && computerChoice == char):
            return ('It\'s a draw! We both chose Charmander.');
            break;
        case (playerChoice == char && computerChoice == squir):
            (computerScore++);
            return ('Squirtle, use water gun! You Lose!.'); 
            break;
        case (playerChoice == char && computerChoice == bulb):
            (userScore++);
            return ('Oh no! Charmander used ember! You Win!');
            break;
        default:
            return ('Please select among the choices');
            break;
    }
}

alert(playRound(playerChoice, computerChoice));
alert(playRound(playerChoice, computerChoice));
alert(playRound(playerChoice, computerChoice));

//show user scoreboard
console.log(userScore)
console.log(computerScore)

//play 5 times, if user won the most, overall winner
// if computer won the mose, overall loser

//choice to reset game or close

//Note: 
//Prompt to start the game choose yes or no
//Prompt to continue or cancel
