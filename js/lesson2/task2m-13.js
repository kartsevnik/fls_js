
// Enter the required data
const ENTER_MONTH = parseInt(prompt(`Please, enter the start month`, '7'))
const ENTER_PLUS_MONTH = parseInt(prompt(`Please, enter the quantity of month to be added`, '7'))
//Determining the result
const result = (ENTER_MONTH + ENTER_PLUS_MONTH) % 12

// Input data entry
document.write(`
    <div class="js-output">
        <h2>Input data entry:</h2>
        <p>Start quantity of monthes - ${ENTER_MONTH} </p>
        <p>Added - ${ENTER_PLUS_MONTH} </p>

    </div>`)

// Result output
document.write(`
    <div class="js-output">
        <h2>Result output:</h2>
        <h2>Will be ${result} number of month</h2>

    </div>`)
