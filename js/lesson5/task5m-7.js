let startingSum = parseFloat(prompt(`Enter the sum of money, please`, `150`))
let addedSum = 0
let enterTheNumber = 0

do {
    enterTheNumber = parseFloat(prompt(`Enter the quantity of money`, `50`))
    addedSum += enterTheNumber
} while (startingSum > addedSum);

if (addedSum > startingSum)
    addedSum = `Your rest is ${(addedSum - startingSum)}`
if (addedSum == startingSum)
    addedSum = `Thank you, you paid is ${addedSum}`

document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p>${addedSum}</p>
</div>`)
