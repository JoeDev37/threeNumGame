
console.log('Hello, World');

const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');
const numThree = document.getElementById('numThree');

const round = document.getElementById('round');

const restartBtn = document.getElementById('restart');


document.addEventListener('DOMContentLoaded', ()=> {

    alert('press the "S" key');

    document.addEventListener('keydown', (event) => {
        // console.log('you pressed: ', event.key);

        if (event.key === 's' || event.key === 'S') {
            const numElements = document.querySelectorAll('.num');

            setInterval(() => {
                numElements.forEach(num => {
                    num.textContent = Math.floor(Math.random() * 10)
                })
            }, 700);
        }
    })

    // const numElements = document.querySelectorAll('.num');

    // setInterval(() => {
    //     numElements.forEach(num => {
    //     num.textContent = Math.floor(Math.random() * 10);
    // });
    // }, 700);
})