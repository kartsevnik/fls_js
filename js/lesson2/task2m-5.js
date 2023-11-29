
// Enter the required data
const fractionalPart = parseFloat(prompt('Enter the fractional part of number', '23.56'))
const integer = Math.trunc(fractionalPart)
const fractional = fractionalPart - integer
//Determining the result


// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data entry:</h2>
    <p>Fractional part of number - ${fractionalPart} </p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <h2>Integer of the fractional part ${integer}</h2>
    <p>Fractional part of number - ${fractional.toFixed(2)} </p> 

    </div>`)
