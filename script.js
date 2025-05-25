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

// Prefix or remove -ve signs to/from numbers
const negativeSignToggle = document.querySelector('.negative-sign-toggle');
negativeSignToggle.addEventListener('click', () => {
    if (display.textContent !== '0') {
        if (!display.textContent.startsWith('-')) {
            display.textContent = '-' + display.textContent;
        } else {
            display.textContent = display.textContent.slice(1,)
        }
    }
});

// Delete last pressed key
const del = document.querySelector('.delete-last-input');
del.addEventListener('click', () => {
    if (display.textContent !== '0') {
        display.textContent = deleteLastInput(display.textContent);
    }
    if (display.textContent.length <= 0) {
        display.textContent = '0'
    } 
});


// Evaluate percentages
const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', () => {
    display.textContent = evaluatePercentage(display.textContent);
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

const evaluatePercentage = function(num) {
    return num / 100;
}

const operate = function(num1, num2, func) {
    return func(num1, num2);
}

const deleteLastInput = function(str) {
    return str.slice(0, (str.length -1));
}