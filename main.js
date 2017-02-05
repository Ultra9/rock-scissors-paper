var getUserChoice = function(){
  var userInput = prompt('Rock paper scissors?');
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
   return userInput;
 }
 else {
  console.log('Error');
};
};

var getComputerChoice = function(){
  var andomNumber = Math.floor(Math.random()*2);
  switch(andomNumber){
    case 0: return 'rock';
    break;
    case 1: return 'paper';
    break;
    case 2: return 'scissors';
    break;
  };
};

var determineWinner = function(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'The game was a tie';
  };
  if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'You won!';
    }else{
      return 'computer won!';
    }
  };
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
     return 'computer won!';
   }else{
     return 'You won!'  ;
   };        
 };
 if(userChoice === 'scissors'){
   if(computerChoice === 'rock'){
    return 'computer won!';
  }else{
   return 'You won!';
 };     
};
if(userChoice === 'bomb'){
  if(computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors'){
   return 'YOU WON OF COURSE!!!';
 };      
};
};

var playGame = function(){
  var userChoice = getUserChoice();  
  var computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};


playGame();