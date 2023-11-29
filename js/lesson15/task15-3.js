// ====================================================================================================================== //
// Задача 3. Розробити клас MultChecker для перевірки таблиці множення

// Поля	    Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
//          Кількість правильних відповідей
//          Кількість неправильних відповідей

// Методи	Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
//          Перевірка правильності вказаної відповіді
//          render - виведення інформації про тестування на екран



// ====================================================================================================================== //
class MultChecker {
    constructor(checkNumber) {
        this.checkNumber = checkNumber
        this.correctNum = 0
        this.incorrectNum = 0
    }

    // =========> method:
    randomNum(minV, maxV) {
        return minV + Math.floor(Math.random() * maxV - minV + 1)
    }
    // =========> method:
    genExample() {
        const randomNumber = this.randomNum(1, 9)
        const example = this.checkNumber * randomNumber
        const askUser = parseInt(prompt(`${this.checkNumber} * ${randomNumber} = `))
        if (askUser === example) {
            return true
        } else return false
    }
    // =========> method:
    checkingAnswer(resultOfExample) {
        if (resultOfExample) {
            this.correctNum += 1
        } else this.incorrectNum += 1
    }
    // =========> method:
    toString() {
        console.log(`Ви відповіли ${this.correctNum} разів правильно та ${this.incorrectNum} разів неправильно`);
        document.write(`<div class= "js-output" >Ви відповіли ${this.correctNum} разів правильно та ${this.incorrectNum} разів неправильно</div>`)
    }
}

// ====================================================================================================================== //

const enterCheckNumber = parseInt(prompt(`Яке число будемо перемножувати?`))
const initChecker = new MultChecker(enterCheckNumber)

let confirmExercise
do {
    initChecker.checkingAnswer(initChecker.genExample())
    confirmExercise = confirm(`Ще приклад?`)
} while (confirmExercise);

const exportResult = initChecker.toString()

// ====================================================================================================================== //
