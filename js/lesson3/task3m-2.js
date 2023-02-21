// ====================Enter the required data

// Required data for generated randomly number
const randomNumberFirst = Math.random()
const randomNumberSecond = Math.random()
const integerRandomNumberFirst = Math.floor(randomNumberFirst * 100)
const integerRandomNumberSecond = Math.floor(randomNumberSecond * 100)

// Enter the number from user
const enterUserNumber = parseInt(prompt(`Please enter the number from 1 to 100 for start the game`, `50`))

// =====================Determining the result

// Generated randomly number
let min
let max
if (integerRandomNumberFirst > integerRandomNumberSecond) {
    max = integerRandomNumberFirst + 1
    min = integerRandomNumberSecond
}
else if (integerRandomNumberSecond > integerRandomNumberFirst) {
    max = integerRandomNumberSecond + 1
    min = integerRandomNumberFirst
}
else {
    max = integerRandomNumberSecond
    min = integerRandomNumberFirst
}

// Working with the number from user
let result
if ((enterUserNumber >= (min + 10)) && (enterUserNumber <= (max - 10)))
    result = `Yes, you win`
else if ((enterUserNumber >= (min - 10)) && (enterUserNumber <= (max + 10)))
    result = `Yes, you win`
else result = `I am sorry, you loose`

// ===================  Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Generated min number is ${min}</p> 
<p>Generated max number is ${max}</p> 
</div>`)

// ===================== Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p> ${result}</p> 
</div>`)