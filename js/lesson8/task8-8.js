// Enter the required data
const enterValue = parseInt(prompt(`Enter quantity of elements`, `500`))
let elementsConValue = []



// Creating Functions
function enterRandomNumber() {
    let Min = -500
    let Max = 500
    return Min + Math.floor(Math.random() * (Max - Min + 1))
}

for (let i = 1; i <= enterValue; i++) {
    elementsConValue.push(enterRandomNumber())
}
console.log(elementsConValue);


//Determining the result

function getResultOfGame(nameArray) {
    let result = 0

    for (; ;) {
        let enterNum = parseInt(prompt(`Enter num of your elements`, ``))
        if (!enterNum) break
        enterNum = nameArray[enterNum - 1]
        document.write(`<div div class= "js-output">You entered: ${enterNum}</div>`)
        result += enterNum
    }
    return result
}

let resultOfGame = getResultOfGame(elementsConValue)


// Result output
document.write(`<div div class= "js-output">Result is: ${resultOfGame}</div>`)




