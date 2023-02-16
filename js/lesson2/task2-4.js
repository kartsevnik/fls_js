// Enter the required data
let centimeter = parseInt(prompt(`What's up? How many centimeters are you have?`, `100`))

//Determining the result
let metr = centimeter / 100
let kilometr = centimeter / 100000

// Input data entry
document.write(`
<div class= "js-output">
<h2>Input data:</h2>
<p>The number of centimeters entered - ${centimeter} </p> 
</h2> `)

// Result output
document.write(`
<div class= "js-output">
<h2>Result output:</h2>
<p>Meters - ${metr}</p>
<p>Kilometers - ${kilometr} </p>
</div>`)

