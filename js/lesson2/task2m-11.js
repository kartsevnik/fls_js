// Enter the required data
const START_DAY = parseInt(prompt(`Enter start day?`, `5`))
const PLUS_DAYS = parseInt(prompt(`How many days plus?`, `5`))

//Determining the result
const result = (START_DAY + PLUS_DAYS) % 7


// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data entry:</h2>
    <p>Number of start day- ${START_DAY} </p> 
    <p>Plus ${PLUS_DAYS} days </p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <h2>Will ${result} day of next week</h2>

    </div>`)