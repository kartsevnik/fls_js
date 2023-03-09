// Enter the required data
let temp1 = parseInt(prompt(`Enter the temperature, please`, `-1`))
let temp2 = parseInt(prompt(`Enter the temperature, please`, `2`))
let temp3 = parseInt(prompt(`Enter the temperature, please`, `-3`))
let temp4 = parseInt(prompt(`Enter the temperature, please`, `4`))
let temp5 = parseInt(prompt(`Enter the temperature, please`, `-5`))


// Creating Functions
function isQuantityNegativeTemperatures(temp1, temp2, temp3, temp4, temp5) {
    let quantityNegativeTemperatures = 0

    if (temp1 < 0)
        quantityNegativeTemperatures += 1
    if (temp2 < 0)
        quantityNegativeTemperatures += 1
    if (temp3 < 0)
        quantityNegativeTemperatures += 1
    if (temp4 < 0)
        quantityNegativeTemperatures += 1
    if (temp5 < 0)
        quantityNegativeTemperatures += 1
    return quantityNegativeTemperatures
}

//Determining the result
let result = isQuantityNegativeTemperatures(temp1, temp2, temp3, temp4, temp5)

// Result output
document.write(`<div div class= "js-output"> Quantity negative temperatures = ${result}</div>`)

