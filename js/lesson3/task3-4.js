// Enter the required data
const ageOfPerson = parseInt(prompt(`Please, enter the age of person`, ``))

// Determining the result
let statusOfPerson

if (ageOfPerson < 6)
    statusOfPerson = 'kindergartner'
else if (ageOfPerson < 17)
    statusOfPerson = 'schoolchild'
else if (ageOfPerson < 22)
    statusOfPerson = 'student'
else if (ageOfPerson < 65)
    statusOfPerson = 'worker'
else if (ageOfPerson < 100)
    statusOfPerson = 'pensioner'
else
    statusOfPerson = 'Error'

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data entry:</h2>
<p>The age of person is - ${ageOfPerson} </p> 
</div>`)

// Result output
document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>Hello you are ${statusOfPerson}. How are you?</p> 
</div>`)
