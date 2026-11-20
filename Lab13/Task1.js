/*
Assignment Number: 13
Task Number: 1
*/

// Task 1: Array reduce with initial value 0 to calculate cumulative sum
const prices = [120, 45, 300];

const total = prices.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice;
}, 0);

console.log("Total:", total);
