// ====================================================================================================================== //
// Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)
// ====================================================================================================================== //
// Enter the required data
// let enterColumns = parseInt(prompt(`Enter the number of columns`, `3`))
// let enterRows = parseInt(prompt(`Enter the number of rows`, `4`))

function randomNum(Min, Max) {
    return Min + Math.floor(Math.random() * (Max - Min + 1))
}

// Creating Functions

function generate() {
    let columns = document.getElementById(`usersColumns`).value
    let rows = document.getElementById(`usersRows`).value

    let table = `<h2 style="padding: 10px 0">Table ${columns}*${rows} with random numbers</h2>`

    for (let t = 1; t <= 1; t++) {
        table += `<table class="table" style="text-align: center; padding-bottom: 10px">`

        for (let tr = 0; tr < rows; tr++) {

            table += `<tr>`

            for (let td = 1; td <= columns; td++) {
                table += `<td style="border: 1px solid #fff;">${randomNum(0, 100)}</td>`
            }
            table += `</tr>`
        }

        table += `</table>`
    }

    document.querySelector(`.innerTable`).innerHTML = table
}

// ====================================================================================================================== //


// ====================================================================================================================== //

