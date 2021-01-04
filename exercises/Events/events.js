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

function handleBuyButtonClick(event){
    const button = event.target;
    // console.log('You are buying it');
    // console.log(button.textContent);
    // console.log(parseFloat(event.target.dataset.price));
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);


    //If you click the strong tag, you not only clicked on the strong tag, but also the button,
    //the body, the html tag, the browser, the operating system, etc.
    //to stop this from happening use stopPropataion
    //Stop this event from bubbling up
    event.stopPropagation();
}
//event.target and event.currentTarget are the same unless you have elements nested inside
//the event.target is the thing that actually got clicked
//the event.currentTarget is the thing that fired the event listener

buyButtons.forEach(buyButton => {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(event){
    console.log('You clicked the window');
    console.log(event.target);
}, {capture: true});

const photoElement = document.querySelector('.photo');

photoElement.addEventListener('mousemove', function(e) {
    console.log(e.currentTarget);
    console.log(this);
})