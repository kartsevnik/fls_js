// Enter the required data
const enterQuantityOfCells = parseInt(prompt(`Enter quantity of cells`, `10`))
const enterQuantityOfShips = parseInt(prompt(`Enter quantity of ships`, `5`))
let fieldOfPlay = []

//Заполняем массив 0
for (let i = 0; i < enterQuantityOfCells; i++) {
    fieldOfPlay.push(0)
}

// Creating Functions

// Генерация случайного номера для распределения 1 (Кораблей) в массиве
function randomCellOShipPosition() {
    let Min = 1
    let Max = enterQuantityOfCells
    return Min + Math.floor(Math.random() * (Max - Min + 1))
}

// Раскидываем 1 (Кораблей) по массиву в случайном порядке
function getPositionOfShips(nameArray, quantityOfCells, quantityOfShips) {

    for (let i = 0; (i < quantityOfCells) && (i !== quantityOfShips); i++) {
        let randomNum = randomCellOShipPosition()

        if (nameArray[randomNum] === 0)
            nameArray[randomNum] = 1
        else
            i--
    }
}

// Функция игры
function initGame(nameArray) {
    let quantityOfShoot = 0

    start: while (true) {
        let usersShoot = parseInt(prompt(`Enter number of cell`, `1`))
        usersShoot = usersShoot - 1

        // Вывод результата при отмене
        if (!usersShoot && (usersShoot !== 0)) {
            return `Oh no you gave up. You shot ${quantityOfShoot} times`
        }
        // Подсчет выстрелов
        quantityOfShoot += 1
        // Продолжение цикла если мимо
        if (nameArray[usersShoot] === 0) {
            continue
        }
        // Изменение значения в массиве если попал
        if (nameArray[usersShoot] === 1) {
            nameArray[usersShoot] = 0
        }
        // Проверка массива на наличие 1 (оставшихся кораблей)
        for (let j = 0; j < nameArray.length; j++) {
            if (nameArray[j] === 1) {
                continue start
            }
        }

        return `Aliluia, you are win. You shot ${quantityOfShoot} times`
    }
}

//Determining the result
let PositionOfShips = getPositionOfShips(fieldOfPlay, enterQuantityOfCells, enterQuantityOfShips)
let result = initGame(fieldOfPlay)

// Result output
document.write(`<div div class= "js-output">Result is: ${result}</div>`)




