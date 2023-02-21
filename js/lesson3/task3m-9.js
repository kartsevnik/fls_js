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
let min = Infinity
if (num1 >= 0 && num1 < min) min = num1
if (num2 >= 0 && num2 < min) min = num2
if (num3 >= 0 && num3 < min) min = num3
if (num4 >= 0 && num4 < min) min = num4

// =====================   Result output
document.write(`
<div class="js-output">
<h2>Min value: ${min}</h2>
</div>`)