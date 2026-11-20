/*
Assignment Number: 12
Task Number: 2
*/

// Task 2: Function accepting a formatting callback
function formatMarks(marks, callback) {
    return callback(marks);
}

// Invoke formatMarks with 76 and an arrow callback
const result = formatMarks(76, (m) => `Marks: ${m}/100`);

console.log(result);
