
//choices are bulbasaur charmander and squirtle

let bulb = 'Bulbasaur',
    char = 'Charmander',
    squir = 'Squirtle';

let computerChoice,
    playerChoice;
//get computer choice which the user and put it in a variable

function getComputerChoice() {
    let rate = Math.floor(Math.random()*100) + 1;
    if (rate <= 33) {computerChoice = bulb;
    } else if (rate >= 67) {computerChoice = char;
    } else {computerChoice = squir;}
}



//get user choice and input it in a variable

function pChoice() { 
let pSelection = prompt('Choose your Pokemon! \n Bulbasaur, Charmander, or Squirtle?', '');

    if(pSelection == 'Squirtle') {
        playerChoice = squir
    } else if(pSelection == 'Bulbasaur') {
        playerChoice = bulb
    } else if (pSelection == 'Charmander') {
        playerChoice = char
    } else {playerChoice = ''};
}


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
       
    switch (true) {
        case (playerChoice == bulb && computerChoice == bulb):
          return alert('It\'s a draw! We both chose Bulbasaur!');
            break;
        case (playerChoice == bulb && computerChoice == char):
            (computerScore++);
           return alert('Charmander, Use ember! You Lose!');
            break;
        case (playerChoice == bulb && computerChoice == squir):
            (userScore++);
           return alert('Oh no! Bulbasaur used razor leaf! You Win!'); 
            break;
        case (playerChoice == squir && computerChoice == squir):
            return alert('It\'s a draw! We both chose Suirtle!');
            break;
        case (playerChoice == squir && computerChoice == bulb):
            (computerScore++);
            return alert('Bulbasaur use razor leaf! You Lose!'); 
            break;
        case (playerChoice == squir && computerChoice == char):
            (userScore++);
            return alert('Oh no! Squirtle used water gun! You Win!');
            break;
        case (playerChoice == char && computerChoice == char):
            return alert('It\'s a draw! We both chose Charmander.');
            break;
        case (playerChoice == char && computerChoice == squir):
            (computerScore++);
            return alert('Squirtle, use water gun! You Lose!.'); 
            break;
        case (playerChoice == char && computerChoice == bulb):
            (userScore++);
            return alert('Oh no! Charmander used ember! You Win!');
            break;
        default:
            return alert('Please select among the choices');
            break;
    }
    
}


//play 5 times, if user won the most, overall winner
// if computer won the mose, overall loser
if (confirm('Do you want to battle?' )) {
    game();
} else {alert('That\s sad...')};


function game() {
    for (let i = 0; i <= 4; i++) {
       pChoice();
       getComputerChoice();
       playRound(playerChoice, computerChoice);

//show user scoreboard
        alert(`That\s ${userScore}, ${computerScore}`)
       
    } retry();
    
}




//choice to reset game or close
function retry() {
    if (userScore == computerScore) {
        if (confirm('Nice Battle! Do you want to clash again?')) {
            userScore = 0, computerScore = 0, game();
        }   else {alert('Ok then, I\'m going to train to get better!');}
    } 
    else if(userScore >= computerScore) {
        if(confirm('Congratulation!!! \n Do you want to battle again?')) {
            userScore = 0, computerScore = 0, game();
        } else {alert('You should try for the Pokemon League!');}
    } 
    else if (userScore <= computerScore){ 
         if(confirm('I Won! want to batlle again?')) {
            userScore = 0, computerScore = 0, game();
            } else {alert('Thanks for the battle! I\'m training for the Pokemon League!');}
    } else {alert('that\'s sad...');}
    
}




