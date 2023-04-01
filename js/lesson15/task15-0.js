// ====================================================================================================================== //

// Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел.
// При цьому у одному з них є функція знаходження суми,
// а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

// ====================================================================================================================== //

function getRandomNumber(minV, maxV) {
    return minV + Math.floor(Math.random() * (maxV - minV + 1))
}
function getSizeOfArray(size, minV, maxV) {
    let sizeOfArray = []
    for (let i = 0; i < size; i++) {
        const randomNum = getRandomNumber(minV, maxV)
        sizeOfArray.push(randomNum)
    }
    return sizeOfArray
}

let obj1 = {
    arrayOfValue: getSizeOfArray(10, 0, 100),

    getSum: function () {
        return this.arrayOfValue.reduce((preSum, element) => preSum + element, 0)
    }
}

let obj2 = {
    arrayOfValue: getSizeOfArray(10, 0, 100),

    getMultiplicationInRange: function (minValue, maxValue) {
        let result = this.arrayOfValue.find((element) =>
            element > minValue &&
            element < maxValue &&
            element !== 0)
        let resultIndex = (this.arrayOfValue.findIndex((element) =>
            element > minValue &&
            element < maxValue &&
            element !== 0)) + 1

        for (let i = resultIndex; i < this.arrayOfValue.length; i++) {
            if (this.arrayOfValue[i] !== 0 && this.arrayOfValue[i] > minValue && this.arrayOfValue[i] < maxValue) {
                result = this.arrayOfValue[i] * result
            }
        }
        return result
    }
}

console.log(obj1.arrayOfValue);
let sumOfObj1 = obj1.getSum()
console.log(`Sum of 1 object: ${sumOfObj1}`);

console.log(obj2.arrayOfValue);
let sumOfObj2 = obj1.getSum.call(obj2)
console.log(`Sum of 2 object: ${sumOfObj2}`);


let multiplyOfObj1 = obj2.getMultiplicationInRange.apply(obj1, [10, 50])
console.log(`Multiplication in range obj1: ${multiplyOfObj1}`);


let multiplyOfObj2 = obj2.getMultiplicationInRange(10, 50)
console.log(`Multiplication in range obj2: ${multiplyOfObj2}`);















// function FirstObject(minV, maxV, size) {
//     // =========> properties:
//     this.minV = minV
//     this.maxV = maxV
//     this.array = this.getSizeOfArray(size)
// }

// // =========> methods:
// FirstObject.prototype.getRandomNumber = function (minV, maxV) {
//     return minV + Math.floor(Math.random() * (maxV - minV + 1))
// }

// FirstObject.prototype.getSizeOfArray = function (size) {
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
//         this.array = this.getSizeOfArray(size)
//     }
//     // =========> methods:
//     getRandomNumber(minV, maxV) {
//         return minV + Math.floor(Math.random() * (maxV - minV + 1))
//     }
//     getSizeOfArray(size) {
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
