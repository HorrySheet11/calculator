let num1 = null;
let num2 = null;
let operator = null;

const display = document.querySelector('.display');
const history = document.querySelector('.history');

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

function clearDisplay() {
    history.textContent = '';
    num1 = null;
    num2 = null;
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
    if (display.textContent === '') {
        display.textContent = '0';
    }
}


function store(){
    num1 = parseFloat(display.textContent);
    history.textContent = num1 + ' ' + operator;
    display.textContent = '0';
}

function calculate() {
    num2 = parseFloat(display.textContent);
    history.textContent = `${num1} ${operator} ${num2} = `;
    if (operator === '+') {
        display.textContent = add(num1, num2);
    } else if (operator === '-') {
        display.textContent = subtract(num1, num2);
    } else if (operator === '*') {
        display.textContent = multiply(num1, num2);
    } else if (operator === '÷') {
        display.textContent = divide(num1, num2);
    }
}