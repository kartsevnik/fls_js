// Enter the required data
const num1 = Math.random()
const num2 = Math.random()

// Determining the result
let integerNum1 = Math.floor(num1 * 10)
let integerNum2 = Math.floor(num2 * 10)

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Pc generated Num 1 = ${integerNum1}</p> 
<p>Pc generated Num 2 = ${integerNum2}</p> 

</div>`)

let resultText
let resultNumber

if (integerNum1 > integerNum2) {
    integerNum1 = 0
    resultNumber = integerNum1
    resultText = `Max number is Num1 its value is now equal to = `
}
else if
    (integerNum2 > integerNum1) {
    integerNum2 = 0
    resultNumber = integerNum2
    resultText = `Max number is Num2 its value is now equal to = `
}
else if
    (integerNum2 === integerNum1) {
    integerNum1 = 0
    integerNum2 = 0
    resultNumber = integerNum1
    resultText = `Num 1 and Num2 they have the same meaning and value is now equal to = `
}
else
    resultText = `Error value, try again`



// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>${resultText} ${resultNumber}</p> 
</div>`)