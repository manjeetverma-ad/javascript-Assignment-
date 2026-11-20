/*
Assignment Number: 14
Task Number: 2
*/

// Task 2: Schedule and cancel a timer using clearTimeout
const timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

// Cancel the scheduled timer
clearTimeout(timerId);

console.log("Cancelled");
