// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('.wrapper');
console.log(div);
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const item1 = document.createElement('li');
item1.textContent = 'I am item1';
const item2 = document.createElement('li');
item2.textContent = 'I am item2';
const item3 = document.createElement('li');
item3.textContent = 'I am item3';
// put that list into the above wrapper
ul.appendChild(item1);
ul.appendChild(item2);
ul.appendChild(item3);

div.appendChild(ul);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://picsum.photos/500';
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
<div class='myDiv'>
    <p>This is the first paragraph</p>
    <p>This is the second paragraph</p>
</div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
div.insertBefore(myFragment, ul);
// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  let heightCalc = height / 2.54 / 12;
  let heightFeet = Math.floor(heightCalc);
  let remainingInches = Math.floor((heightCalc - heightFeet) * 12);
  const newHTML = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their height is ${heightFeet} ft ${remainingInches} in and they are ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
      <button class="delete" type="button">&times; Delete</button>
    </div>`;

  return newHTML;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
let cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let player1 = generatePlayerCard('Jennifer', 44, 180);
let player2 = generatePlayerCard('Carlos', 37, 180);
let player3 = generatePlayerCard('Bruce', 14, 50);
let player4 = generatePlayerCard('Linus', 7, 150);

// append those cards to the div
cards.innerHTML = player1 + player2 + player3 + player4;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
    const buttonClicked = event.currentTarget;
    buttonClicked.parentElement.remove();
    //can also use:
    //buttonClicked.closest('.playerCard').remove();
    //this may work better because if the button gets moved, it may not delete the entire card
  }

// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));