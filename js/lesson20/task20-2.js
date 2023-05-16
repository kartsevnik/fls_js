// ====================================================================================================================== //
// Задача.
// Динамічний пошук.
// Є список працівників і поле пошуку.
// При введенні відображаються усі, які містять вказаний фрагмент
// ====================================================================================================================== //
const nameList = [`Leonardo da Vinci`, `Michelangelo`, `Giotto di Bondone`, `Masaccio`, `Giorgione`, `Rafaelo Santi`, `Tiziano Vecellio`, `Tintoretto`, `Michelangelo Merisi da Caravaggio`]

function exportName(arrayWithNames) {
    let mainContainer = document.querySelector(`.resault__block`)
    mainContainer.innerText = ``
    for (const name of arrayWithNames) {
        const nameContainer = document.createElement('p')
        nameContainer.innerText = name
        mainContainer.append(nameContainer)
    }
}

function filterName() {
    const searchValue = document.getElementById(`search`).value
    let filteredArray = filterItems(searchValue)
    exportName(filteredArray)
}

function filterItems(query) {
    return nameList.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

window.onload = function () {
    exportName(nameList)
    document.getElementById(`search`).oninput = filterName
}

// ====================================================================================================================== //

// ====================================================================================================================== //
