// Enter the required data
const generatedNum1 = Math.random()
const generatedNum2 = Math.random()
const generatedNum3 = Math.random()
const generatedNum4 = Math.random()


let num1 = Math.floor(generatedNum1 * 10)
let num2 = Math.floor(generatedNum2 * 10)
let num3 = Math.floor(generatedNum3 * 10)
let num4 = Math.floor(generatedNum4 * 10)

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Pc generated num 1 = ${num1}</p> 
<p>Pc generated num 2 = ${num2}</p> 
<p>Pc generated num 3 = ${num3}</p> 
<p>Pc generated num 4 = ${num4}</p> 
</div>`)

// Determining the result
let minNumber = -Infinity

// Find of max 1
let max1
if (num1 > minNumber) max1 = num1
if (num2 > minNumber && num2 > max1) max1 = num2
if (num3 > minNumber && num3 > max1) max1 = num3
if (num4 > minNumber && num4 > max1) max1 = num4
else
    result = `Error, try again`

// Find of max 2
let max2

if (num1 > minNumber && num1 <= max1) max2 = num1
if (num2 > minNumber && num2 < max1 && num2 <= max2) max2 = num2
if (num3 > minNumber && num3 < max1 && num3 <= max2) max2 = num3
if (num4 > minNumber && num4 < max1 && num4 <= max2) max2 = num4
if (num1 > minNumber && num1 < max1 && num1 > max2) max2 = num1
if (num2 > minNumber && num2 < max1 && num2 > max2) max2 = num2
if (num3 > minNumber && num3 < max1 && num3 > max2) max2 = num3
if (num4 > minNumber && num4 < max1 && num4 > max2) max2 = num4
else
    result = `Error, try again`

// Result output

document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p> This is = ${max1} and ${max2}</p> 

</div>`)