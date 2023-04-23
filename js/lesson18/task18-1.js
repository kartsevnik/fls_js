// ====================================================================================================================== //
// Задача 1. Розробити калькулятор
// ====================================================================================================================== //
function funcSum() {
    const num1 = parseFloat(document.getElementById('firstNumber').value)
    const num2 = parseFloat(document.getElementById('secondNumber').value)
    const result = num1 + num2
    document.getElementById('result').value = result
}

function funcSubtraction() {
    const num1 = parseFloat(document.getElementById('firstNumber').value)
    const num2 = parseFloat(document.getElementById('secondNumber').value)
    const result = num1 - num2
    document.getElementById('result').value = result
}

function funcDivide() {
    const num1 = parseFloat(document.getElementById('firstNumber').value)
    const num2 = parseFloat(document.getElementById('secondNumber').value)
    const result = num1 / num2
    document.getElementById('result').value = result
}

function funcMultiply() {
    const num1 = parseFloat(document.getElementById('firstNumber').value)
    const num2 = parseFloat(document.getElementById('secondNumber').value)
    const result = num1 * num2
    document.getElementById('result').value = result
}


// ====================================================================================================================== //


// ====================================================================================================================== //

