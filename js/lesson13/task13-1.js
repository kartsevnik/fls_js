// =========================================================== //
// Задача 1. Нехай X0 = 1, Xi = Xi-1 + 2i, де i = 1,2...
// Визначити Х10 Розв’язати з використанням рекурсивних і
// нерекурсивних алгоритмів
// =========================================================== //

function findX(num) {
    let temp = 1
    let result = 1

    for (let i = 1; i <= num; i++) {
        result = temp + (2 * i)
        temp = result
    }

    return result
}
let task1 = findX(10)
console.log(task1);
document.write(`<div class= "js-output" > Task 1: ${task1}</ div> `)

// Можно не проверять, скопипастино у "Yevhen__" как альтернативный пример)
// function task1(num) {
//     let x = [1]
//     let x_i
//     for (let i = 1; i <= num; i++) {
//         x_i = x[i - 1] + 2 * i
//         x.push(x_i)
//     }
//     return x[x.length - 1]
// }


// =========================================================== //

function findXWithRecursive(i) {
    if (i === 0) return 1
    else return findXWithRecursive(i - 1) + (2 * i)
}

let task1WithRecursive = findXWithRecursive(10)
console.log(task1WithRecursive);
document.write(`<div class= "js-output" > Task 1 with recursive function: ${task1WithRecursive}</ div> `)