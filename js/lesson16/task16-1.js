// ====================================================================================================================== //

// Задача 1.
// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”.
// Дата представляється структурою із трьома полями.
// Реалізувати методи збільшення / зменшення дати на певну кількість днів, місяців чи років.
// Введення та виведення дати реалізувати за допомогою методу  toString.

// ====================================================================================================================== //
// вхідні данні
let now = new Date();

const { day, month, year } = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
};


// Массив значень відносно 31 дня у місяці
const limitOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

class TDate {
    constructor({ day, month, year }) {
        this.day = day
        this.month = month
        this.year = year
    }
    // Реалізувати методи збільшення дати на певну кількість днів, місяців чи років.
    // =========> method:
    increaseYear(value) {
        this.year += value
    }

    // =========> method:
    increaseMonth(value) {
        this.month += value
        this.increaseYear(Math.floor(this.month / 12))
        this.month = this.month % 12
        if (this.month === 0) {
            this.month = 12
            this.year -= 1
        }
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

            // до тех пор пока значения больше текущих месяцев
            while (value > arrayOfLimit[(this.month - 1 + quantityOfMonth) % 12]) {
                // Если оставшееся количество введенных пользователем дней больше чем количество дней следующего месяца...
                if ((value > arrayOfLimit[(this.month - 1 + quantityOfMonth) % 12])) {
                    // ... то количество дней - количество дней в месяце
                    value -= arrayOfLimit[(this.month - 1 + quantityOfMonth) % 12]
                    //добавляем месяц + 1
                    quantityOfMonth += 1
                }

            }



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

    // Реалізувати методи зменшення дати на певну кількість днів, місяців чи років.
    // =========> method:
    decreaseYear(value) {
        this.year -= value
    }

    // =========> method:
    decreaseMonth(value) {
        this.month -= value
        //Передаем данные для расчета года
        let allOfMonth = 12 + (this.month * (-1))
        this.decreaseYear(Math.floor(allOfMonth / 12))
        // если месяц уходит в негативное значение, то...
        if (this.month < 0) {
            // создаем переменную с переводом значения в + для дальнейшего удобства
            let negativeMonth = this.month * (-1)
            //Если месяцев больше чем 12 используем остаток от деления
            if (negativeMonth > 12) {
                this.month = 12 - (negativeMonth % 12)
                //Если месяцев меньше чем 12 то просто вычитаем
            } else this.month = 12 - convertNegativeMonth
        }

        if (this.month === 0) {
            this.month = 12
        }
    }

    // =========> method:
    decreaseDay(value, arrayOfLimit) {
        // К разработке этого метода вернусь позже, уже мозг пухнет)
    }


    // Введення та виведення дати реалізувати за допомогою методу  toString.
    toString() {
        return document.write(`<div class= "js-output"> Result date is: ${this.day}/${this.month}/${this.year}</div>`)
    }
}
// ====================================================================================================================== //

let initDate = new TDate({ day, month, year })


// Реалізувати методи збільшення дати
// initDate.increaseYear(5)
// initDate.increaseMonth(8)
// initDate.increaseDay(365, limitOfMonth)

// Реалізувати методи зменшення дати
// initDate.decreaseYear(5)
// initDate.decreaseMonth(4)
initDate.decreaseDay(365, limitOfMonth)
initDate.toString()



// ====================================================================================================================== //

