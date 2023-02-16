// Enter the required data
const time = new Date

console.log(time);
const HOURS = time.getHours()
const MINUTES = time.getMinutes()
const SECONDS = time.getSeconds()

const PLUS_SECONDS = parseInt(prompt('What number of seconds to add?', '355'))

//Determining the result
// Find all of seconds
const allSecondsInput = (HOURS * 3600) + (MINUTES * 60) + SECONDS
const resultSeconds = (SECONDS + PLUS_SECONDS) % 60
const resultHours = Math.floor(allSecondsInput / 3600)

const resultMinutes = ((allSecondsInput + PLUS_SECONDS) - (resultHours * 3600)) / 60
const integerMinutes = Math.floor(resultMinutes)


// Input data entry
document.write(`
<div class="js-output">
    <h2>Time is now:</h2>
    <p>HOURS - ${HOURS} </p> 
    <p>MINUTES - ${MINUTES} </p> 
    <p>SECONDS - ${SECONDS} </p> 
    <br>
    <p>Added seconds - ${PLUS_SECONDS} </p> 



</div>`)

// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <p>HOURS - ${resultHours} </p> 
    <p>MINUTES - ${integerMinutes} </p> 
    <p>SECONDS - ${resultSeconds} </p> 
    </div>`)
