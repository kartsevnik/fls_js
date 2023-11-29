// Enter the required data
const enterSubjects = Math.floor(Math.random() * 10) + 1
let totalEvaluation = []

function enterRandomEvaluation() {
    let Min = 2
    let Max = 5
    return Min + Math.floor(Math.random() * (Max - Min + 1))
}

for (let i = 1; i <= enterSubjects; i++) {
    totalEvaluation.push(enterRandomEvaluation())
}
document.write(`<div div class= "js-output"> Your values = ${totalEvaluation} </div>`)
console.log(totalEvaluation);

// Creating Functions

function getQuantityOf2(nameOfArray) {
    let res = 0
    for (let i = 0; i < nameOfArray.length; i++) {

        if (nameOfArray[i] === 2)
            res += 1
    }
    return res
}

function getQuantityOf4and5(nameOfArray) {
    let res = 0
    for (let i = 0; i < nameOfArray.length; i++) {

        if (nameOfArray[i] === 4)
            res += 1

        if (nameOfArray[i] === 5)
            res += 1
    }
    return res
}

function getBelowAverageGrades(nameOfArray) {
    let res = 0
    let quantity = 0

    for (let i = 0; i < nameOfArray.length; i++) {
        res += nameOfArray[i]
    }

    res = Math.round(res / nameOfArray.length)

    for (let j = 0; j < nameOfArray.length; j++) {
        if (nameOfArray[j] < res)
            quantity += 1
    }
    return quantity
}

//Determining the result

let QuantityOf2 = getQuantityOf2(totalEvaluation)
let quantityOf4and5 = getQuantityOf4and5(totalEvaluation)
let belowAverageGrades = getBelowAverageGrades(totalEvaluation)


// Result output
document.write(`<div div class= "js-output">Quantity grades of 2: ${QuantityOf2}</div>`)
document.write(`<div div class= "js-output">Quantity grades of 4 end 5: ${quantityOf4and5}</div>`)
document.write(`<div div class= "js-output">Grades that are below average: ${belowAverageGrades}</div>`)


