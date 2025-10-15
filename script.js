function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2; 
}

function multiply(num1, num2) {
    return num1 * num2;
}   

function divide(num1, num2) {
    return num1 / num2;
}   
const display = document.querySelector('.display');
function clearDisplay() {
    display.textContent = '0';
}

function updateDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function deleteText(){
    display.textContent = display.textContent.slice(0, -1);
}

let num1 = null;
let num2 = null;
let operator = null;

function calculate() {
    num2 = parseFloat(display.textContent);
    if (operator === '+') {
        display.textContent = add(num1, num2);
    } else if (operator === '-') {
        display.textContent = subtract(num1, num2);
    } else if (operator === '*') {
        display.textContent = multiply(num1, num2);
    } else if (operator === '/') {
        display.textContent = divide(num1, num2);
    }
}