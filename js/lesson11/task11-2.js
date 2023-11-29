// Enter the required data
// let enterQuantityOfShops = parseInt(prompt(`Enter the quantity of weeks`, `5`))
const enterQuantityOfShops = 5
const quantityDaysInWeek = 7

// ================================= Creating base Functions

function getRandomNumber(minValue, maxValue) {
    return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
}

// generation one array
function generateRandomArray(daysInWeek, minValue, maxValue) {
    const arr = []
    for (let i = 0; i < daysInWeek; i++) {
        const randomNumber = getRandomNumber(minValue, maxValue);
        arr.push(randomNumber)
    }
    return arr
}

// generation table
function getTable(quantityOfShops, daysInWeek, minValue, maxValue) {
    const table = []
    for (let i = 0; i < quantityOfShops; i++) {
        const randomProfit = generateRandomArray(daysInWeek, minValue, maxValue)
        table.push(randomProfit)
    }
    return table
}

let arrayWithProfits = getTable(enterQuantityOfShops, quantityDaysInWeek, 0, 400)

// output genereated table
for (let i = 0; i < arrayWithProfits.length; i++) {
    document.write(`<p style="text-align: center;">Shop ${i + 1}: ${arrayWithProfits[i]}</p>`)
}

// ================================= Determining the result of tasks

//1) загальний прибуток кожного масиву за тиждень;
function getProfitEveryShopInWeek(tableArray, tableLength) {
    let tableWithResultOfProfit = []
    for (let rownumber = 0; rownumber < tableArray.length; rownumber++) {
        let sum = 0
        for (let colNumber = 0; colNumber < tableLength; colNumber++) {
            sum += tableArray[rownumber][colNumber]
        }
        tableWithResultOfProfit.push(sum)
    }
    return tableWithResultOfProfit
}
let profitEveryShopInWeek = getProfitEveryShopInWeek(arrayWithProfits, quantityDaysInWeek)

document.write(`<div class= "js-output" > Result 1 (Profit Every Shop In Week): ${profitEveryShopInWeek}</ div> `)

//2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

function getProfitInEveryDay(tableArray, tableLength) {
    let result = []
    for (let colNumber = 0; colNumber < tableLength; colNumber++) {
        let sum = 0
        for (let rownumber = 0; rownumber < tableArray.length; rownumber++) {
            sum += tableArray[rownumber][colNumber]
        }
        result.push(sum)
    }
    return result
}
let profitInEveryDay = getProfitInEveryDay(arrayWithProfits, quantityDaysInWeek)

document.write(`<div class= "js-output" > Result 2 (Profit In Every Day): ${profitInEveryDay}</ div> `)

//3. загальний прибуток за робочі дні
function getProfitInSpecifiedValue(tableArray, dayStart, dayEnd) {
    let sum = 0
    for (let rownumber = 0; rownumber < tableArray.length; rownumber++) {
        for (let colNumber = (dayStart - 1); colNumber <= (dayEnd - 1); colNumber++) {
            sum += tableArray[rownumber][colNumber]
        }
    }
    return sum
}
let profitInWorkingDay = getProfitInSpecifiedValue(arrayWithProfits, 1, 5)

document.write(`<div class= "js-output" > Result 3 (All profit In Working Day): ${profitInWorkingDay}</ div> `)

//4. загальний прибуток за вихідні дні
// function getProfitInWeekEnd(tableArray, tableLength) {
//     let sum = 0
//     for (let rownumber = 0; rownumber < tableArray.length; rownumber++) {
//         for (let colNumber = 5; colNumber < tableLength; colNumber++) {
//             sum += tableArray[rownumber][colNumber]
//         }
//     }
//     return sum
// }
let profitInWeekEnd = getProfitInSpecifiedValue(arrayWithProfits, 6, 7)

document.write(`<div class= "js-output" > Result 4 (All profit In Week End): ${profitInWeekEnd}</ div> `)

//5. максимальний прибуток за середу
function getMaxProfitInWednesday(tableArray) {
    let sum = 0
    for (let rownumber = 0; rownumber < tableArray.length; rownumber++) {
        for (let colNumber = 2; colNumber === 2; colNumber++) {
            if (tableArray[rownumber][colNumber] > sum) {
                sum = tableArray[rownumber][colNumber]
            }

        }
    }
    return sum
}
let maxProfitInWednesday = getMaxProfitInWednesday(arrayWithProfits, quantityDaysInWeek)

document.write(`<div class= "js-output" > Result 5 (Max Profit In Wednesday): ${maxProfitInWednesday}</ div> `)

//6. сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
function getArrayWithValueMore200(tableArray) {
    let result = []
    for (let row of tableArray) {
        for (const element of row) {
            if (element > 200) {
                result.push([element])
            }
        }
    }
    return result
}

let arrayWithValueMore200 = getArrayWithValueMore200(arrayWithProfits)
document.write(`<div class= "js-output" > Result 6 (Array With Value More 200): ${arrayWithValueMore200}</ div> `)


//7. відсортувати кожен тиждень за зростанням

let sortOfArrayWithProfits = JSON.stringify(arrayWithProfits)
sortOfArrayWithProfits = JSON.parse(sortOfArrayWithProfits)

function getSortUp(nameArray) {
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i].sort((el1, el2) => el1 - el2)

    }
    return nameArray
}
sortOfArrayWithProfits = getSortUp(sortOfArrayWithProfits)

// output sorted table
document.write(`<div class= "js-output" > Result 7 (sort each week in ascending order):</ div> `)

for (let i = 0; i < sortOfArrayWithProfits.length; i++) {
    document.write(`<p style="text-align: center;">Shop ${i + 1}: ${sortOfArrayWithProfits[i]}</p>`)
}

console.log(arrayWithProfits);
console.log(sortOfArrayWithProfits);

//8. відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

let sortRowsOfArrayWithProfits = JSON.stringify(arrayWithProfits)
sortRowsOfArrayWithProfits = JSON.parse(sortRowsOfArrayWithProfits)

function getSortDown(nameArray) {
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i].sort((el1, el2) => el2 - el1)
    }
    return nameArray
}
sortRowsOfArrayWithProfits = getSortDown(sortRowsOfArrayWithProfits)
sortRowsOfArrayWithProfits.sort((el1, el2) => el1[0] - el2[0])


// output sorted table
document.write(`<div class= "js-output" > Result 8 (sort weeks (rows) in descending order of the maximum element):</ div> `)

for (let i = 0; i < sortRowsOfArrayWithProfits.length; i++) {
    document.write(`<p style="text-align: center;"> ${sortRowsOfArrayWithProfits[i]}</p>`)
}

//9. Упорядкувати тижні (рядки) за спаданням суми елементів у рядку
//(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

let sortSumRowsOfArray = JSON.stringify(arrayWithProfits)
sortSumRowsOfArray = JSON.parse(sortSumRowsOfArray)

function getSumInRow(tableArray) {
    let result = []
    for (let row of tableArray) {
        let sum = 0
        for (const element of row) {
            sum += element
        }
        result.push([sum])
    }
    return result
}
sortSumRowsOfArray = getSumInRow(sortSumRowsOfArray)
sortSumRowsOfArray.sort((el1, el2) => el2 - el1)
document.write(`<div class= "js-output" > Result 9 (sort weeks (rows) in descending order of the sum of elements in a row): ${sortSumRowsOfArray}</ div> `)