// Enter the required data
// Ввод количества значений
const enterSizeOfArray = parseInt(prompt('Enter the your size of array, please', '10'))

// Creating Functions

function randomNumber(min, max) {
    let minNumber = min
    let maxNumber = max
    return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
}

//Determining the result
//Создаем массив
let userArray = new Array(enterSizeOfArray)
userArray.fill(0)
// Заполняем массив генерируемыми числами
userArray.forEach((element, index, baseArr) => {
    if (element === 0)
        baseArr[index] += randomNumber(0, 2000)
});

document.write(`<div div class= "js-output">Result:</div>`)

// Копируем значения в новый массив + расчет налога + текст uah.
const TAX = 20
let taxArray = userArray.map(element => Math.round(element * TAX / 100))

//Добавляем текст грн. в массивы
taxArray = taxArray.join(` uah, `)
userArray = userArray.join(` uah, `)

// userArray.forEach((element, index, baseArray) => {
//     baseArray[index] = ` ` + baseArray[index] + ` uah.`
// });

// Result output
document.write(`<div div class= "js-output">Purchase cost: ${userArray}</div>`)
document.write(`<div div class= "js-output">Tax cost: ${taxArray}</div>`)




