//operator functions
let displayValue = 0;
let firstNumber='';
let secondNumber='';
let operate='';


const add = function (a,b) {
    screen.textContent = a+b;
    firstNumber= screen.textContent;
    // return firstNumber;
}
const subtract = function (firstNumber,secondNumber) {
    screen.textContent = firstNumber-secondNumber;
    firstNumber= screen.textContent;
}

function multiply (firstNumber,secondNumber) {
    screen.textContent = firstNumber*secondNumber;
    firstNumber= screen.textContent;
}

function divide (firstNumber,secondNumber) {
    screen.textContent = firstNumber/secondNumber;
    firstNumber= screen.textContent;
}

const screen = document.querySelector('#screen');

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

// clear function
window.addEventListener('click', function(e) {
    if (e.target.id==='clear'){
        screen.textContent = 0;
        displayValue = 0;
        firstNumber='';
        secondNumber='';
        screenSmall.textContent = '';
    }
});



const numbers = document.querySelectorAll('.numbers');

// digit function
window.addEventListener('click', function(e) {
    if (e.target.id==='0'){
        displayValue = 0 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='1'){
        displayValue = 1 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='2'){
        displayValue = 2 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='3'){
        displayValue = 3 + 10*displayValue;
        screen.textContent= displayValue;
}
});

window.addEventListener('click', function(e) {
    if (e.target.id==='4'){
        displayValue = 4 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='5'){
        displayValue = 5 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='6'){
        displayValue = 6 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='7'){
        displayValue = 7 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='8'){
        displayValue = 8 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='9'){
        displayValue = 9 + 10*displayValue;
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='+'){
        operate = '+';
        if (firstNumber!=='') {
            secondNumber=displayValue;
            add(firstNumber,secondNumber);
        }
        else if (firstNumber==='') {
        screenSmall.textContent= `${displayValue} + ${firstNumber}`;
        firstNumber=displayValue;
        displayValue=0;
        }
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='-'){
        operate='-';
        if (firstNumber!=='') {
            secondNumber=displayValue;
            subtract(firstNumber,secondNumber);
        }
        else if (firstNumber==='') {
        screenSmall.textContent= `${displayValue} - ${firstNumber}`;
        firstNumber=displayValue;
        displayValue=0;
        }
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='x'){
        operate = 'x';
        if (firstNumber!=='') {
            secondNumber=displayValue;
            multiply(firstNumber,secondNumber);
        }
        else if (firstNumber==='') {
        screenSmall.textContent= `${displayValue} x ${firstNumber}`;
        firstNumber=displayValue;
        displayValue=0;
        }
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='/'){
        operate='/';
        if (firstNumber!=='') {
            secondNumber=displayValue;
            divide(firstNumber,secondNumber);
        }
        else if (firstNumber==='') {
        screenSmall.textContent= `${displayValue} / ${firstNumber}`;
        firstNumber=displayValue;
        displayValue=0;
        }
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='del'){
        screen.textContent= displayValue;
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='='){
        screen.textContent= displayValue;
        if (firstNumber!=='') {
            secondNumber=displayValue;
            if (operate==='+'){
            add(firstNumber,secondNumber);
            } else if (operate==='x'){
                multiply(firstNumber,secondNumber);
            } else if (operate==='/'){
            divide(firstNumber,secondNumber);
            }else if (operate==='-'){
            subtract(firstNumber,secondNumber);
            }
        }
        firstNumber='';
        secondNumber='';
        displayValue = 0;

    }
});


// Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ 
// in a variable somewhere for use in the next step.

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an 
// operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

// You should already have the code that can populate the display, so once operate() has been called, update the display with
//  the ‘solution’ to the operation.

// This is the hardest part of the project. You need to figure out how to store all the values and call the operate function 
// with them. Don’t feel bad if it takes you a while to figure out the logic.

// Gotchas: watch out for and fix these bugs if they show up in your code:
// Users should be able to string together several operations and get the right answer, with each pair of numbers being 
// evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be 
// this student solution.

// Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), 
// followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator 
// should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that 
// calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next 
// operator (-).

// You should round answers with long decimals so that they don’t overflow the screen.
// Pressing = before entering all of the numbers or an operator could cause problems!
// Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
// Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
// EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet.
//  Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. 
//  It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
// EXTRA CREDIT: Make it look nice! This is a great project to practice your CSS skills. At least make the operations a 
// different color from the keypad buttons.
// EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
// EXTRA CREDIT: Add keyboard support!