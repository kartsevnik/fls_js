// ====================================================================================================================== //
// Задача 1. Створити об’єкт «Тир».
// У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.

// Тир

// Поля(властивості)	Масив, у якому зберігається поле з зайцями
// Методи (дії)	        Метод пострілу (задається позиція пострілу)
//                      Виведення ігрового поля

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

// ====================================================================================================================== //


let fieldWithRabbits = {
    arrayOfValue: getSizeOfArray(10, 0, 1),

    makeShot: function () {
        let numberOfRabbits = this.arrayOfValue.reduce((preArr, el) => preArr + el, 0)
        while (numberOfRabbits !== 0) {
            let shotAgain = confirm('Are you wont shot?')
            if (shotAgain == false) {
                break
            }
            let shot = parseInt(prompt(`Enter the number of square from 0 to ${this.arrayOfValue.length}`))
            if (this.arrayOfValue[shot] === 1) {
                this.arrayOfValue[shot] = 0
                numberOfRabbits = numberOfRabbits - 1

            }
            alert(`There are ${numberOfRabbits} hares left`)
        }
    },

    toString: function () {
        return document.write(`<div class= "js-output" > Field: ${this.arrayOfValue}</ div> `)
    }
}


let initGame = fieldWithRabbits.makeShot()
let exportField = fieldWithRabbits.toString()
console.log(fieldWithRabbits.arrayOfValue);


// ====================================================================================================================== //
