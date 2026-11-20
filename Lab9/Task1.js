/*
Assignment Number: 9
Task Number: 1
*/

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("main-heading");
    const changeBtn = document.getElementById("change-btn");

    changeBtn.addEventListener("click", () => {
        heading.textContent = "Button clicked";
    });
});
