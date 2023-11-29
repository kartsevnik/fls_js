// Enter the required data
let enterColumns = parseInt(prompt(`Enter the number of columns`, `5`))
let enterRows = parseInt(prompt(`Enter the number of rows`, `5`))
let enterText = prompt(`Enter the text`, `cell`)

// Creating Functions
function createTable(columns, rows, text) {
    let table = ''

    for (let t = 1; t <= 1; t++) {
        table += `<table class="table" style="text-align: center; padding-bottom: 10px">`

        for (let tr = 0; tr < columns; tr++) {
            table += `<tr>`

            for (let td = 1; td <= rows; td++) {
                table += `<td style="border: 1px solid #fff;">${text}</td>`
            }
            table += `</tr>`
        }

        table += `</table>`
    }
    return table
}

// Determining the result
let result = createTable(enterColumns, enterRows, enterText)

// Result output
document.write(`
<div class="js-output">
${result}
</div>`)