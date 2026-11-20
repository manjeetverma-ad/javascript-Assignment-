/*
Assignment Number: 7
Task Number: 3
*/

// Task 3: Constructor function with prototype method
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

// Add result() method through prototype
Student.prototype.result = function() {
    return this.marks >= 40 ? "Pass" : "Fail";
};

// Instantiate Asha with marks 88 and print result
const student1 = new Student("Asha", 88);

console.log(student1.result());
