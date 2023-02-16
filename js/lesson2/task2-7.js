
// Enter the required data
let minMonth = 1, maxMonth = 12
let minDay = 0, maxDay = 6

//Determining the result
let randomMonth = minMonth + Math.floor(Math.random() * (maxMonth - minMonth + 1))
let randomDay = minDay + Math.floor(Math.random() * (maxDay - minDay + 1))

//Finding the final results
let sumRandomMonthAndDay = randomMonth + randomDay



// Input data entry
document.write(`
<div class="js-output">
<h2>Input data entry:</h2>
<p>Random month- ${randomMonth} </p> 
<p>Random day (from 0 to 6) - ${randomDay}  </p>
</div>`)

// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<h2>Sum of a random month and day - ${sumRandomMonthAndDay}</h2>
</div>`)
