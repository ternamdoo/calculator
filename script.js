// Put a placeholder 0 on the display
const display = document.querySelector('.display');
display.textContent = "0";

// Initialize variables for performing operations
let firstNumber = null;
let operator = null;
let secondNumber = null;

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

// Enter a decimal point
const decimalPoint = document.querySelector('.decimal-point');
decimalPoint.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        display.textContent += '.'
    }
});

// Reset to default
const clear = document.querySelector('.clear-calc');
clear.addEventListener('click', () => {
    display.textContent = '0';
    firstNumber = null;
    operator = null;
    secondNumber = null
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
    if (b === 0) {
        return "Zero Division ERROR!";
    }
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

// Get operator
const arithmeticOperators = document.querySelectorAll('.arithmetic');
arithmeticOperators.forEach((button) => {
    button.addEventListener('click', () => {
        firstNumber = Number(display.textContent);
        display.textContent = '0';
        switch (button.textContent) {
            case '/':
                operator = divide;
                break;
            case '*':
                operator = multiply;
                break;
            case '+':
                operator = add;
                break;
            case '-':
                operator = subtract;
                break;
        }
    })
});


// Evaluate an expression
const evaluate = document.querySelector('.equals');
evaluate.addEventListener('click', () => {
    secondNumber = Number(display.textContent);
    const result = operate(firstNumber, secondNumber, operator);
    display.textContent = result;
})

// - If the user clicks on another operator after clicking on the second 
// sequence of numbers, the first operator gets evaluated and the result is 
// returned to num1, and then the recently clicked operator replaces the former 
// value in the operator variable, then the user may enter a new sequence 
// of numbers for num2.