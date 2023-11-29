// Enter the required data
const phonePrice = 10000
let money = 0
const minPayment = 1, maxPayment = 200
let counter = 0

// Determining the result
do {
    const payment =
        minPayment + Math.floor(Math.random() * (maxPayment - minPayment + 1))
    money += payment
    counter++
} while (money < phonePrice);
document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p>It took Olenka ${counter} attempt</p>
</div>`)
