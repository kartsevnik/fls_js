// Enter the required data
const num1 = parseInt(prompt('Num1'))
const num2 = parseInt(prompt('Num2'))

// Determining the result

let max = num1 > num2 ? num1 : num2

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>num 1 = ${num1}</p> 
<p>num 2 = ${num2}</p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p> Max = ${max}</p> 
</div>`)