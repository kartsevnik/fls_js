// Enter the required data
let driverCategory = prompt(`Please, enter the driver category: A, B or C`, `A`).toUpperCase()

// Determining the result

if (driverCategory == "A")
    document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Are you have the driver category ${driverCategory} and can drive - motorcycle</p> 
</div>`)
else if (driverCategory == "B")
    document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Are you have the driver category ${driverCategory} and can drive - car</p> 
</div>`)
else if (driverCategory == "C")
    document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Are you have the driver category ${driverCategory} and can drive - truck</p> 
</div>`)
else
    document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>I am sorry, but I don't understand this letter - ${driverCategory}, try again </p> 
</div>`)