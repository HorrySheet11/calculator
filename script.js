let num1 = null;
let num2 = null;
let operator = null;

const display = document.querySelector('.display');
const history = document.querySelector('.history');
const dot = document.getElementById('dot');
const operatorButtons = document.querySelectorAll('.operator'); 

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
    dot.disabled = false;
}

function updateDisplay(value) {
    if (display.textContent == '0') {
        if (value === '.') {
            display.textContent += value;
        }else{
            display.textContent = value;
        }
    } else {
        display.textContent += value;
    }
}

function deleteText(){
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
    if(!display.textContent.includes(".")){
        dot.disabled = false;
    }
}

function dotDisable(){
    if(display.textContent.includes(".")){
        dot.disabled=true;
    }else{
        dot.disabled=false;
    }
}

function store(){
    num1 = parseFloat(display.textContent);
    history.textContent = num1 + ' ' + operator;
    display.textContent = '0';
    operatorButtons.forEach(btn => btn.disabled = true);
}

function calculate() {
    num2 = parseFloat(display.textContent);
    history.textContent = `${num1} ${operator} ${num2} = `;
    if (operator === '+') {
        display.textContent = num1 = add(num1, num2);
    } else if (operator === '-') {
        display.textContent = num1 = subtract(num1, num2);
    } else if (operator === '*') {
        display.textContent = num1 = multiply(num1, num2);
    } else if (operator === '÷') {
        display.textContent = num1 = divide(num1, num2);
    }
    dotDisable();
    operatorButtons.forEach(btn => btn.disabled = false);

}