// Put a placeholder 0 on the display
const display = document.querySelector('.display');
display.textContent = "0";

// Initialize variables for performing operations
let firstNumber;
let operator;
let secondNumber;

// Define the functions for the calculator operator keys
const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
    return a - b;
}
const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const modulo = function(a, b) {
    return a % b;
}

const operate = function(num1, num2, func) {
    return func(num1, num2);
}