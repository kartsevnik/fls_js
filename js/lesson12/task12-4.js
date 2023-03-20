// =============================================== Enter the required data
let baseArray = [3, 5, 1, 4, 2]
console.log(baseArray);

// =============================================== Determining the result

// 1. сортування бульбашкою
let bubbleArray = JSON.stringify(baseArray)
bubbleArray = JSON.parse(bubbleArray)

for (let i = 2; i <= 4; i++) {
    do {
        changed = false
        if (bubbleArray[i - 1] > bubbleArray[i]) {
            let temp = bubbleArray[i - 1]
            bubbleArray[i - 1] = bubbleArray[i]
            bubbleArray[i] = temp
            changed = true
        }
    } while (changed);
    document.write(`<div class= "js-output">Bubbles ${i - 1} iteration: ${bubbleArray}</ div> `)
}


// 2.  сортування змішуванням.
let cocktailArray = JSON.stringify(baseArray)
cocktailArray = JSON.parse(cocktailArray)

const swap = (nameArray, i, j) => {
    const temp = nameArray[i]
    nameArray[i] = nameArray[j]
    nameArray[j] = temp
}

let leftIndex = 0
let rightIndex = 4

for (let i = leftIndex; i < rightIndex; i++) {
    if (cocktailArray[i] > cocktailArray[i + 1]) {
        swap(cocktailArray, i, i + 1)
    }
    document.write(`<div class= "js-output">Cocktail ${i + 1} iteration: ${cocktailArray}</ div> `)
}

console.log(cocktailArray);


// 3. сортування включеннями.
let insertArray = JSON.stringify(baseArray)
insertArray = JSON.parse(insertArray)

for (let k = 1; k < insertArray.length; k++) {
    const currentElement = insertArray[k];
    let i = k - 1
    while (i >= 0 && insertArray[i] > currentElement) {
        insertArray[i + 1] = insertArray[i]
        i = i - 1
    }
    insertArray[i + 1] = currentElement
    document.write(`<div class= "js-output">Inclusion style ${k} iteration: ${insertArray}</ div> `)
}