
// Enter the required data
const costOfProduct = parseFloat(prompt(`How much does this product cost?`, `2500`))
const money = parseFloat(prompt(`How much money are you have?`, `3500`))

// Input data entry
document.write(`
// <div class="js-output">
 <h2>Input data:</h2>
<p>Product purchase ${costOfProduct} $</p> 
<p>Are you have ${money} $</p> 
 </div>`)

// Determining the result
if (costOfProduct > money)
    document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>Sorry, but to purchase a product you do not have enough ${costOfProduct - money} </p> 
</div>`)

else if (money > (costOfProduct + 3))
    document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>Are you want to buy another lottery ticket? It costs 4$ </p> 
</div>`)

else if (money >= costOfProduct)
    document.write(`
 <div class="js-output">
 <h2>Result output:</h2>
 <p>Thank you for your purchase. Have a nice day.</p> 
 </div>`)








// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>S1 = ${s1} </p> 

</div>`)