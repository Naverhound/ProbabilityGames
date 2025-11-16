options = ['rock', 'paper', 'scissors'];
playing = false;
function startBattle(playerSelection) {
  playing = true;
  document.querySelector('.options-container').classList.add('hidden');
  document.querySelector('.battle-container').classList.remove('hidden');
  document.querySelector('.player-choice').classList.add('slideFromLeft');
  document.querySelector('.computer-choice').classList.add('slideFromRight');
  setTimeout(() => {
    var randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    document.querySelector('.player-choice').classList.remove('slideFromLeft');
    document.querySelector('.computer-choice').classList.remove('slideFromRight');
    document.getElementById('player-choice-image').src = "./img/" + playerSelection + ".png";
    document.getElementById('computer-choice-image').src = "./img/" + computerChoice + ".png";
    
  }, 2000);
}

function decideWinner(computerChoice,playerChoice){
  var winner = '';
  return winner;
}