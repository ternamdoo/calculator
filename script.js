// Put a placeholder 0 on the display
const display = document.querySelector('.display');
display.textContent = "0";

// Initialize variables for performing operations
let firstNumber;
let operator;
let secondNumber;

// Get the digits when clicked
let clickedNumber;
const digits = document.querySelectorAll('.number');
digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        clickedNumber = digit.textContent;
        if (display.textContent === '0') {
            display.textContent = clickedNumber;
        } else {
            display.textContent += clickedNumber;
        }
    })
});

// Delete last pressed key
const del = document.querySelector('.delete-last-input');
del.addEventListener('click', () => {
    display.textContent = deleteLastInput(display.textContent);
});

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

const deleteLastInput = function(str) {
    return str.slice(0, (str.length -1));
}