const item = document.querySelector('.item');

const src = `https://picsum.photos/200`;
const desc = `Cool Picture!`

//Below, myHTML is not an element, it is a string. If you do typeof, it will return a string
//It only become an element once it is dumped into the DOM
const myHTML = `
<div class ='wrapper'>
<h2>${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>`

item.innerHTML = myHTML;

// //to make changes to the myHTML variable, you have to pull it out using a variable
// const itemImage = document.querySelector(".wrapper img");
// itemImage.classList.add('round');

//there is a work around. We can turn a string into a DOM element.
//a range is a collection of elements or part of HTML that we can work with
//when we add createContextualFragment it gives us a document fragement, which is a fancy way
//of saying some HTML
const myFragment = document.createRange().createContextualFragment(myHTML);

//now we can do things like this because they are true DOM nodes. This will allow you to
//access the elements and add event listeners and such
document.body.appendChild(myFragment);

//using this is a potential vulnerability to your site. It allows others to add HTML
//tags or script tags to the DOM. It can allow someone to enter a last name that is a 
//script tag that can access and drain a bank account.


