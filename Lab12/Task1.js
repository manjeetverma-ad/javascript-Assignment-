/*
Assignment Number: 12
Task Number: 1
*/

// Task 1: Higher-order function applying a callback twice
function applyTwice(fn, value) {
    return fn(fn(value));
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5));
