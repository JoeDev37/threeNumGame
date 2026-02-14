console.log('Hello, World');

const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');
const numThree = document.getElementById('numThree');

const round = document.getElementById('round');
const restartBtn = document.getElementById('restart');

let spin = {
  numOne: null,
  numTwo: null,
  numThree: null
};

// Map parent div IDs to number IDs
const idMap = {
  one: 'numOne',
  two: 'numTwo',
  three: 'numThree'
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 's') {
      Object.keys(spin).forEach(id => {
        if (spin[id] !== null) return;

        spin[id] = setInterval(() => {
          const element = document.getElementById(id);
          if (element) {
            element.textContent = Math.floor(Math.random() * 10);
          }
        }, 700);
      });
    }
  });
});

document.querySelectorAll('.child').forEach(child => {
  child.addEventListener('click', (e) => {
    const clickedDivId = e.currentTarget.id;   // one, two, three
    const numId = idMap[clickedDivId];         // numOne, numTwo, numThree

    if (spin[numId]) {
      clearInterval(spin[numId]);
      spin[numId] = null;
      console.log(`stopped, ID: ${numId}`);
    } else {
      console.log(`did not work, ID: ${numId}`);
    }
  });
});
