// ====================================================================================================================== //
// Створити клас, що дозволяє виконувати такі операції над масивами: 
// знаходження кількості додатних, 
// кількості від’ємних, 
// кількість входжень деякого числа(статичні методи)
// ====================================================================================================================== //

class Task17_1 {
    static counter = 0

    static quantityOfAdditional = 0
    static quantityOfNegative = 0
    static quantityOfEntries = 0

    constructor(nameOfArray) {
        this.nameOfArray = [...nameOfArray]
    }


    static getAdditional(nameOfArray) {
        for (const element of nameOfArray) {
            if (element > 0) {
                Task17_1.quantityOfAdditional += 1
            }
        }

        return Task17_1.counter++
    }


    static getNegative(nameOfArray) {
        for (const element of nameOfArray) {
            if (element < 0) {
                Task17_1.quantityOfNegative += 1
            }
        }
        return Task17_1.counter++
    }

    static getEntries(nameOfArray, numOfEntries) {
        for (const element of nameOfArray) {
            if (element === numOfEntries) {
                Task17_1.quantityOfEntries++
            }
        }
        return Task17_1.counter++
    }
}
// ====================================================================================================================== //
const testArray = [25, 30, -5, -4, 456, 369, -54, 25, 1, -8]

let result1 = new Task17_1(testArray)
console.log(result1.nameOfArray);

let r1 = Task17_1.getAdditional(testArray)
let r2 = Task17_1.getNegative(testArray)
let r3 = Task17_1.getEntries(testArray, 25)


console.log(`Positive numbers: ${Task17_1.quantityOfAdditional}`);
console.log(`Negative numbers: ${Task17_1.quantityOfNegative}`);
console.log(`Quantity of entries of a 25 number: ${Task17_1.quantityOfEntries}`);
console.log(`Counter: ${Task17_1.counter}`);

// ====================================================================================================================== //

