// Enter the required data
const ENTER_LETTER = prompt("Please, enter the letter in the upper case from A to Z", 'A').toUpperCase()
const ENTER_SHIFT_METHOD = parseInt(prompt(`Which shift method? (Number from 1 to 10)`, `1`))

// Transfer letter to number
const LetterToNumber = ENTER_LETTER.charCodeAt(0)

//Added shift method
const addedShiftMethod = LetterToNumber + ENTER_SHIFT_METHOD

console.log(addedShiftMethod);



//Determining the result
// Решение
console.log(24 % 23);

document.write(`
<div>Введенная буква: ${letter}</div>
<div>Зашифрованная буква: ${newLatter}</div>
`)

// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data entry:</h2>
    <p>Age of child - ${AGE_OF_CHILD} years </p> 

</div>`)

// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <h2>Time to go to the garden left to wait ${timeToGoToKindergarten} years</h2>

    </div>`)
