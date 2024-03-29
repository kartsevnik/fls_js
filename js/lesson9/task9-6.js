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
        baseArr[index] += randomNumber(-150, 150)
});
console.log(userArray);

// Result output

document.write(`<div div class= "js-output">Result:</div>`)

document.write(`<div div class= "js-output">Before forEach: ${userArray}</div>`)
userArray.forEach((element, index, x2Array) => {
    if (element > x2Array[0])
        x2Array[index] *= 2
});

document.write(`<div div class= "js-output">After forEach: ${userArray}</div>`)