// ====================================================================================================================== //
// Створити клас, що дозволяє виконувати такі операції над масивами: 
// знаходження кількості додатних, 
// кількості від’ємних, 
// кількість входжень деякого числа(статичні методи)
// ====================================================================================================================== //

class findTypeOfNumber {
    static counter = 0

    // static quantityOfAdditional = 0
    // static quantityOfNegative = 0
    // static quantityOfEntries = 0

    constructor(nameOfArray) {
        this.nameOfArray = [...nameOfArray]
    }


    static getAdditional(nameOfArray) {
        let counter = 0
        for (const element of nameOfArray) {
            if (element > 0) {
                counter++
            }
        }
        return counter

        // for (const element of nameOfArray) {
        //     if (element > 0) {
        //         findTypeOfNumber.quantityOfAdditional += 1
        //     }
        // }

        // return findTypeOfNumber.counter++
    }


    static getNegative(nameOfArray) {
        let counter = 0
        for (const element of nameOfArray) {
            if (element < 0) {
                counter++
            }
        }
        return counter

        // for (const element of nameOfArray) {
        //     if (element < 0) {
        //         findTypeOfNumber.quantityOfNegative += 1
        //     }
        // }
        // return findTypeOfNumber.counter++
    }

    static getEntries(nameOfArray, numOfEntries) {
        let counter = 0
        for (const element of nameOfArray) {
            if (element === numOfEntries) {
                counter++
            }
        }
        return counter


        // for (const element of nameOfArray) {
        //     if (element === numOfEntries) {
        //         findTypeOfNumber.quantityOfEntries++
        //     }
        // }
        // return findTypeOfNumber.counter++
    }
}
// ====================================================================================================================== //
const testArray = [25, 30, -5, -4, 456, 369, -54, 25, 1, -8]

let result1 = new findTypeOfNumber(testArray)
console.log(result1.nameOfArray);

// let r1 = findTypeOfNumber.getAdditional(testArray)
// let r2 = findTypeOfNumber.getNegative(testArray)
// let r3 = findTypeOfNumber.getEntries(testArray, 25)


console.log(`Positive numbers: ${findTypeOfNumber.getAdditional(testArray)}`);
console.log(`Negative numbers: ${findTypeOfNumber.getNegative(testArray)}`);
console.log(`Quantity of entries of a 25 number: ${findTypeOfNumber.getEntries(testArray, 25)}`);
console.log(`Counter: ${findTypeOfNumber.getAdditional(testArray) + findTypeOfNumber.getNegative(testArray) + findTypeOfNumber.getEntries(testArray, 25)}`);

// ====================================================================================================================== //

