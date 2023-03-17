// Enter the required data
let task11Array = [
    [15, 20, 67, 5],
    [25, 20, 68, 6],
    [35, 20, 69, 7],
    [45, 20, 70, 8],
]

for (let i = 0; i < task11Array.length; i++) {
    document.write(`<p style="text-align: center;">${task11Array[i]}</p>`)
}


// Creating Functions

function getResult(tableArray, rowNumberstart, rowNumberEnd, colNumberstart, colNumberEnd) {
    let sum = 0
    for (let rowNumber = rowNumberstart; rowNumber <= rowNumberEnd; rowNumber++) {
        for (let colNumber = colNumberstart; colNumber <= colNumberEnd; colNumber++) {
            sum += tableArray[rowNumber][colNumber]
        }
    }
    return sum
}

//Determining the result
let result1 = getResult(task11Array, 0, 1, 0, 1)
let result2 = getResult(task11Array, 0, 1, 2, 3)
let result3 = getResult(task11Array, 2, 3, 0, 1)
let result4 = getResult(task11Array, 2, 3, 2, 3)

let result5 = getResult(task11Array, 0, 0, 0, 3) + getResult(task11Array, 2, 2, 0, 3)
let result6 = getResult(task11Array, 1, 1, 0, 3) + getResult(task11Array, 3, 3, 0, 3)
let result7EvenRows =
    getResult(task11Array, 0, 0, 1, 1) +
    getResult(task11Array, 0, 0, 3, 3) +
    getResult(task11Array, 2, 2, 1, 1) +
    getResult(task11Array, 2, 2, 3, 3)

let result7OddRows =
    getResult(task11Array, 1, 1, 0, 0) +
    getResult(task11Array, 1, 1, 2, 2) +
    getResult(task11Array, 3, 3, 0, 0) +
    getResult(task11Array, 3, 3, 2, 2)

// Result output



document.write(`<div class= "js-output" style="padding-top: 20px;" > Result 1: ${result1}</ div> `)
document.write(`<div class= "js-output" > Result 2: ${result2}</ div> `)
document.write(`<div class= "js-output" > Result 3: ${result3}</ div> `)
document.write(`<div class= "js-output" > Result 4: ${result4}</ div> `)

document.write(`<div class= "js-output" > Result 5: ${result5}</ div> `)
document.write(`<div class= "js-output" > Result 6: ${result6}</ div> `)
document.write(`<div class= "js-output" > Result 7 even rows: ${result7EvenRows}</ div> `)
document.write(`<div class= "js-output" > Result 7 odd rows: ${result7OddRows}</ div> `)