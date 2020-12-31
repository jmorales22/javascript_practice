const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');

function handleClick() {
    console.log('it got clicked')
}

const hooray = () => console.log('Hooray')

buttonOne.addEventListener('click', handleClick);

buttonTwo.addEventListener('click', hooray);

//Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
    console.log('Buying Item')
}

buyButtons.forEach(button => {
    button.addEventListener('click', buyItem )
})