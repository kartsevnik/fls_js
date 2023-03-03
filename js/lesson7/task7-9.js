// Enter the required data
const minTemp = -10
const maxTemp = 10
const randomQuantityTemperatures = Math.floor(Math.random() * 10) + 1


// Creating Functions
function getRandomNumber(Min, Max) {
    return Min + Math.floor(Math.random() * (Max - Min + 1))
}

function isQuantityNegativeTemperatures(randomQuantity, minTemp, maxTemp) {
    let quantityNegativeTemperatures = 0

    for (let i = 1; i <= randomQuantity; i++) {
        const randomTemperature = getRandomNumber(minTemp, maxTemp)
        document.write(`<div class="js-output">${i} temperature:  ${randomTemperature}</div>`)
        if (randomTemperature < 0) {
            quantityNegativeTemperatures += 1
        }
    }
    return quantityNegativeTemperatures
}

//Determining the result
let result = isQuantityNegativeTemperatures(randomQuantityTemperatures, minTemp, maxTemp)

// Result output
document.write(`<div div class= "js-output"> Quantity negative temperatures = ${result}</div>`)

