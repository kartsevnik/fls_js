// Enter the required data
let quantityOfProducts = parseInt(prompt(`Enter the the number of items of goods`, `7`))
let price
let totalPrice = 0
let num = 1

// Determining the result

while (num <= quantityOfProducts) {
    price = parseFloat(prompt(`Enter the costs of ${num} product`, `2.5`));
    totalPrice = totalPrice + price;
    num++;
}

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Quantity of products = ${quantityOfProducts}</p> 
</div>`)

// Result output

document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p> Total costs is = ${totalPrice}</p> 

</div>`)

