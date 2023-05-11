// ====================================================================================================================== //
// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)
// ====================================================================================================================== //
function convert() {
    const USD = 1
    const EUR = 1.09639
    const UAH = 0.0269

    const firstCurrency = document.getElementById('firstCurrency').value
    const value1Currency = document.getElementById('firstNumber').value

    let typeOf1Currency

    switch (firstCurrency) {
        case `USD`: typeOf1Currency = USD
            break;
        case `EUR`: typeOf1Currency = EUR
            break;
        case `UAH`: typeOf1Currency = UAH
            break;
    }

    let secondCurrency = document.getElementById('secondCurrency').value


    let typeOf2Currency

    switch (secondCurrency) {
        case `USD`: typeOf2Currency = USD
            break;
        case `EUR`: typeOf2Currency = EUR
            break;
        case `UAH`: typeOf2Currency = UAH
            break;
    }

    result = typeOf1Currency * value1Currency / typeOf2Currency
    document.getElementById('result').value = result.toFixed(2)
}

window.onload = function () {
    document.getElementById('convert').onclick = convert
    document.querySelector('#firstNumber').onchange = convert
}

function change() {
    let typeOf1Currency = document.getElementById('firstCurrency').value
    let typeOf2Currency = document.getElementById('secondCurrency').value
    let resultOfChange = document.getElementById('result').value

    let change = typeOf1Currency
    typeOf1Currency = document.getElementById('firstCurrency').value = typeOf2Currency
    typeOf2Currency = document.getElementById('secondCurrency').value = change
    let value1Currency = document.getElementById('firstNumber').value = resultOfChange

    convert()
}

window.onload = function () {
    document.getElementById('change').onclick = change
}
// ====================================================================================================================== //


// ====================================================================================================================== //

