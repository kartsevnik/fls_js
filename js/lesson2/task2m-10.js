
// Enter the required data
const ALL_DAYS = parseInt(prompt("How many days?", '25'))

//Determining the result
const quantityWeeks = Math.floor(ALL_DAYS / 7)


// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data entry:</h2>
    <p>Quantity of days - ${ALL_DAYS} years </p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <h2>This is ${quantityWeeks} weeks</h2>

    </div>`)
