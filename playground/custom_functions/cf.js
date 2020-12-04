function calculateBill(bill, taxRate = 0.13, tipRate = 0.15){
    //this is the function body or block
    const total = bill + (bill * (1 + taxRate)) + (bill *tipRate);
    return total;
}

let myTotal = `My total is ${calculateBill(100, 0.13)}`;

function sayHiTo(firstName){
    return `Hello ${firstName}`
}

function doctorize(name){
    return `Dr. ${name}`
}

function yell(name){
    return `Hey ${name.toUpperCase()}`
}