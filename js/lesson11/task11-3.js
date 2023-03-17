// Enter the required data
const enterQuantityOfShips = 5
const enterQuantityOfShells = parseInt(prompt(`Enter the quantity of shells`, `10`))


// =================================>>> Creating base Functions

function getRandomNumber(minValue, maxValue) {
    return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
}

// =================================>>> generate empty table

function getTableWith0(quantityOfRows, quantityOfColumns) {
    let table = []
    for (let i = 0; i < quantityOfRows; i++) {
        let row = new Array(quantityOfColumns)
        row.fill(0)
        table.push(row)
    }
    return table
}
let tableEmpty = getTableWith0(6, 6)
console.log(tableEmpty);


// ===========================>>> Раскидываем 1 (Корабли) по массиву в случайном порядке
function getPositionOfShips(tableArray, quantityOfShips) {

    for (let i = 0; i !== quantityOfShips; i++) {
        let row = getRandomNumber(0, 5)
        let column = getRandomNumber(0, 5)
        let randomCellOfTable = tableArray[row][column]

        if (randomCellOfTable === 0)
            tableArray[row][column] = 1
        else
            i--
    }
    return tableArray
}

let tableWithShips = getPositionOfShips(tableEmpty, enterQuantityOfShips)
console.log(tableWithShips);

// ================================= Determining the result of task
// Функция игры
function initGame(tableArray) {
    let quantityOfShells = 0

    start: while (true) {
        if (quantityOfShells === enterQuantityOfShells) {
            return `Oh no you loose. You shot ${quantityOfShells} times`
        }

        let usersShellsRow = parseInt(prompt(`Enter number of row (from 1 to 6)`, `1`))
        usersShellsRow = usersShellsRow - 1
        let usersShellsColumn = parseInt(prompt(`Enter number of column (from 1 to 6)`, `1`))
        usersShellsColumn = usersShellsColumn - 1

        // Вывод результата при отмене
        if (!usersShellsRow && (usersShellsRow !== 0) || !usersShellsColumn && (usersShellsColumn !== 0)) {
            return `Oh no you gave up. You shot ${quantityOfShells} times`
        }

        // Подсчет выстрелов
        quantityOfShells += 1
        lastShells = enterQuantityOfShells - quantityOfShells

        // Продолжение цикла если мимо
        if (tableArray[usersShellsRow][usersShellsColumn] === 0) {
            alert(`oops, shoot again, last ${lastShells}`)
            continue
        }

        // Изменение значения в массиве если попал
        if (tableArray[usersShellsRow][usersShellsColumn] === 1) {
            tableArray[usersShellsRow][usersShellsColumn] = 0
            alert(`Congratulations, shoot again`)
        }

        // Проверка массива на наличие 1 (оставшихся кораблей)
        for (let row of tableArray) {
            for (const element of row) {
                if (element === 1) {
                    continue start
                }
            }
        }

        return `Aliluia, you are win. You shot ${quantityOfShells} times`
    }
}

//Determining the result
let result = initGame(tableWithShips)

// Result output
document.write(`<div div class= "js-output">Result is: ${result}</div>`)

for (let i = 0; i < tableWithShips.length; i++) {
    document.write(`<p style="text-align: center;">${tableWithShips[i]}</p>`)
}



