const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a paragraph!';
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'trees swaying';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

//We need to add something to the top, like a heading
const heading = document.createElement('h2');
heading.textContent = 'Cool stuff!';

myDiv.insertAdjacentElement('afterbegin', heading);

//create an unordered list using what we've just learned
const unorderedList = document.createElement('ul');
const item1 = document.createElement('li');
item1.textContent = 'This is item1';
const item2 = document.createElement('li');
item2.textContent = 'This is item2';
const item3 = document.createElement('li');
item3.textContent = 'This is item3';

unorderedList.appendChild(item1);
unorderedList.appendChild(item2);
unorderedList.appendChild(item3);

document.body.insertAdjacentElement('beforeend', unorderedList);
