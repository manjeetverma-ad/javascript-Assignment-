/*
Assignment Number: 12
Task Number: 3
*/

// Task 3: Higher-order function to repeat an action callback
function repeatAction(times, action) {
    for (let round = 1; round <= times; round++) {
        action(round);
    }
}

// Call repeatAction with 3
repeatAction(3, (round) => {
    console.log(`Round ${round}`);
});
