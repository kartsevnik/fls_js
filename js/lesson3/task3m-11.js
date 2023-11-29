// Enter the required data
const generatedNum1 = Math.random()
const generatedNum2 = Math.random()
const generatedNum3 = Math.random()
const generatedNum4 = Math.random()
const generatedNum5 = Math.random()
const generatedNum6 = Math.random()

let num1 = Math.floor(generatedNum1 * 10)
let num2 = Math.floor(generatedNum2 * 10)
let num3 = Math.floor(generatedNum3 * 10)
let num4 = Math.floor(generatedNum4 * 10)
let num5 = Math.floor(generatedNum5 * 10)
let num6 = Math.floor(generatedNum6 * 10)

let averageValue = Math.round((num1 + num2 + num3 + num4 + num5 + num6) / 6)

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Pc generated num 1 = ${num1}</p> 
<p>Pc generated num 2 = ${num2}</p> 
<p>Pc generated num 3 = ${num3}</p> 
<p>Pc generated num 4 = ${num4}</p> 
<p>Pc generated num 5 = ${num5}</p> 
<p>Pc generated num 6 = ${num6}</p> 
</div>`)

// Determining the result
let max = -Infinity
if (num1 < averageValue && num1 > max) max = num1
if (num2 < averageValue && num2 > max) max = num2
if (num3 < averageValue && num3 > max) max = num3
if (num4 < averageValue && num4 > max) max = num4
if (num5 < averageValue && num4 > max) max = num5
if (num6 < averageValue && num4 > max) max = num6
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
<p> This is = ${max}</p> 

</div>`)