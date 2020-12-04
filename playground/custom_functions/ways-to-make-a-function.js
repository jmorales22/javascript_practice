// function doctorize(firstName){
//     return `Dr. ${firstName}`
// }


//Anonymous Function - an unnamed function - this one is not
//valid JS but a callback or iffe would be
// function (firstName){
//     return `Dr. ${firstName}`
// }

//Function expression - where your store a function as a 
//value in a variable - this is an anonmymous function
//the browser infers the function name from the variable name
// const doctorize = function(firstName){
//     return `Dr. ${firstName}`
// }


// function inchtoCM(inches){
//     return inches * 2.54;
// }

//Arrow Functions
const inchtoCM = inches => inches * 2.54;

// function add(a, b = 3){
//     const total = a + b;
//     return total;
// }

const add = (a, b = 3) => a + b;

// function makeABaby(firstName, lastName){
//     const baby = {
//         name: `${firstName} ${lastName}`,
//         age: 0
//     }
//     return baby;
// }

const makeABaby = (firstName, lastName) => ({name: `${firstName} ${lastName}`,age: 0});


//IIFE
//Immediately Invoked Function Expression
//wrap anonymous function with parthenthesis then add () at the end to immediately run
//the function once the browser has been refreshed
//parenthesis always run first in JavaScript
(function(){
    console.log("running anon function");
    return "You are cool";
})();

//Another note, what if this function took a name
(function(name){
    console.log("running anon function");
    return `You are cool, ${name}`;
})('Jennifer');
//the name would be passed here

//Methods - functions that live inside of an object
//For instance, console.log, console is an object and log is the function.

const person = {
    name: 'Jennifer',
    //Method
    sayHi: function(){
        console.log(`Hi ${this.name}`)
    },
    //Short hand Method, most common
    yellHi(){
        console.log("HI!!!!")
    },
    //Arrow function
    whisperHi: () => {
        console.log(`I'm whispering hi`)
    }

}

//Callback functions - a regular function but we use the 
//name for something that will happen when something is done
//For instance, when somebody clicks something, run this or when this amount of
//time has passed, run this
//a callback function is a function that is passed into another function 
//and is called by the browser at another point in time


//click callback
const button = document.querySelector('.clickMe');

function handleClick(){
    console.log('Great Clicking!!!!')
}

button.addEventListener('click', handleClick) //yellHi is the callback, you are asking
//the browser to call that function when someone clicks the button

//You can also pass it an anonymous function directly

button.addEventListener('click', function(){
    console.log('Great job!!')
})

//Timer callback
setTimeout(person.yellHi, 1000)

//You can also pass an anonymous function directly

setTimeout(function(){
    console.log('Done!!')
}, 1000)

//Or you can use an arrow function
setTimeout(() => {
    console.log('Done Again!!')
}, 1000)