// Enter the required data
const dayOfTheWeek = parseInt(prompt(`Please, enter the  day of the week. From 1 to 7`, `3`))

// Determining the result
let result

switch (dayOfTheWeek) {
    case 1: result = "Monday";
        break;
    case 2: result = "Tuesday";
        break;
    case 3: result = "Wednesday";
        break;
    case 4: result = "Thursday";
        break;
    case 5: result = "Friday";
        break;
    case 6: result = "Saturday";
        break;
    case 7: result = "Sunday";
        break;
    default: result = "Error. Try again";
        break;
}

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>You entered = ${dayOfTheWeek} </p> 

</div>`)


// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>This is = ${result} </p> 

</div>`)