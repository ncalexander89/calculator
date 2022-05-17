//operator functions
function add (a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

// box element
const box = document.querySelector('#box');

// screen element
const screen = document.createElement('div');
screen.classList.add('screen');
box.appendChild(screen);
screen.textContent = 0;

// clear element
const clear = document.createElement('div');
clear.classList.add('clear');
box.appendChild(clear);
clear.textContent = 'CLR'

// delete element
const del = document.createElement('div');
del.classList.add('del');
box.appendChild(del);
del.textContent = 'DEL'

// numbers element
const numberBox = document.createElement('div');
numberBox.classList.add('numberBox');
box.appendChild(numberBox);
let numbers = document.createElement('div');

// // creates buttons and links to box element
for (i=1;i<13;i++) {
    numbers = document.createElement('div');
    if (i>3) {
        numbers.textContent = i-3;
    } else numbers.textContent = i-4; 
    numbers.classList.add('numbers');
    numberBox.appendChild(numbers);
    if (numbers.textContent === '-3') {
        numbers.textContent = '0';
    }
    if (numbers.textContent === '-2') {
        numbers.textContent = '.';
    }
    if (numbers.textContent === '-1') {
        numbers.textContent = '=';
    }
}

// operator box
const operatorBox = document.createElement('div');
operatorBox.classList.add('operatorBox');
box.appendChild(operatorBox);
// creates buttons and links to operator element
for (i=0;i<4;i++) {
    const operator = document.createElement('div');
    operator.textContent = i;                               
    operator.classList.add('operator');
    operatorBox.appendChild(operator);    
    if (operator.textContent === '1') {
        operator.textContent = 'X';
    }
    if (operator.textContent === '2') {
        operator.textContent = '-';
    }
    if (operator.textContent === '0') {
        operator.textContent = '/';
    }
    if (operator.textContent === '3') {
        operator.textContent = '+';
    }
}

// clear function
window.addEventListener('click', function(e) {
    if (e.target.className==='clear'){
        screen.textContent = 0;
    }
});

// digit function
window.addEventListener('click', function(e) {
    if (e.target.className==='numbers'){
        console.log(numbers.textContent);
        screen.textContent = numbers.textContent;
    }
});