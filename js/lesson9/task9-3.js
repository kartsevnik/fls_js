// Enter the required data
const enterSizeOfArray = parseInt(prompt('Enter the your size of array, please', '70'))

// Creating Functions

//Determining the result
let userArray = new Array(enterSizeOfArray)

userArray.fill(1, 0, 5)

let halfPastOfSizeArray = Math.round(enterSizeOfArray / 2)

userArray.fill(7, 5)


// Result output
document.write(`<div div class= "js-output">Result: ${userArray}</div>`)

