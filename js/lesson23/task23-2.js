// Задача 2 . Дано дата виробництва продукта (вводимо рік, місяць, день) та кількість днів придатності.
// Визначити чи є він придатним на даний момент.

function calculateExpiration(event) {
    event.preventDefault();
    const productionDate = new Date(Date.parse(document.getElementById("date").value));
    const expirationDate = document.getElementById("expiration").value

    let currentDate = new Date()
    productionDate.setDate(expirationDate)
    const targetElement = document.getElementById("result")

    if (currentDate < productionDate) {
        targetElement.innerHTML = `Your product can still be consumed`
    } else targetElement.innerHTML = `Your product overdue`

}

