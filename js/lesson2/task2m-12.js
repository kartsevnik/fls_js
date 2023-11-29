// Enter the required data
const ENTER_MONTH = parseInt(prompt(`How many month?`, `28`))

//Determining the result
const resultYears = Math.floor(ENTER_MONTH / 12)
const resultMonth = ENTER_MONTH % 12


// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data entry:</h2>
    <p>The number of months has been entered - ${ENTER_MONTH} </p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <h2>This is ${resultYears} years and ${resultMonth} monthes</h2>

    </div>`)