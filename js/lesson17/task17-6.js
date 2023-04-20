// ====================================================================================================================== //
// Дано два класи:

// MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати)
// AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати).
// Hystory: Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів

// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// ====================================================================================================================== //


class MultChecker {
    static firstNum = 2
    static secondNum = 9
    constructor() {
        this.firstNum = MultChecker.firstNum;
        this.secondNum = MultChecker.secondNum;
    }

    RandomNumber() {
        return this.firstNum + Math.floor(Math.random() * (this.secondNum - this.firstNum + 1))
    }

    Check() {
        const testNum1 = this.RandomNumber();
        const testNum2 = this.RandomNumber();
        const resultTest = testNum1 * testNum2;
        const askUser = parseFloat(prompt(`Сколько будет ${testNum1} * ${testNum2}?`));

        Hystory.testsList[0].userAnswer++

        if (askUser === resultTest)
            Hystory.testsList[0].correctAnswer++
    }

    initChecker(quantityOfTests) {
        for (let i = 0; i < quantityOfTests; i++) {
            this.Check();
        }
    }
}

class AddChecker {

    constructor(firstNum, secondNum) {
        this.firstNum = firstNum
        this.secondNum = secondNum
    }

    RandomNumber() {
        return this.firstNum + Math.floor(Math.random() * (this.secondNum - this.firstNum + 1))
    }

    Check() {
        const testNum1 = this.RandomNumber();
        const testNum2 = this.RandomNumber();
        const resultTest = testNum1 + testNum2;
        const askUser = parseFloat(prompt(`Сколько будет ${testNum1} + ${testNum2}?`));

        Hystory.testsList[1].userAnswer++

        if (askUser === resultTest)
            Hystory.testsList[1].correctAnswer++
    }

    initChecker(quantityOfTests) {
        for (let i = 0; i < quantityOfTests; i++) {
            this.Check();
        }
    }
}

let testMultChecker = new MultChecker();
let testAddChecker = new AddChecker(0, 100);

class Hystory {
    static testsList = [
        { firstNum: testMultChecker.firstNum, secondNum: testMultChecker.secondNum, operation: `*`, userAnswer: 0, correctAnswer: 0 },
        { firstNum: testAddChecker.firstNum, secondNum: testAddChecker.secondNum, operation: `+`, userAnswer: 0, correctAnswer: 0 }
    ];
}
testMultChecker.initChecker(3);
testAddChecker.initChecker(2);



console.log(Hystory.testsList);


// ====================================================================================================================== //
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач
// (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування.
// Результати тестування додаються в об’єкт History.
// Зробити так, щоб об'єкт такого класу можна було створити тільки один.
// Коли зроблено ці N задач вивести усю історію на екран.
// ====================================================================================================================== //