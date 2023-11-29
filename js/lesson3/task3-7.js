// Enter the required data
const month = parseInt(prompt(`Please, enter the number of month`, `3`))

// Determining the result
let nameOfMonth
if (month <= 2)
    nameOfMonth = 'winter'
else if (month <= 5)
    nameOfMonth = 'spring'
else if (month <= 8)
    nameOfMonth = 'summer'
else if (month <= 11)
    nameOfMonth = 'autumn'
else if (month == 12)
    nameOfMonth = 'winter'
else
    nameOfMonth = 'uncorrect number'

document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>You entered ${month}, this is ${nameOfMonth} </p> 
</div>`)