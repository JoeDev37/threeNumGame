console.log('Hello, World');

const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');
const numThree = document.getElementById('numThree');

// const round = document.getElementById('round');
const restartBtn = document.getElementById('restart');
const nextRound = document.getElementById('nextRound');

// const lol2 = document.getElementById('lol2');

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


document.addEventListener('DOMContentLoaded', () => {

  lol2.textContent = "Click, get 3 equal Numbers";

  // round = 1;

  // alert(`click "S" to start the game`);

    function justStart() {
        Object.keys(spin).forEach(id => {
          if (spin[id] !== null) return;

          spin[id] = setInterval(() => {
            const element = document.getElementById(id);
            if (element) {
              element.textContent = Math.floor(Math.random() * 10);
            }
          }, 800);
        });
      }

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
      console.log(`stopped, ID: ${numId}`);

      if (!spin.numOne && !spin.numTwo && !spin.numThree) {
        checkNums();
      }

    } else {
      console.log(`did not work, ID: ${numId}`);
    }
  });
});



///////////////////////////  IF THREE NUMBERS ARE EQUAL

const gameRound = document.getElementById('round');
const msg = document.getElementById('lol2');
let round = 1;

// Set default round at start
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

    nextRound.style.display = 'block';

    // Update message and round number
    msg.textContent = "You Have Won :)";
    round++;
    gameRound.textContent = round;

    console.log('you won the game');
  }
}











// document.addEventListener('click', () => {
//   if (spin[numOne] === spin[numTwo] && spin[numTwo] === spin[numThree]) {

//     const div = document.createElement('div');
    // const newText = document.createTextNode('it is working');
    // div.textContent = 'it is working!';
    // document.body.appendChild(div)
    // console.log(div.textContent = 'it is working!');

    // const b = document.body.insertBefore(div);

  // } else  {
  //   const div = document.createElement('div');
    // const newText = document.createTextNode('it is not working');
    // div.textContent = 'it is not working!';
    // document.body.appendChild(newText)

    // console.log(div.textContent = 'it is not working!');

    // document.body.insertBefore(div);
//   }

// })
