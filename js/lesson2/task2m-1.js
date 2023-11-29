
// Enter the required data
let displayWidth = window.innerWidth
console.log(displayWidth);
let quantityOfElements = parseInt(prompt('Enter the number of items', '14'))
let widthOfElements = parseInt(prompt('Enter the width of the elements', '20'))

//Finding results

let sumOfWidthElements = quantityOfElements * widthOfElements
let result = displayWidth / sumOfWidthElements


// Input data entry
document.write(`
<div class="js-output">
<h2>Input data entry:</h2>
<p>The width of your screen is- ${displayWidth} px </p> 
<p>A certain number of elements - ${quantityOfElements} pc</p> 
<p>Width of 1 element - ${widthOfElements} px</p></div>`)

// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<h2>The screen will display - ${result.toFixed(0)} elements</h2>
</div>`)
