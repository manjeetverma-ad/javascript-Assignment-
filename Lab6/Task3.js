/*
Assignment Number: 6
Task Number: 3
*/

// Task 3: Handle JSON parsing error using try...catch block
const invalidJson = "{name: Rohan}";

try {
    const data = JSON.parse(invalidJson);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}
