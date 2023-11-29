// ====================================================================================================================== //
// Задача 1. Розробити калькулятор
// ====================================================================================================================== //
function findResult(parametr) {
    const num1 = parseFloat(document.getElementById('firstNumber').value)
    const num2 = parseFloat(document.getElementById('secondNumber').value)

    switch (parametr) {
        case `+`: result = num1 + num2
            break;
        case `-`: result = num1 - num2
            break;
        case `/`: result = num1 / num2
            break;
        case `*`: result = num1 * num2
            break;
    }

    return document.getElementById('result').value = result
}

// ====================================================================================================================== //


// ====================================================================================================================== //

