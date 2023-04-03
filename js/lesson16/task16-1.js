// ====================================================================================================================== //

// Задача 1. 
// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
// Дата представляється структурою із трьома полями.
// Реалізувати методи збільшення / зменшення дати на певну кількість днів, місяців чи років.
// Введення та виведення дати реалізувати за допомогою методу  toString.

// ====================================================================================================================== //
let now = new Date();

// вхідні данні
let enterDay = now.getDate()
let enterMonth = now.getMonth() + 1
let enterYear = now.getFullYear()

// Массив значень відносно 31 дня у місяці
const limitOfMonth = [1, -2, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
const limitOfMonth2 = [0, -3, 0, -1, 0, -1, 0, 0, -1, 0, -1, 0]


class TDate {
    constructor(day, month, year) {
        this.day = day
        this.month = month
        this.year = year
    }
    // =========> method:
    increaseYear(value) {
        this.year += value
    }

    // =========> method:
    increaseMonth(value) {
        this.month += value
        this.increaseYear(Math.floor(this.month / 12))
        this.month = this.month % 12
    }

    // =========> method:
    increaseDay(value, arrayOfLimit) {
        this.day += value
        let plusMonth = Math.floor(this.day / 31)
        this.increaseMonth(Math.floor(this.day / 31))
        this.day = (this.day % 31) + this.correctDay(arrayOfLimit, (this.month - 1), (plusMonth + this.month - 1))

        if (this.day > 31) {
            this.increaseMonth(Math.floor(this.day / 31))
            this.day = (this.day % 31) - 1
        }
    }

    correctDay(arrayOfLimit, startMonth, endMonth) {
        let sum = 0

        if (endMonth < 12) {
            for (let i = startMonth; i < endMonth; i++) {
                sum += arrayOfLimit[i];
            }
        }
        else {
            for (let i = startMonth; i < 12; i++) {
                sum += arrayOfLimit[i];
            }
            let tempMonth
            do {
                tempMonth = endMonth - 12
                if (tempMonth < 12) {
                    for (let i = 0; i < tempMonth; i++) {
                        sum += arrayOfLimit[i];
                    }
                } else {
                    for (let i = 0; i < 12; i++) {
                        sum += arrayOfLimit[i];
                    }
                }
            } while (tempMonth > 12);
        }

        return sum
    }



    // ==================> method:
    toString() {
        return document.write(`<div class= "js-output"> Result date is: ${this.day}/${this.month}/${this.year}</div>`)
    }
}
// ====================================================================================================================== //

let initDate = new TDate(enterDay, enterMonth, enterYear)

// initDate.increaseYear(5)
// initDate.increaseMonth(11)
initDate.increaseDay(367, limitOfMonth)
initDate.toString()



// ====================================================================================================================== //
