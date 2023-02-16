
// Enter the required data

let priceOfProduct1 = parseFloat(prompt('The cost of 1 product?', '12.5 uah.'))
let quantityOfProduct1 = parseFloat(prompt('What is the quantity of 1 product?', '105'))

let priceOfProduct2 = parseFloat(prompt('The cost of 2 product?', '15.15 uah.'))
let quantityOfProduct2 = parseFloat(prompt('What is the quantity of 2 product?', '15'))

let priceOfProduct3 = parseFloat(prompt('The cost of 3 product?', '20.52 uah.'))
let quantityOfProduct3 = parseFloat(prompt('What is the quantity of 2 product?', '53'))

//Determining the result 

let sumOfProduct1 = priceOfProduct1 * quantityOfProduct1
let sumOfProduct2 = priceOfProduct2 * quantityOfProduct2
let sumOfProduct3 = priceOfProduct3 * quantityOfProduct3

let totalSumOfProducts = sumOfProduct1 + sumOfProduct2 + sumOfProduct3

// Result output

document.write(`<div class="js-output"><h2>Result output:</h2></div>`)

document.write(`
<table class="js-table">
<tr>
<td>Name</td>
<td>Price</td>
<td>Sum</td>
</tr>

<tr>
<td style="border: #000 solid 1px;">1 product</td>
<td style="border: #000 solid 1px;">${priceOfProduct1}</td>
<td style="border: #000 solid 1px;">${sumOfProduct1}</td>
</tr>

<tr>
<td style="border: #000 solid 1px;">2 product</td>
<td style="border: #000 solid 1px;">${priceOfProduct2}</td>
<td style="border: #000 solid 1px;">${sumOfProduct2}</td>
</tr>

<tr>
<td style="border: #000 solid 1px;">3 product</td>
<td style="border: #000 solid 1px;">${priceOfProduct3}</td>
<td style="border: #000 solid 1px;">${sumOfProduct3}</td>
</tr>

<tr>
<td>Total:</td>
<td>${totalSumOfProducts}</td>
</tr>

</table>
`
)
