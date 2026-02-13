
console.log('Hello, World');

const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');
const numThree = document.getElementById('numThree');

const round = document.getElementById('round');

const restartBtn = document.getElementById('restart');

let gameInterval = null;

let spin = {
    numOne: null,
    numTwo: null,
    numThree: null
}

document.addEventListener('DOMContentLoaded', ()=> {

    // document.addEventListener('keydown', (event) => {

    //     if (event.key === 's' || event.key === 'S') {

    //         if(gameInterval) return;

    //         const numElements = document.querySelectorAll('.num');

    //         gameInterval = setInterval(() => {
    //             numElements.forEach(num => {
    //                 num.textContent = Math.floor(Math.random() * 10)
    //             })
    //         }, 700);
    //     }
    // })




    document.addEventListener('keydown', (event) => {
        if (event.key === 's' || event.key === 'S') {

            Object.keys(spin).forEach(id => {
                if (spin[id] !== null) return;

                spin[id] = setInterval(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.textContent = Math.floor(Math.random() * 10)
                    }
                }, 700)
            })
        }
    })






    //////////////////////////////////////////////// 3rd attempt  (alomst worked)


    // document.querySelectorAll('.child').forEach(child => {
    //     child.addEventListener('click', (e) => {
    //         e.target.clearInterval(gameInterval);
    //         console.log('stopped')
    //     })
    // })


})

document.querySelectorAll('.child').forEach(child => {
    child.addEventListener('click', (e) => {
        const clickedId = e.currentTarget.id;

        // clearInterval(spin[clickedId]);

        // spin[clickedId] = null;

        // console.log(`stopped id: ${clickedId}`)

        if (spin[clickedId]) {
            clearInterval(spin[clickedId]);
            spin[clickedId] = null;
            console.log(`stopped, ID: ${clickedId}`)
        } else {
            console.log(`did not work, ID: ${clickedId}`)
        }
    })
})