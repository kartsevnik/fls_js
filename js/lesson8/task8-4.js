// Enter the required data
let autoPlates = [`AA3452BE`, 'AI7777IA', 'BE7720BH', 'BH2356GB', 'BV2356BN']

// Creating Functions

//• починаються на букву «А»;
function getAInArray(nameOfArray) {
    let quantityOfA = 0
    for (let i = 0; i < nameOfArray.length; i++) {
        let temp = nameOfArray[i]
        if (temp[0] === `A`)
            quantityOfA += 1

    }
    return quantityOfA
}

// • перша і остання літери співпадають;
function getAInStartAndEnd(nameOfArray) {
    let quantity = 0
    for (let i = 0; i < nameOfArray.length; i++) {
        let temp = nameOfArray[i]

        for (let j = 1; j < temp.length; j++) {
            if ((j === (temp.length - 1)) && (temp[0] === temp[j]))
                quantity += 1
        }

    }
    return quantity
}

//складаються з більше ніш 5 символів;
function getOver5Symbols(nameOfArray) {
    let quantity = 0
    for (let i = 0; i < nameOfArray.length; i++) {
        let temp = nameOfArray[i]

        for (let j = 0; j < temp.length; j++) {
            if (j === 4)
                quantity += 1
        }

    }
    return quantity
}

//Determining the result

let quantityOfA = getAInArray(autoPlates)
let aInStartAndEnd = getAInStartAndEnd(autoPlates)
let over5Symbols = getOver5Symbols(autoPlates)


// Result output
document.write(`<div div class= "js-output">Quantity of A: ${quantityOfA}</div>`)
document.write(`<div div class= "js-output">A in start and end of numbers: ${aInStartAndEnd}</div>`)
document.write(`<div div class= "js-output">Numbers where over 5 symbols: ${over5Symbols}</div>`)

