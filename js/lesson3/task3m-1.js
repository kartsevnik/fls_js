// Enter the required data
const enterNumber = parseInt(prompt(`What is your mood?
1. Happy
2. Sad
3. Angry`, `1`))
// Determining the result

let result
if (enterNumber === 1)
    result = `&#128513;` // Happy
else if (enterNumber === 2)
    result = `&#128530;` // Sad
else if (enterNumber === 3)
    result = `&#128545;` // Angry
else result = `Error munber, try again`


// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>You entered number is ${enterNumber}</p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p> ${result}</p> 
</div>`)