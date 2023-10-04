const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'batu' || userInput === 'gunting' || userInput == 'kertas'){
        return userInput;
    } else {
        console.log('bukan gunting,batu,kertas');
    }
};

function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
      case 0:
        return 'batu';
        break;
      case 1:
        return 'gunting';
        break;
      case 2:
        return 'kertas';
        break;
        };
  }

function determineWinner(userChoice,computerChoice){
    if (userChoice === computerChoice){
        return 'seri bang!!';
    } else if (userChoice === 'batu', computerChoice === 'gunting'){
        return 'Selamat kamu menang!';
    } else if (userChoice === 'gunting', computerChoice === 'kertas'){
        return 'Selamat kamu menang!';
    } else if (userChoice === 'kertas', computerChoice === 'batu'){
        return 'Selamat kamu menang!';
    } else if (userChoice === 'batu', computerChoice === 'kertas'){
        return 'Sayang sekali kamu kalah!';
    } else if (userChoice === 'gunting', computerChoice === 'batu'){
        return 'Sayang sekali kamu kalah!';
    } else if (userChoice === 'kertas', computerChoice === 'gunting'){
        return 'Sayang sekali kamu kalah!';
    } else {console.log('error bang')}};
    
function playgames() {
    var userChoice = getUserChoice('gunting');
    var computerChoice = getComputerChoice()
    console.log(`kamu mengeluarkan ${userChoice}`);
    console.log(`komputer mengeluarkan ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
};
playgames();