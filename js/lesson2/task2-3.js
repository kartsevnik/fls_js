
// Enter the required data
let cost = parseFloat(prompt(`What is the price of roofing material in Odesa?`, '130.50 uah.'))
let remains = parseFloat(prompt(`How many more pieces do you have??`, '1403 pc.'))

//Determining the result
let sumOfProduct = cost * remains
let procent5 = sumOfProduct * 0.05

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Roofing material costs - ${cost} uah.</p>  
<p>Balance - ${remains} pc. </p></div>`)

// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<h2>If you want to buy everything, then you will have to pay ${sumOfProduct.toFixed(2)} uah., including ${procent5.toFixed(2)} uah. vat 5%</h2></div>`)
