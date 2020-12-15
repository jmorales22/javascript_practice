// const p = document.querySelectorAll('p');
// console.log(p)

// const imgs = document.querySelector('.item img');
// console.log(imgs);

// const heading = document.querySelector('h2');
// //.dir shows us the object properties - they be used as getters or setters
// // console.dir(heading)

// // //example of a getter
// // console.dir(heading.textContent);

// // //example of a setter
// // heading.textContent = "This is the best!";

// //shows what is filling up the element
// // console.log(heading.innerHTML);

// // //shows the element and what is filling up the element as well as the white space
// // console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent)

// //this can be slow in the browser
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`

// pizzaList.insertAdjacentText("beforeend", '🍕')

//Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
// console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

//setter
pic.alt = 'Cute';
//getter
// console.log(pic.alt);

pic.width = 200;
// console.log(pic.naturalWidth);

// window.addEventListener('load', function(){
//     console.log(pic.naturalWidth);
// })

pic.setAttribute('alt', "Really cool")
// console.log(pic.getAttribute('alt'))

const custom = document.querySelector('.custom');
console.log(custom.dataset)

custom.addEventListener('click', function(){
    alert(`Welcome ${custom.dataset.name}`)
})