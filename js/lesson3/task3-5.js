// Enter the required data
const driverCategory = prompt(`Please, enter the driver category: A, B or C`, `A`).toUpperCase()

// Determining the result
let enteredDriverCategory
let typeOfTransport

if (driverCategory == "A") {
    enteredDriverCategory = 'A'
    typeOfTransport = 'motorcycle'
}
else if (driverCategory == "B") {
    enteredDriverCategory = 'B'
    typeOfTransport = 'car'
}
else if (driverCategory == "C") {
    enteredDriverCategory = 'C'
    typeOfTransport = 'truck'
}
else {
    enteredDriverCategory = 'error'
    typeOfTransport = 'error'
}

document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Are you have the driver category ${enteredDriverCategory} and can drive - ${typeOfTransport}</p> 
</div>`)
