
// Enter the required data
const QUANTITY_OF_CENTS = parseInt(prompt("How much cents are you have?", '245'))

//Determining the result
const fractionalNumber = QUANTITY_OF_CENTS / 100
const integerNumber = Math.floor(fractionalNumber)
const fractionResidue = fractionalNumber - integerNumber



// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data entry:</h2>
    <p>Quantity of cents - ${QUANTITY_OF_CENTS} </p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <h2>This is ${integerNumber}$ and ${fractionResidue.toFixed(2)} cents</h2>

    </div>`)
