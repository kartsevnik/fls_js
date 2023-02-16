
// Enter the required data
let a = parseFloat(prompt("Enter an integer a", '10'))
let b = parseFloat(prompt("Enter an integer b", '20'))

//Determining the result
let sum = a + b
let multiplication = a * b
let division = a / b

// Input data entry
document.write(`<div class="js-output"><h2>Input data:</h2> <p>a = ${a} </p> <p>a = ${b} </p></div>`)

// Result output
document.write(`<div class="js-output"><h2>Result output:</h2></div>`)

document.write(`
<table class="js-table">

<tr>
<td>Sum</td>
<td>Multiplication</td>
<td>Division</td>
</tr>

<tr>
<td style="border: #000 solid 1px;">${sum}</td>
<td style="border: #000 solid 1px;">${multiplication}</td>
<td style="border: #000 solid 1px;">${division}</td>
</tr>

</table>
`
)
