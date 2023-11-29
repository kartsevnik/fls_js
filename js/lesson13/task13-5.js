// =========================================================== //
// Задача 5. Тренажер додавання.
// Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
// =========================================================== //

function getRandomNum(minV, maxV) {
    return minV + Math.floor(Math.random() * (maxV - minV) + 1)
}

// =========================================================== //

function getRandomExercise(minV, maxV) {

    const firstValue = getRandomNum(minV, maxV)
    const secondValue = getRandomNum(minV, maxV)
    const result = firstValue + secondValue
    const userResult = parseInt(prompt(`What will be the result: ${firstValue} + ${secondValue} `))

    return userResult === result ? true : false
}

// =========================================================== //
function myFunc(num) {
    setTimeout(() => {
        if (num < 5) {
            alert(`Enter your result of sum`)
            let resultOfExercise = getRandomExercise(0, 100)
            if (resultOfExercise === true) {
                alert(`Yes, you are right`)
            }
            else alert(`No, you loose`)

            myFunc(num + 1)
        }
    }, 10000)
}

myFunc(1)