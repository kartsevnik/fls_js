// Enter the required data
const enterSizeOfArray = parseInt(prompt('Enter the your size of array, please', '17'))

// Creating Functions
function randomNumber(min, max) {
    let minNumber = min
    let maxNumber = max
    return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
}

//Determining the result
let userArray = new Array(enterSizeOfArray)
userArray.fill(0)
console.log(userArray);

userArray.forEach((element, index, baseArr) => {
    if (element === 0)
        baseArr[index] += randomNumber(0, 150)
});
console.log(userArray);

// Result output
document.write(`<div div class= "js-output">Result:</div>`)
for (const element of userArray) {
    if (element > 100)
        document.write(`<div div class= "js-output">${element}</div>`)
}

