let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    display.value = expression;
}

function setOperator(op) {
    expression += op;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculateResult() {
    if (expression !== '') {
        let result = eval(expression);
        let falsifiedResult = falsifyResult(result);
        display.value = expression + ' = ' + falsifiedResult;
        expression = falsifiedResult;
    }
}

function falsifyResult(result) {
    return result + Math.floor(Math.random() * 200) - 100; // Random number between -100 and 100
}
