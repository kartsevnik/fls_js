
// Enter the required data
let quantityOfSeconds = parseInt(prompt(`Enter the total number of seconds`, '6500'))

//Determining the result 

//------------------------Finding the hours
let hours = quantityOfSeconds / 3600
//Print an integer
let integerHours = Math.floor(hours)

//------------------------Finding the minutes
let minuts = quantityOfSeconds / 60
//Print an integer
let integerminuts = Math.floor(minuts)

//------------------------Find the remaining seconds
let lastseconds = quantityOfSeconds % 60



//------------------------Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<h3>${integerHours} hour(s), ${integerminuts.toFixed(0)} minutes, ${lastseconds} seconds,</h3>
</div>`)
