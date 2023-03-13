// Enter the required data
// Ввод количества значений
const enterSizeOfArray = parseInt(prompt('Enter certain period of securities prices, please', '20'))

// Creating Functions

function randomNumber(min, max) {
    let minNumber = min
    let maxNumber = max
    return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
}

function addSpace(nameArray) {
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = ` ` + nameArray[i]
    }
    return
}

//Determining the result
//Создаем массив
let userArray = new Array(enterSizeOfArray).fill(0).map(() => randomNumber(1, 10000))

//=============================================================================================
//1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
let arrayMore1000 = userArray.filter(el => el > 1000)
let addSpaceToArrayMore1000 = addSpace(arrayMore1000)
document.write(`<div div class= "js-output">1. Prices more 1000: ${arrayMore1000}</div>`)
//=============================================================================================
//3)Сформувати список з тих цін, які більші за попереднє значення
const arrayMoreOfLast = userArray.filter((element, index, baseArr) => element < baseArr[index + 1])
document.write(`<div div class= "js-output">3. Prices that are greater than the previous value: ${arrayMoreOfLast}</div>`)

// Полный вариант записи
// let arrayMoreOfLast = []
// userArray.forEach((element, index, baseArr) => {
//     if (element < baseArr[index + 1])
//         arrayMoreOfLast.push(baseArr[index])
// });

//=============================================================================================
//4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
const maxOfUserArray = Math.max(...userArray)
const arrayInProcent = userArray.map(element => element = Math.round((element * 100) / maxOfUserArray))

// Полный вариант записи
// let arrayInProcent = []
// userArray.forEach((element, index, baseArr) => {
//     element = (element * 100) / maxOfUserArray
//     arrayInProcent.push(Math.round(element))
// });
document.write(`<div div class= "js-output">4. The prices values as a percentage of the maximum: ${arrayInProcent}</div>`)

//=============================================================================================
//5) Підрахувати кількість змін цін

function getQuantityOfChangeValue(nameArray) {
    let res = 0
    for (let element of nameArray)
        if (element != nameArray[0])
            res += 1
    return res
}

// Полный вариант записи
// function getQuantityOfChangeValue(nameArray) {
//     let res = 0
//     for (let i = 0; i < nameArray.length; i++) {
//         if (nameArray[i] != nameArray[0])
//             res += 1
//     }
//     return res
// }

let quantityOfChangeValue = getQuantityOfChangeValue(userArray)
document.write(`<div class= "js-output">5. Count the number of price changes ${quantityOfChangeValue}</div>`)

//=============================================================================================
//6) Визначити, чи є ціна, що менше 1000

document.write(`<div class= "js-output">6. Determine if there is a price that is less than 1000:`)

// 1 вариант
// let valueOfArrayLes1000 = userArray.find(el => el < 1000)

// 2 вариант
let ifSomeValueOfArrayLes1000 = userArray.some(el => el < 1000)

if (ifSomeValueOfArrayLes1000) {
    document.write(` Yes, it is.</div>`)
} else document.write(` No, it is not</div>`)

//=============================================================================================
//7)Визначати, чи усі ціни більше за 1000
document.write(`<div class= "js-output">7. Determine if all prices are greater than 1000:`)
let isAllValueOfArrayMore1000 = userArray.every(el => el > 1000)
if (isAllValueOfArrayMore1000) {
    document.write(` Yes, they are over 1000</div>`)
} else document.write(` No, there are values less than 1000</div>`)

//=============================================================================================
//8) Підрахувати кількість цін, що більше за 1000
document.write(`<div class= "js-output">8. Count the number of prices that are greater than 1000.`)
// 1 Вариант
// function getCostMore1000(nameArray) {
//     let res = 0
//     for (const element of nameArray) {
//         if (element > 1000) {
//             res += 1
//         }
//     }
//     return res
// }
// let costMore1000 = getCostMore1000(userArray)

// 2 Вариант
function getQuantityOfMore1000(prevResult, value) {
    if (value > 1000) { prevResult++ }
    return prevResult

}

let quantityOfMore1000 = userArray.reduce(getQuantityOfMore1000, 0)

document.write(` There are ${quantityOfMore1000} such elements in the array </div>`)

//=============================================================================================
//9)Підрахувати суму цін, що більше за 1000
document.write(`<div class= "js-output">9. Calculate the sum of prices that are greater than 1000:`)

// 1 Вариант
let sumMore1000 = 0
for (const iterator of userArray) { sumMore1000 += iterator }

document.write(`${sumMore1000}</div>`)

// 2 Вариант
// function getSumOfArrayMore1000(prevResult, value) {
//     prevResult += value
//     return prevResult
// }

// let sumOfArrayMore1000 = userArray.reduce(getSumOfArrayMore1000, 0)
// document.write(` ${sumOfArrayMore1000}</div>`)

//=============================================================================================
// 10)Знайти першу ціну, що більше за 1000

document.write(`<div class= "js-output">10. Find the first price that is greater than 1000:`)

let valueOfArrayMore1000 = userArray.find(el => el > 1000)
console.log(valueOfArrayMore1000);

if (valueOfArrayMore1000 > 1000) {
    document.write(` This is ${valueOfArrayMore1000}</div>`)
} else document.write(` No value less than 1000</div>`)

//=============================================================================================
//11)Знайти індекс першої ціни, що більше за 1000

document.write(`<div class= "js-output">11. Find the index of the first price that is greater than 1000:`)
console.log(userArray);
let indexOfArrayMore1000 = userArray.findIndex(el => el > 1000)

if (indexOfArrayMore1000) {
    document.write(` This is ${indexOfArrayMore1000} index</div>`)
} else document.write(` No value less than 1000</div>`)

//=============================================================================================
//12)Знайти останню ціну, що більше за 1000
document.write(`<div class= "js-output">10. Find the first price that is greater than 1000:`)

let lastValueOfArrayMore1000 = userArray.at[el => el > 1000]
console.log(lastValueOfArrayMore1000);

// if (lastValueOfArrayMore1000 > 1000) {
//     document.write(` This is ${valueOfArrayMore1000}</div>`)
// } else document.write(` No value less than 1000</div>`)


