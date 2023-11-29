// =============================================== Enter the required data
let baseArray = getArray1Level(30, 0, 20)
console.log(baseArray);

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

//Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
let bubbleArray = JSON.stringify(baseArray)
bubbleArray = JSON.parse(bubbleArray)

function getSortInStyleBubble(nameArray) {
    let changed
    let swaps = 0
    do {
        changed = false
        for (let i = 1; i < nameArray.length; i++) {
            if (nameArray[i - 1] > nameArray[i]) {
                let temp = nameArray[i - 1]
                nameArray[i - 1] = nameArray[i]
                nameArray[i] = temp
                swaps += 1
                changed = true
            }

        }

    } while (changed);
    return swaps
}

let sortedArrayWithBubble = getSortInStyleBubble(bubbleArray)

document.write(`<div class= "js-output" > Task 1: Bubbles used ${sortedArrayWithBubble} times</ div> `)

//Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
let cocktailArray = JSON.stringify(baseArray)
cocktailArray = JSON.parse(cocktailArray)

const swap = (nameArray, i, j) => {
    const temp = nameArray[i]
    nameArray[i] = nameArray[j]
    nameArray[j] = temp
}

function getSortInStyleCocktail(nameArray) {
    let leftIndex = 0
    let rightIndex = nameArray.length - 1
    let swaps = 0

    while (leftIndex < rightIndex) {
        for (let idx = leftIndex; idx < rightIndex; idx++) {
            if (nameArray[idx] > nameArray[idx + 1]) {
                swap(nameArray, idx, idx + 1)
                swaps++
            }
        }
        rightIndex--

        for (let idx = rightIndex; idx > leftIndex; idx--) {
            if (nameArray[idx] < nameArray[idx - 1]) {
                swap(nameArray, idx, idx - 1)
                swaps++
            }
        }
        leftIndex++

    }
    return swaps
}

let sortedArrayWithCocktail = getSortInStyleCocktail(cocktailArray)

document.write(`<div class= "js-output" > Task 2: Cocktail used ${sortedArrayWithCocktail} times</ div> `)

//Task 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
let insertArray = JSON.stringify(baseArray)
insertArray = JSON.parse(insertArray)

function getSortArrayWithInsert(nameArray) {
    let swap = 0
    for (let k = 1; k < nameArray.length; k++) {
        const currentElement = nameArray[k];
        let i = k - 1
        while (i >= 0 && nameArray[i] > currentElement) {
            nameArray[i + 1] = nameArray[i]
            i = i - 1
            swap++
        }
        nameArray[i + 1] = currentElement
        swap++
    }
    return swap
}

let sortedArrayWithInsert = getSortArrayWithInsert(insertArray)
console.log(sortedArrayWithInsert);

document.write(`<div class= "js-output" > Task 3: Insert style used ${sortedArrayWithInsert} times</ div> `)
