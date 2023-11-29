// Enter the required data
let enterTheA = parseInt(prompt(`Enter the 1 number, please`, `3`))
let enterTheB = parseInt(prompt(`Enter the 2 number, please`, `3`))
let enterTheC = parseInt(prompt(`Enter the 3 number, please`, `3`))
let enterTheD = parseInt(prompt(`Enter the 4 number, please`, `3`))


// Creating Functions
function getSum(a, b, c, d) {
    let res = a + b + c + d
    return res
}

function getMultiplication(a, b, c, d) {
    let res = a * b * c * d
    return res
}

function getMiddleValue(a, b, c, d) {
    let res = (a + b + c + d) / 4
    return res
}

function getMin(a, b, c, d) {
    let res = Min(a, b, c, d)
    return res
}

// Determining the result
let resultSum = getSum(enterTheA, enterTheB, enterTheC, enterTheD)
let resultMultiplication = getMultiplication(enterTheA, enterTheB, enterTheC, enterTheD)
let resultMiddleValue = getMiddleValue(enterTheA, enterTheB, enterTheC, enterTheD)
let resultMin = getMiddleValue(enterTheA, enterTheB, enterTheC, enterTheD)

// Result output
document.write(`<div class="js-output">
<p> Sum of 4 numbers = ${resultSum}</p> 
<p> Multiplication of 4 numbers = ${resultMultiplication}</p> 
<p> Middle Value of 4 numbers = ${resultMiddleValue}</p> 
<p> Min Value of 4 numbers = ${resultMin}</p> 
</div>`)