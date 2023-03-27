// ====================================================================================================================== //
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

// ====================================================================================================================== //
let now = new Date();

let enterDay = now.getDate()
let enterMonth = now.getMonth() + 1
let enterYear = now.getFullYear()

let today = {
    day: enterDay,
    month: enterMonth,
    year: enterYear
}

console.log(today);

function getShiftedDate({ day }, { month }, { year }, N) {
    month = month + N

    if (month > 12) {
        tempYear = Math.floor(month / 12)
        year += tempYear
        month = month % 12
    }
    return {
        day,
        month,
        year
    }
}

const enterN = parseInt(prompt(`Enter the quantity of month`, `11`))
let result = getShiftedDate(today, today, today, enterN)
console.log(result);


// ====================================================================================================================== //
