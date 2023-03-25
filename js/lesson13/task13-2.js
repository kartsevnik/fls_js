// =========================================================== //
// Task 2. Нехай x_0 = x_1 = 1, x_i = x_i-1 + 2x_i-2, де i = 2,3,....
// Визначити x_n.Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів
// =========================================================== //

function findXn(num) {
    let x_0 = x_1 = 1
    let x_n

    for (let i = 2; i <= num; i++) {
        x_n = x_1 + 2 * x_0

        x_0 = x_1
        x_1 = x_n
    }

    return x_n
}

let task2 = findXn(10)
console.log(task2);
document.write(`<div class= "js-output" > Task 2: ${task2}</ div> `)

// =========================================================== //

function findXWithRecursive(i) {
    if (i === 0 || i === 1) return 1
    else return findXWithRecursive(i - 1) + (2 * findXWithRecursive(i - 2))
}

let task2WithRecursive = findXWithRecursive(10)
console.log(task2WithRecursive);
document.write(`<div class= "js-output" > Task 2 with recursive function: ${task2WithRecursive}</ div> `)

