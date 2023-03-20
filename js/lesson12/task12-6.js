// =============================================== Enter the required data
let baseArray = ['Andrew', 'Olga', 'Semen', 'Ilon', 'Samuel', 'Katya', 'Julia']

baseArray.sort(function (a, b) {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    // a должно быть равным b
    return 0;
})
// =============================================== Determining the result

console.log(baseArray);

function includes_NameMoreFiveSymbols(nameArray, sizeElement) {
    let start = 0
    let end = nameArray.length

    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (nameArray[middle].length === sizeElement) return true
        if (nameArray[middle].length < sizeElement) start = middle + 1
        if (nameArray[middle].length > sizeElement) end = middle - 1
    }
    return false

}

let result_includesName = includes_NameMoreFiveSymbols(baseArray, 5)
console.log(result_includesName);

document.write(`<div class= "js-output">Includes name in array with more 5 symbols: ${result_includesName}</ div>`)
// =============================================== 
function index_NameMoreFiveSymbols(nameArray, sizeElement) {
    let start = 0
    let end = nameArray.length

    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (nameArray[middle].length === sizeElement) return middle
        if (nameArray[middle].length < sizeElement) start = middle + 1
        if (nameArray[middle].length > sizeElement) end = middle - 1
    }
    return -1

}

let result_indexSearch = index_NameMoreFiveSymbols(baseArray, 5)
console.log(result_indexSearch);
document.write(`<div class= "js-output">If includes name in array with more 5 symbols, which index: ${result_indexSearch}</ div>`)