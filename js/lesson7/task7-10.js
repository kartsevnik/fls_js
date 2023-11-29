// Enter the required data
const minTemp = -10
const maxTemp = 10
const randomQuantityTemperatures = Math.floor(Math.random() * 10) + 1


// Creating Functions
function getRandomNumber(Min, Max) {
    return Min + Math.floor(Math.random() * (Max - Min + 1))
}

function isQuantityPositiveTemperatures(randomQuantity, minTemp, maxTemp) {
    let quantityPositiveTemperatures = 0
    let sumOfPositiveTemperatures = 0
    let averageValue = 0

    for (let i = 1; i <= randomQuantity; i++) {
        const randomTemperature = getRandomNumber(minTemp, maxTemp)
        document.write(`<div class="js-output">${i} temperature:  ${randomTemperature}</div>`)
        if (randomTemperature > 0) {
            quantityPositiveTemperatures += 1
            sumOfPositiveTemperatures += randomTemperature
        }
    }

    if ((sumOfPositiveTemperatures && quantityPositiveTemperatures) !== 0)
        averageValue = (sumOfPositiveTemperatures / quantityPositiveTemperatures).toFixed(0)
    else averageValue = `All values are less than or equal to 0`

    return averageValue
}

//Determining the result
let result = isQuantityPositiveTemperatures(randomQuantityTemperatures, minTemp, maxTemp)

// Result output
document.write(`<div div class= "js-output"> Average value of positive temperatures = ${result}</div>`)