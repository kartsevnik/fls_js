
// Enter the required data
let today = new Date()
let year = today.getFullYear()
let dayOfBirthday = parseInt(prompt(`What is your year of birth`, '1990'))

//Determining the result
let differenceYear = year - dayOfBirthday

// Input data entry

document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Year of birth - ${dayOfBirthday} </p> 
<p>Current year - ${year} </p> 
</div>`)

// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<h2>Oh, dear. It's been ${differenceYear} years, old man</h2>
</div>`)



