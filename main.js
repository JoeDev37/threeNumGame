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

const idMap = {
  one: 'numOne',
  two: 'numTwo',
  three: 'numThree'
};

document.addEventListener('DOMContentLoaded', () => {

  alert(`click "S" to start the game`);

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
    const clickedDivId = e.currentTarget.id;   
    const numId = idMap[clickedDivId];        

    if (spin[numId]) {
      clearInterval(spin[numId]);
      spin[numId] = null;
      console.log(`stopped, ID: ${numId}`);
    } else {
      console.log(`did not work, ID: ${numId}`);
    }
  });
});

document.addEventListener('click', () => {
  if (spin[numOne] === spin[numTwo] && spin[numTwo] === spin[numThree]) {

    const div = document.createElement('div');
    // const newText = document.createTextNode('it is working');
    // div.textContent = 'it is working!';
    // document.body.appendChild(div)
    console.log(div.textContent = 'it is working!');

    // const b = document.body.insertBefore(div);

  } else  {
    const div = document.createElement('div');
    // const newText = document.createTextNode('it is not working');
    // div.textContent = 'it is not working!';
    // document.body.appendChild(newText)

    console.log(div.textContent = 'it is not working!');

    // document.body.insertBefore(div);
  }

})
