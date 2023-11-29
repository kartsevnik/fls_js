// Enter the required data
const ENTER_LETTER = prompt("Please, enter the letter in the upper case from A to Z", 'Z').toUpperCase()
const ENTER_SHIFT_METHOD = parseInt(prompt(`Which shift method? (Enter the number)`, `3`))

// Transfer letter to number
const LetterToNumber = ENTER_LETTER.charCodeAt()

//Added shift method
const addedShiftMethod = LetterToNumber + ENTER_SHIFT_METHOD

//Determining the result
let result
if (addedShiftMethod < 90) {
    result = addedShiftMethod
}
else {
    result = ((addedShiftMethod - 65 - 1) % 25) + 65
}

// Input data entry
document.write(`
    <div class="js-output">
        <h2>Input data entry:</h2>
        <p>Entered letter = ${ENTER_LETTER}</p>
        <p>Added shift method = ${ENTER_SHIFT_METHOD}</p>
    </div>`)

// Result output
document.write(`
    <div class="js-output">
        <h2>Result output:</h2>
        <h2>Encrypted letter ${String.fromCharCode(result)}</h2>

        </div>`)
