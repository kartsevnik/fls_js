// =============================================== Enter the required data
let baseArray = ['Olga', 'Semen', 'Ilon', 'Samuel', 'Katya', 'Julia', 'Andrew']
baseArray.sort()

// =============================================== Determining the result

function includes_BinarySearch(nameArray, searchElement) {
    let start = 0
    let end = nameArray.length

    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (nameArray[middle] === searchElement) return true
        if (nameArray[middle] < searchElement) start = middle + 1
        if (nameArray[middle] > searchElement) end = middle - 1
    }
    return false

}

let result_includesSearch = includes_BinarySearch(baseArray, 'Olga')
document.write(`<div class= "js-output">Includes Olga in array: ${result_includesSearch}</ div>`)

// ===============================================

function findIndex_BinarySearch(nameArray, searchElement) {
    let start = 0
    let end = nameArray.length

    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (nameArray[middle] === searchElement) return middle
        if (nameArray[middle] < searchElement) start = middle + 1
        if (nameArray[middle] > searchElement) end = middle - 1
    }
    return -1
}

let result_indexSearch = findIndex_BinarySearch(baseArray, 'Olga')
document.write(`<div class= "js-output">If includes Olga in array, which index: ${result_indexSearch}</ div>`)
