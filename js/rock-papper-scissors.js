const options = ['rock', 'paper', 'scissors'];
var score = [0, 0, 0];//player wins , computer wins, draws
function startBattle(playerSelection) {
  document.getElementById('selectionArea').classList.add('hidden');
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
    decideWinner(computerChoice, playerSelection);
  }, 2000);
}

function decideWinner(computerChoice, playerChoice) {
  const playerIndex = options.indexOf(playerChoice);
  const computerIndex = options.indexOf(computerChoice);
  if (playerIndex == computerIndex) {//draw
    document.getElementById('roundWinner').innerHTML = '¡Empate!';
    score[2] += 1
    document.getElementById('gameDraws').innerHTML = score[2];
  } else if ((computerIndex + 1) % 3 === playerIndex) {//player wins
    document.getElementById('roundWinner').innerHTML = '¡Tú Ganas!';
    score[0] += 1
    document.getElementById('playerWins').innerHTML = score[0];
  } else {//computer wins`
    document.getElementById('roundWinner').innerHTML = 'La IA te dominó..';
    score[1] += 1
    document.getElementById('computerWins').innerHTML = score[1];
  }
}
function playAgain() {
  document.getElementById('player-choice-image').src = "./img/rock.png";
  document.getElementById('computer-choice-image').src = "./img/rock.png";
  document.getElementById('roundWinner').innerHTML = '';
  document.getElementById('selectionArea').classList.remove('hidden');
  document.querySelector('.battle-container').classList.add('hidden');
}