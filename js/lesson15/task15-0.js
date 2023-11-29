// ====================================================================================================================== //

// Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел.
// При цьому у одному з них є функція знаходження суми,
// а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

// ====================================================================================================================== //

function getRandomNumber(minV, maxV) {
    return minV + Math.floor(Math.random() * (maxV - minV + 1))
}
function getArrayWithNumbers(size, minV, maxV) {
    let sizeOfArray = []
    for (let i = 0; i < size; i++) {
        const randomNum = getRandomNumber(minV, maxV)
        sizeOfArray.push(randomNum)
    }
    return sizeOfArray
}

let obj1 = {
    arrayOfValue: getArrayWithNumbers(10, 0, 10),

    // =========> method:
    getSum: function () {
        return this.arrayOfValue.reduce((preSum, element) => preSum + element, 0)
    }
}

let obj2 = {
    arrayOfValue: getArrayWithNumbers(10, 0, 10),

    // =========> method:
    getMultiplicationInRange: function (minValue, maxValue) {
        return this.arrayOfValue.reduce((preResult, num) =>
            num >= minValue && num <= maxValue ? preResult * num : preResult, 1)
    }
}
// ====================================================================================================================== //

console.log(`Array of 1 object: ${obj1.arrayOfValue}`);
console.log(`Array of 2 object: ${obj2.arrayOfValue}`);

console.log(`Sum of 1 object: ${obj1.getSum()}`);
console.log(`Sum of 2 object: ${obj1.getSum.call(obj2)}`);

console.log(`Multiplication in range of 1 object: ${obj2.getMultiplicationInRange.apply(obj1, [2, 5])}`);
console.log(`Multiplication in range of 2 object: ${obj2.getMultiplicationInRange(2, 5)}`);















// function FirstObject(minV, maxV, size) {
//     // =========> properties:
//     this.minV = minV
//     this.maxV = maxV
//     this.array = this.getArrayWithNumbers(size)
// }

// // =========> methods:
// FirstObject.prototype.getRandomNumber = function (minV, maxV) {
//     return minV + Math.floor(Math.random() * (maxV - minV + 1))
// }

// FirstObject.prototype.getArrayWithNumbers = function (size) {
//     let sizeOfArray = []
//     for (let i = 0; i < size; i++) {
//         const randomNum = this.getRandomNumber(this.minV, this.maxV)
//         sizeOfArray.push(randomNum)
//     }
//     return sizeOfArray
// }

// class FirstObject {
//     constructor(minV, maxV, size) {
//         // =========> properties:
//         this.minV = minV
//         this.maxV = maxV
//         this.array = this.getArrayWithNumbers(size)
//     }
//     // =========> methods:
//     getRandomNumber(minV, maxV) {
//         return minV + Math.floor(Math.random() * (maxV - minV + 1))
//     }
//     getArrayWithNumbers(size) {
//         let sizeOfArray = []
//         for (let i = 0; i < size; i++) {
//             const randomNum = this.getRandomNumber(this.minV, this.maxV)
//             sizeOfArray.push(randomNum)
//         }
//         return sizeOfArray
//     }
// }

// let r1 = new FirstObject(0, 100, 10)
// console.log(r1);
// console.log(r1.array);












// ====================================================================================================================== //


// ====================================================================================================================== //
