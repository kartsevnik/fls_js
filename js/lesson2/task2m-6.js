
// Enter the required data
const year = parseInt(prompt('Enter the year', '1901'))

//Determining the result
const result = Math.ceil(year / 100)

// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data entry:</h2>
    <p>Input year - ${year} </p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <h2>This is ${result} century</h2>

    </div>`)
