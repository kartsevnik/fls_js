// ====================================================================================================================== //
// Задача 6. 
// Користувач задає кількість оцінок і натискає на кнопку «get table». 
// В результаті формується таблиця з input, куди користувач вводить оцінки. 
// Після цього натискає на кнопку “get sum” і знаходить середнє значення.
// ====================================================================================================================== //
function getTable() {
    let quantityEstimates = document.getElementById(`quantityEstimates`).value

    let table = `<h2 style="padding: 10px 0">Table with ${quantityEstimates} estimates</h2>`


    table += `<table style="width:100%;">`

    for (let tr = 0; tr < quantityEstimates; tr++) {
        table += `<tr>`


        table += `<td style="border: 1px solid #fff;"><label for="usersEstimates">Enter the ${tr + 1} estimates</label></td>`
        table += `<td style="border: 1px solid #fff;"><input type="number" class="usersEstimates" placeholder="0"></td>`

        table += `</tr>`
    }

    table += `</table>`

    table += `<div class="task_18-2 buttons"><button id="getSum" onclick="getAverage()">Get average</button></div>`


    document.querySelector(`.innerTable`).innerHTML = table
}
// ====================================================================================================================== //

function getAverage() {
    let quantity = document.querySelectorAll(`.usersEstimates`)
    let sum = 0

    for (let i = 0; i < quantity.length; i++) {
        sum = sum + parseInt(quantity[i].value)
    }

    let average = sum / quantity.length
    let result = `Average value: ${average.toFixed(0)}`

    document.querySelector(`.result`).innerHTML = result
}
// ====================================================================================================================== //

