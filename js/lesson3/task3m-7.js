// ===================== Enter the required data
const generatedNum1 = Math.random()
const generatedNum2 = Math.random()
const generatedNum3 = Math.random()
const generatedNum4 = Math.random()

let num1 = Math.floor(generatedNum1 * 10)
let num2 = Math.floor(generatedNum2 * 10)
let num3 = Math.floor(generatedNum3 * 10)
let num4 = Math.floor(generatedNum4 * 10)

// =====================  Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Pc generated num 1 = ${num1}</p> 
<p>Pc generated num 2 = ${num2}</p> 
<p>Pc generated num 3 = ${num3}</p> 
<p>Pc generated num 4 = ${num4}</p> 
</div>`)

// =====================  Determining the result

// Find the max value
let max
max = num1
if (num2 > max) max = num2
if (num3 > max) max = num3
if (num4 > max) max = num4
//   max = Math.max(num1, num2, num3, num4)

// The most among 4 replace with 0
if (num1 === max) num1 = 0
if (num2 === max) num2 = 0
if (num3 === max) num3 = 0
if (num4 === max) num4 = 0



// =====================   Result output
document.write(`
<div class="js-output">
<h2>Max value: ${max}</h2>
<p>num 1 = ${num1}</p> 
<p>num 2 = ${num2}</p> 
<p>num 3 = ${num3}</p> 
<p>num 4 = ${num4}</p> 
</div>`)