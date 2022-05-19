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

screen.textContent = 0;

// clear function
window.addEventListener('click', function(e) {
    if (e.target.id==='clear'){
        console.log(numbers);
        screen.textContent = 0;
    }
});

const numbers = document.querySelectorAll('.numbers');

// digit function
window.addEventListener('click', function(e) {
    if (e.target.className==='numbers'){
        console.log(numbers);
        // screen.textContent = dnumbers.textContent;
    }
});