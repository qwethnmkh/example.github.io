const display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
    display.innerText += value;
    currentExpression += value;
}

function appendOperator(operator) {
    display.innerText += operator;
    currentExpression += operator;
}

function clearDisplay() {
    display.innerText = '';
    currentExpression = '';
}

function deleteLastChar() {
    display.innerText = display.innerText.slice(0, -1);
    currentExpression = currentExpression.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        display.innerText = result;
        currentExpression = result.toString();
    } catch (error) {
        display.innerText = 'Error';
        currentExpression = '';
    }
}

