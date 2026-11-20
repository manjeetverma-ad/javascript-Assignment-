/*
Assignment Number: 11
Task Number: 2
*/

// Task 2: Closure preserving state between function calls
function makeCounter() {
    let count = 0; // Lexical scope variable enclosed by the returned function
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();

// Call returned function twice and print results
console.log(counter());
console.log(counter());
