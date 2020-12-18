//Traversing and Removing Nodes

const jennifer = document.querySelector('.jen');

//difference between a node and an element
//a element can be a node but a node is not neccesarily an element

//this gives you all of the child elements
// console.log(jennifer.children);

//these are properties for elements
// console.log(jennifer.firstElementChild)
// console.log(jennifer.lastElementChild)
// console.log(jennifer.previousElementSibling)
// console.log(jennifer.nextElementSibling)
// console.log(jennifer.parentElement)

//if you want to remove elements
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

//Below will give us our list of nodes.
//Our nodes are text, em, and text. The first node is text "I am Jennifer and I"
//the second node is <em>love</em>
//and the third node is text "food!"
// console.log(jennifer.childNodes);

//these are properties for nodes
// jennifer.childNodes
// jennifer.firstChild
// jennifer.lastChild
// jennifer.previousSibling
// jennifer.nextSibling
// jennifer.parentNode
