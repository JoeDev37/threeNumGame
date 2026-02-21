console.log('Hello, World');

const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');
const numThree = document.getElementById('numThree');

const restartBtn = document.getElementById('restart');
const nextRound = document.getElementById('nextRound');

let spin = {
  numOne: null,
  numTwo: null,
  numThree: null
};

const idMap = {
  one: 'numOne',
  two: 'numTwo',
  three: 'numThree'
};

let speed = 1000;


function justStart() {
    Object.keys(spin).forEach(id => {
      if (spin[id] !== null) return;

      spin[id] = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          element.textContent = Math.floor(Math.random() * 10);
        }
      }, speed);
    });
  }

document.addEventListener('DOMContentLoaded', () => {

  restartBtn.style.display = "none";

  lol2.textContent = "Click, get 3 equal Numbers";

  justStart();

  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 's') {
      justStart();
    }
  })

  restartBtn.addEventListener('click', () => {
    justStart();
  })

});

document.querySelectorAll('.child').forEach(child => {
  child.addEventListener('click', (e) => {
    const clickedDivId = e.currentTarget.id;   
    const numId = idMap[clickedDivId];        

    if (spin[numId]) {
      clearInterval(spin[numId]);
      spin[numId] = null;

      if (!spin.numOne && !spin.numTwo && !spin.numThree) {
        checkNums();
      }

    }
  });
});



///////////////////////////  IF THREE NUMBERS ARE EQUAL

const gameRound = document.getElementById('round');
const msg = document.getElementById('lol2');
let round = 1;

gameRound.textContent = round;

function checkNums() {
  if (numOne.textContent === numTwo.textContent &&
      numTwo.textContent === numThree.textContent) {

    confetti({
      particleCount: 300,
      spread: 120,
      angle: 90,
      origin: { x: 0.5, y: 0.5 }
    });

    nextRound.style.display = "block";
    restartBtn.style.display = "none";

    msg.textContent = "You Have Won :)";
    msg.style.color = "#a6e3a1";

  } 
  else {
    restartBtn.style.display = "block";
    nextRound.style.display = "none";
    msg.textContent = "You Lost :(";
    msg.style.color = '#f38ba8';
  }
}

///////////////////////////////// NEXT ROUND FUNCTIONALITIES

function nextRoundFunc() {
  nextRound.addEventListener('click', () => {
    speed -= 200;
    round++;
    gameRound.textContent = round;
    msg.textContent = "";
    nextRound.style.display = 'none';
    justStart();
  })
}
nextRoundFunc();

/////////////////////////////////// RESTART BUTTON FUNCTIONALITIES 

restartBtn.addEventListener('click', () => {
  speed = 1000;
  gameRound.textContent = round;
  msg.textContent = "";
  restartBtn.style.display = 'none';
})
