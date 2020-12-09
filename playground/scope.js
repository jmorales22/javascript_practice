//Global variable is available anywhere in your application including the console and
//inside a script tag in the html file

const firstName = "Jennifer";
let lastName = "Morales";
var age = 44;

//If you did window.firstName or window.lastName, you would get undefined. They are globally
//scoped but are not attached to the window
//If you do window.age, you will get the age returned because var variables are attached to the 
//window object and are globally scoped


//Everything that is attached to the global scope is inside the window object such
//as setTimeout(), it is globally available

//Function scope
function go(){
    const myAge = 100;
    console.log(myAge)
}

//myAge is in the function scope and is only available to the function

//Block scope - cool is inside the block {}
if(1 === 1){
    let cool = true;
}
//lexical scoping - the function doesn't care about where it is called, it cares about where
//it is defined so in this case, when the go() function is run, the output will be snickers
const dog = "snickers"

function logDog(){
    console.log(dog)
}

function go(){
    const dog = 'sunny';
    logDog();
}