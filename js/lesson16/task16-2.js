// ====================================================================================================================== //
// Задача 2. Створити клас TMoney для роботи з грошовими сумами.
// Сума повинна зберігатися у вигляді доларового еквіваленту.
// Реалізувати методи додавання / вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара,
// при якому сума у гривнях збільшиться на 100.
// Курс долара зберігати в окремому полі.
// ====================================================================================================================== //
class TMoney {
    #userCountInUSD = 0

    constructor(initUserCountInUSD, initCourseOfDollars) {
        this.#userCountInUSD = initUserCountInUSD
        this.courseOfDollars = initCourseOfDollars
    }

    get UserCountInUSD() {
        return this.#userCountInUSD * this.courseOfDollars
    }

    set UserCountInUSD(value) {
        return this.#userCountInUSD += value / this.courseOfDollars
    }

    toString() {
        return `${this.UserCountInUSD}`
    }
}
// ====================================================================================================================== //
let initTMoney = new TMoney(10, 40)
initTMoney.UserCountInUSD = 200
initTMoney.UserCountInUSD = 200

console.log(initTMoney.toString());
console.log(initTMoney.UserCountInUSD);

// ====================================================================================================================== //

