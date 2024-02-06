// Задача 11. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. 
// Також зберігати і відображати кількість змін протягом одного сеансу.

function saveColorInStorage() {
    let startColor = localStorage.getItem("background-color")
    let endColor = document.getElementById("background-color").value

    if (startColor != endColor) {
        localStorage.setItem('background-color', endColor)
        saveCounter()
    }

}

function saveCounter() {
    let counter = Number(sessionStorage.getItem('counter'));

    if (counter) {
        counter++
        console.log(Number(sessionStorage.getItem('counter')));
        sessionStorage.setItem('counter', counter)
    } else {
        counter = 1
        sessionStorage.setItem('counter', counter)
    }
}

window.onload = function () {

    if (localStorage.getItem('background-color')) {
        let resultBlock = document.getElementById("result")
        resultBlock.style.backgroundColor = localStorage.getItem('background-color')
        console.log(resultBlock);
    }

    let spanCounter = document.getElementById("counter")
    let counter = Number(sessionStorage.getItem('counter'));

    if (counter != 0) {
        spanCounter.innerHTML = counter
    }


    let btn = document.getElementById('btn').onclick = saveColorInStorage

}
