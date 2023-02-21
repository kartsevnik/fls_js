// Enter the required data
const num1 = Math.random()
const num2 = Math.random()
const num3 = Math.random()
const num4 = Math.random()
const num5 = Math.random()
const num6 = Math.random()

let integerNum1 = Math.floor(num1 * 10)
let integerNum2 = Math.floor(num2 * 10)
let integerNum3 = Math.floor(num3 * 10)
let integerNum4 = Math.floor(num4 * 10)
let integerNum5 = Math.floor(num5 * 10)
let integerNum6 = Math.floor(num6 * 10)

let averageValue = Math.round((integerNum1 + integerNum2 + integerNum3 + integerNum4 + integerNum5 + integerNum6) / 6)

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Pc generated num 1 = ${integerNum1}</p> 
<p>Pc generated num 2 = ${integerNum2}</p> 
<p>Pc generated num 3 = ${integerNum3}</p> 
<p>Pc generated num 4 = ${integerNum4}</p> 
<p>Pc generated num 5 = ${integerNum5}</p> 
<p>Pc generated num 6 = ${integerNum6}</p> 
</div>`)

// Determining the result
if (integerNum1 > averageValue)
    integerNum1 = 0
if (integerNum2 > averageValue)
    integerNum2 = 0
if (integerNum3 > averageValue)
    integerNum3 = 0
if (integerNum4 > averageValue)
    integerNum4 = 0
if (integerNum5 > averageValue)
    integerNum5 = 0
if (integerNum6 > averageValue)
    integerNum6 = 0
else
    result = `Error, try again`


// Result output
document.write(`
<div class="js-output">
<h2>Average Value: ${averageValue}</h2>
</div>`)

document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p>num 1 = ${integerNum1}</p> 
<p>num 2 = ${integerNum2}</p> 
<p>num 3 = ${integerNum3}</p> 
<p>num 4 = ${integerNum4}</p> 
<p>num 5 = ${integerNum5}</p> 
<p>num 6 = ${integerNum6}</p> 
</div>`)