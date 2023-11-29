
// Enter the required data
const salary = parseFloat(prompt(`Enter the amount of salary`, `1500$`))
const subsistenceMinimum = parseFloat(prompt(`Enter the subsistenceMinimum`, `2100$`))

//Determining the result
let result = subsistenceMinimum - salary

// Input data entry
document.write(`<div class="js-output"><h2>Input data entry:</h2><p>Amount of salary - ${salary} $ </p><p>Subsistence minimum - ${subsistenceMinimum} $ </p></div>`)
// Result output
document.write(`<div class="js-output"><h2>Result entry:</h2><p>The amount of social assistance is equal - ${result} $ </p></div>`)
