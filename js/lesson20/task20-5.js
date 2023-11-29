// ====================================================================================================================== //
// Задача.
// Однорядковий сапер.
// Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни(використати атрибути).
// Спочатку клітинки сірі.
// При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим.
// Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
// ====================================================================================================================== //
function tdClick() {
    td = this
    tdMine = this.getAttribute(`mine`)
    if (tdMine == `1`) {
        td.style.backgroundColor = `red`
    }
    else {
        td.style.backgroundColor = `green`

        while (td.nextElementSibling) {
            td = td.nextElementSibling
            if (td.getAttribute(`mine`) == `1`) break
            td.style.backgroundColor = `green`
        }

        while (td.previousElementSibling) {
            td = td.previousElementSibling
            if (td.getAttribute(`mine`) == `1`) break
            td.style.backgroundColor = `green`
        }
    }


}
const tdList = document.querySelectorAll(`td`)

for (const td of tdList) {
    td.onclick = tdClick;
}

// ====================================================================================================================== //

// ====================================================================================================================== //