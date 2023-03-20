// =============================================== Enter the required data
let baseArray = getArray1Level(30, -500, 500)
console.log(baseArray);

let newArray = JSON.stringify(baseArray)
newArray = JSON.parse(newArray)


// =============================================== Creating Base Functions
function getRandomNum(minV, maxV) {
    return minV + Math.floor(Math.random() * (maxV - minV) + 1)
}

function getArray1Level(sizeOfArray, minV, maxV) {
    let tempArray = []
    for (let index = 0; index < sizeOfArray; index++) {
        let tempNumber = getRandomNum(minV, maxV)
        tempArray.push(tempNumber)
    }
    return tempArray
}

// =============================================== Determining the result

newArray.sort((el1, el2) => {
    return Math.abs(el1) - Math.abs(el2)

})
console.log(newArray);