// ====================================================================================================================== //
// Задача 6. 
// Користувач задає кількість оцінок і натискає на кнопку «get table». 
// В результаті формується таблиця з input, куди користувач вводить оцінки. 
// Після цього натискає на кнопку “get sum” і знаходить середнє значення.
// ====================================================================================================================== //
function getTable() {
    let quantityEstimates = document.getElementById(`quantityEstimates`).value

    let table = `<h2 style="padding: 10px 0">Table with ${quantityEstimates} estimates</h2>`

    for (let t = 1; t <= 1; t++) {
        table += `<table style="width:100%;">`

        for (let tr = 0; tr < quantityEstimates; tr++) {
            table += `<tr>`

            for (let td = 0; td < 1; td++) {
                table += `<td style="border: 1px solid #fff;"><label for="usersEstimates">Enter the ${tr + 1} estimates</label></td>`
                table += `<td style="border: 1px solid #fff;"><input type="number" id="usersEstimates" placeholder="0"></td>`
            }
            table += `</tr>`
        }

        table += `</table>`

        table += `<div class="task_18-2 buttons"><button id="getSum" onclick="getSum()">get sum</button></div>`
    }

    document.querySelector(`.innerTable`).innerHTML = table
}
// ====================================================================================================================== //

function getSum() {
    let quantityEstimates = document.getElementById(`quantityEstimates`).value
    console.log(quantityEstimates);

    let quantity = document.getElementsByTagName(`input`)
    let sum = 0

    for (let i = 0; i < quantityEstimates; i++) {
        sum += parseInt(quantity[i].value)
    }
    let average = sum / quantityEstimates
    let result = `Average value: ${average.toFixed(0)}`

    document.querySelector(`.result`).innerHTML = result
}
// ====================================================================================================================== //

