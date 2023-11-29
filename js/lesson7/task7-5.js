// Enter the required data
let enterTheTypeOfChange = parseInt(prompt(`Enter the:
1. If you want to change centimeters to inches
2. If you want to change kilograms to pounds
3. If you want to change kilometers to miles
`))
let enterValue

if (enterTheTypeOfChange === 1)
    enterValue = parseFloat(prompt(`Enter the value, which you want to change (centimeters to inches)`, `50.50`))
else if (enterTheTypeOfChange === 2)
    enterValue = parseFloat(prompt(`Enter the value, which you want to change (kilograms to pounds)`, `60.60`))
else if (enterTheTypeOfChange === 3)
    enterValue = parseFloat(prompt(`Enter the value, which you want to change (kilometers to miles)`, `70.60`))
else alert(`Error value, try again`)
function changeGramToKilogram(num) {
}

// Creating Functions

function changeCentimetersToInches(num) {
    let res = num * 0.393701
    return res
}

function changeKilogramsToPounds(num) {
    let res = num * 2.20462
    return res
}

function changeKilometersToMiles(num) {
    let res = num * 0.621371
    return res
}
let resultOfChange
let result

// Determining the result
if (enterTheTypeOfChange === 1) {
    resultOfChange = changeCentimetersToInches(enterValue)
    result = `You entered ${enterValue} centimeters - this is ${resultOfChange.toFixed(2)} of inches`
}
else if (enterTheTypeOfChange === 2) {
    resultOfChange = changeKilogramsToPounds(enterValue)
    result = `You entered ${enterValue} kilograms - this is ${resultOfChange.toFixed(2)} of pounds`
}
else if (enterTheTypeOfChange === 3) {
    resultOfChange = changeKilometersToMiles(enterValue)
    result = `You entered ${enterValue} kilometers - this is ${resultOfChange.toFixed(2)} of miles`
}
else alert(`Error value, try again`)



// Result output
document.write(`
<div class="js-output">
${result}
</div>`)