// Put a placeholder 0 on the display
const display = document.querySelector('.display');
display.textContent = "0";

// Define the functions for the calculator operator keys
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}
