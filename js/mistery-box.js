const boxesList=['b1-content','b2-content','b3-content']
var rdmIndex = Math.floor(Math.random() * boxesList.length);
var rightBox = boxesList[rdmIndex];
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
var aciertos = 0;
var intentos = 0;
const pointsSpan = document.getElementById('pointsSpan');
window.onload = function() {
  console.log("The entire page and all its resources have fully loaded.");
  shuffleRightBox();
  pointsSpan.innerHTML = aciertos;
};
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        this.disabled = true;
        intentos += 1;
        evaluateSelection(this.id,this);
        // console.log(`Checkbox with ID "${this.id}" is now checked.`);
      } else {
        // console.log(`Checkbox with ID "${this.id}" is now unchecked.`);
      }
    });
});
function shuffleRightBox() {  
  uncheckAllCheckboxes();
  renableCheckboxes();
  rdmIndex = Math.floor(Math.random() * boxesList.length);
  rightBox = boxesList[rdmIndex];
  loadBoxes();
}

function resetGame() {
  aciertos = 0;
  pointsSpan.innerHTML = aciertos;
  shuffleRightBox();
}
function loadBoxes() {
  var allBoxes = document.getElementsByClassName('box-content');
  for (const box of allBoxes) {
    box.innerHTML = '💩';
  }
  document.getElementById(rightBox).innerHTML = '💎';
}
function uncheckAllCheckboxes() {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}
function evaluateSelection(boxSelected,box) {
  if (boxSelected.split('-')[0] === rightBox.split('-')[0]) {
    setTimeout(() => {
      aciertos += 1;
      intentos = 0;
      pointsSpan.innerHTML = aciertos;
      alert('ganasteeee')
      shuffleRightBox()
    }, 500);
  } else {
    if (intentos >= 2) {
      intentos = 0;
      setTimeout(() => {
        resetGame();
        // shuffleRightBox();  
      }, 550);
      
    };
  }
}
function renableCheckboxes() {
  checkboxes.forEach(checkbox => {checkbox.disabled = false;})
}