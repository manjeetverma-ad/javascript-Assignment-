/*
Assignment Number: 6
Task Number: 2
*/

// Task 2: Parse valid JSON text using JSON.parse
const jsonText = '{"city":"Pune","pin":411001}';

const parsedData = JSON.parse(jsonText);
console.log(parsedData.city);
