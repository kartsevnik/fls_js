// Enter the required data
const enterSizeOfArray = parseInt(prompt('Enter the your size of array, please', '7'))

// Creating Functions

//Determining the result
let userArray = new Array(enterSizeOfArray)

let halfPastOfSizeArray = Math.round(enterSizeOfArray / 2)

userArray.fill(1, 0, halfPastOfSizeArray)
userArray.fill(7, halfPastOfSizeArray)

// Result output
document.write(`<div div class= "js-output">Result: ${userArray}</div>`)

