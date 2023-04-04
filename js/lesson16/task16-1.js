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
const limitOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
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
        let quantityOfMonth = 0
        //Считаем количество оставшихся дней до конца месяца
        let lastDayInMonth = arrayOfLimit[this.month - 1] - this.day
        // даем стартовому дню 0 значение
        this.day = 0
        if (value >= 365) {
            this.day = -1

        }
        //Если указанное значение больше чем осталось дней в месяце, то...
        if (value > lastDayInMonth) {
            //...получаем остаток введенных пользователем дней за вычетом оставшихся дней в месяце
            value -= lastDayInMonth
            //добавляем месяц + 1
            quantityOfMonth += 1

            do {
                // Если оставшееся количество введенных пользователем дней больше чем количество дней следующего месяца...
                if ((value > arrayOfLimit[(this.month - 1 + quantityOfMonth) % 12])) {
                    // ... то количество дней - количество дней в месяце
                    value -= arrayOfLimit[(this.month - 1 + quantityOfMonth) % 12]
                    //добавляем месяц + 1
                    quantityOfMonth += 1
                }
                // до тех пор пока значения больше текущих месяцев
            } while (value > arrayOfLimit[(this.month - 1 + quantityOfMonth) % 12]);

            //добавляем оставшиеся дни
            this.day += value
            // вызываем метод для изменения месяцев и года в результате
            this.increaseMonth(quantityOfMonth)
            // исправляем значеник в случае если декабрь месяц
            if (this.month === 0) {
                this.month = 12
                this.year -= 1
            }
            //в ином случае добавляем введенные дни к текущему
        } else this.day + value

    }
    toString() {
        return document.write(`<div class= "js-output"> Result date is: ${this.day}/${this.month}/${this.year}</div>`)
    }
}
// ====================================================================================================================== //

let initDate = new TDate(enterDay, enterMonth, enterYear)

// initDate.increaseYear(5)
// initDate.increaseMonth(11)
initDate.increaseDay(1000, limitOfMonth)
initDate.toString()



// ====================================================================================================================== //
