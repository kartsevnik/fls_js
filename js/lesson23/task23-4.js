// Задача 4. Задаємо користувачу задачу з додавання двох чисел.
// Визначити скільки секунд було використано для розв’язання задачі.

function calculateResult(event) {
    event.preventDefault();
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value

    const startDate = new Date()
    const sum = num1 + num2
    const endDate = new Date()
    const compare = endDate - startDate
    console.log(compare);
    const targetElement = document.getElementById("result")
    targetElement.innerHTML = `The result was calculated for ${compare} ms`
}