
// Enter the required data
const costOfProduct = parseFloat(prompt(`How much does this product cost?`, `2500`))
const money = parseFloat(prompt(`How much money are you have?`, `3500`))

let result
// Determining the result
if (costOfProduct > money)
    result = 'Sorry, but to purchase a product you do not have enough'
else if (money > (costOfProduct + 3))
    result = 'Are you want to buy another lottery ticket? It costs 4$'
else if (money >= costOfProduct)
    result = 'Thank you for your purchase. Have a nice day.'

// Input data entry
document.write(`
// <div class="js-output">
 <h2>Input data:</h2>
<p>Product purchase ${costOfProduct} $</p> 
<p>Are you have ${money} $</p> 
 </div>`)

// Result output
document.write(`
 <div class="js-output">
 <h2>Result output:</h2>
 <p>${result} </p> 
 </div>`)







