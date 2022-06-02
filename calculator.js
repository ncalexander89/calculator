//initial conditions
let storedValue = 0;
let firstNumber='';
let secondNumber='';
let operate='';

//DOM element
const screen = document.querySelector('#screen');
const numbers = document.querySelectorAll('.numbers');

//operate function
const operation = function (a,b) {
    if (operate==='+') {
        screen.textContent = a+b;
        secondNumber= Number(screen.textContent);
        firstNumber='';
        storedValue=0;
        return;
    } else if (operate==='-') {
        screen.textContent = a-b;
        secondNumber= Number(screen.textContent);
        firstNumber='';
        storedValue=0;
        return;
    } else if (operate==='x') {
        screen.textContent = a*b;
        secondNumber= Number(screen.textContent);
        firstNumber='';
        storedValue=0;
        return;
    } else if (operate==='/') {
        if (b===0) {
            screen.textContent = 'Man u crazay';
            screenSmall.textContent='';
            return;
            } 
        screen.textContent = a/b;
        secondNumber= Number(screen.textContent);
        firstNumber='';
        storedValue=0;
        return;
    }
}

// Clear function resets everything
window.addEventListener('click', function(e) {
    if (e.target.id==='clear'){
        screen.textContent = 0;
        storedValue = 0;
        firstNumber='';
        secondNumber='';
        screenSmall.textContent = '';
        operate = '';
    }
});

window.addEventListener('click', function(e) {
    for( i=0; i<10; i++) {
        if (e.target.id==i){
        storedValue = i + 10*storedValue;
        screen.textContent= storedValue;
        }
    }
});


window.addEventListener('click', function(e) {
    if (e.target.id==='+'){
        //first
        if (firstNumber==='' && secondNumber==='') {
            screenSmall.textContent= `${storedValue} + ${firstNumber}`;
            firstNumber=storedValue;
            storedValue=0;
        //second
        } else if (firstNumber!=='') {
            screenSmall.textContent= `${firstNumber} + ${storedValue}`;
            secondNumber=storedValue;
            operation(firstNumber, secondNumber);
        //third
        } else if (firstNumber==='' && secondNumber!=='') {
            screenSmall.textContent= `${secondNumber} ${operate} ${storedValue}`;
            firstNumber=storedValue;
            operation(secondNumber, firstNumber);
        }
        operate='+';
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='-'){
        //first
        if (firstNumber==='' && secondNumber==='') {
            screenSmall.textContent= `${storedValue} - ${firstNumber}`;
            firstNumber=storedValue;
            storedValue=0;
        //second
        } else if (firstNumber!=='') {
            screenSmall.textContent= `${firstNumber} ${operate} ${storedValue}`;
            secondNumber=storedValue;
            operation(firstNumber, secondNumber);
        //third
        } else if (firstNumber==='' && secondNumber!=='') {
            screenSmall.textContent= `${secondNumber} ${operate} ${storedValue}`;
            firstNumber=storedValue;
            operation(secondNumber, firstNumber);
        }
        operate='-';
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='x'){
        //first
        if (firstNumber==='' && secondNumber==='') {
        screenSmall.textContent= `${storedValue} x ${firstNumber}`;
        firstNumber=storedValue;
        storedValue=0;
        //second
        } else if (firstNumber!=='') {
            screenSmall.textContent= `${firstNumber} x ${storedValue}`;
            secondNumber=storedValue;
            operation(firstNumber, secondNumber);
        //third
        } else if (firstNumber==='' && secondNumber!=='') {
            screenSmall.textContent= `${secondNumber} ${operate} ${storedValue}`;
            firstNumber=storedValue;
            operation(secondNumber, firstNumber);
        }
        operate = 'x';
    }
});

window.addEventListener('click', function(e) {
    if (e.target.id==='/'){
        //first
        if (firstNumber==='' && secondNumber==='') {
        screenSmall.textContent= `${storedValue} / ${firstNumber}`;
        firstNumber=storedValue;
        storedValue=0;
        //second
        } else if (firstNumber!=='') {
            screenSmall.textContent= `${firstNumber} / ${storedValue}`;
            secondNumber=storedValue;
            operation(firstNumber, secondNumber);
        //third
        } else if (firstNumber==='' && secondNumber!=='') {
            screenSmall.textContent= `${secondNumber} ${operate} ${storedValue}`;
            firstNumber=storedValue;
            operation(secondNumber, firstNumber);
        }
        operate='/';
    }
});


//need to work on delete button
window.addEventListener('click', function(e) {
    if (e.target.id==='del'){
        screen.textContent= storedValue;
    }
});

//need to fix double =='s
// let count = 0;
window.addEventListener('click', function(e) {
    if (e.target.id==='='){
        // figure out double =='s
        // if (count>1){
        //     count = 0;
        //     return;
        // }
        // count++;

        screen.textContent= storedValue;

        //first
        if (firstNumber!=='') {
            secondNumber=storedValue;
            if (operate==='+'){
                screen.textContent= firstNumber + secondNumber;
                screenSmall.textContent=`${firstNumber} + ${secondNumber} =`;
            } else if (operate==='x'){
                screen.textContent= firstNumber * secondNumber;
                screenSmall.textContent=`${firstNumber} x ${secondNumber} =`;
            } else if (operate==='/'){
                if (secondNumber===0) {
                    screen.textContent = 'Man u crazay';
                    screenSmall.textContent='';
                    return;
                } 
                screen.textContent= Math.round((firstNumber / secondNumber + Number.EPSILON) * 100) / 100;

                screenSmall.textContent=`${firstNumber} / ${secondNumber} =`;
            } else if (operate==='-'){
                screen.textContent= firstNumber - secondNumber;
                screenSmall.textContent=`${firstNumber} - ${secondNumber} =`;
            }
        }

        //second
        if (firstNumber==='') {
            if (operate === '+') {
                screen.textContent= storedValue + secondNumber;
                screenSmall.textContent=`${storedValue} + ${secondNumber} =`;
            }
            if (operate === '-') {
                screen.textContent= secondNumber - storedValue;
                screenSmall.textContent=`${secondNumber} - ${storedValue} =`;
            }
            if (operate === 'x') {
                screen.textContent= storedValue * secondNumber;
                screenSmall.textContent=`${secondNumber} x ${storedValue} =`;
            }
            if (operate === '/') {
                if (storedValue===0) {
                    screen.textContent = 'Man u crazay';
                    screenSmall.textContent='';
                    return;
                } 
                screen.textContent= Math.round(((secondNumber / storedValue) + Number.EPSILON) * 100) / 100;
                
                screenSmall.textContent=`${storedValue} / ${secondNumber} =`;
            }
        }
        //resets
        firstNumber='';
        secondNumber='';
        storedValue = screen.textContent;
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

// Button event listeners
// window.addEventListener('click', function(e) {
//     if (e.target.id==='0'){
//         storedValue = 0 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='1'){
//         storedValue = 1 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='2'){
//         storedValue = 2 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='3'){
//         storedValue = 3 + 10*storedValue;
//         screen.textContent= storedValue;
// }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='4'){
//         storedValue = 4 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='5'){
//         storedValue = 5 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='6'){
//         storedValue = 6 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='7'){
//         storedValue = 7 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='8'){
//         storedValue = 8 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });

// window.addEventListener('click', function(e) {
//     if (e.target.id==='9'){
//         storedValue = 9 + 10*storedValue;
//         screen.textContent= storedValue;
//     }
// });