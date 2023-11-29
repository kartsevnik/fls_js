// Enter the required data
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;
let num4 = Math.floor(Math.random() * 100) + 1;

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


// Find of max 1
let max1 = Math.max(num1, num2, num3, num4);

// Remove the maximum number from the list to find the following maximum number
if (max1 === num1) {
    num1 = -Infinity;
} else if (max1 === num2) {
    num2 = -Infinity;
} else if (max1 === num3) {
    num3 = -Infinity;
} else if (max1 === num4) {
    num4 = -Infinity;
}

// Find of max 2
let max2 = Math.max(num1, num2, num3, num4);

// Result output

document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p> This is = ${max1} and ${max2}</p> 

</div>`)