const firstName = 'jennifer';
const lastName = `morales`;

const person = {
    first: 'jennifer',
    last: 'morales',
    city: null
}

//Example of the difference between undefinded and null

let somethingUndefined;
const somethingNull = null;

//in this example, we assume Cher has been born without a last name, it was never defined

const cher = {
    first: 'cher'
}

//so if we did cher.last, we would get undefined.

//in this case, teller of Penn and Teller changed his name to just Teller

let teller = {
    first: 'raymond',
    last: 'teller'
}

teller.first = 'teller';
teller.last = null;

let isDrawing = false;
