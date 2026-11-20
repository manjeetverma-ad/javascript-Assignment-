/*
Assignment Number: 6
Task Number: 1
*/

// Task 1: Create object and serialize to JSON text using JSON.stringify
const student = {
    name: "Rohan",
    marks: [70, 80]
};

const jsonString = JSON.stringify(student);
console.log(jsonString);
