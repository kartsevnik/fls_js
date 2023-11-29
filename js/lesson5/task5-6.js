// Enter the required data
let enterTable = parseInt(prompt(`Enter the number of tables`, `3`))
let enterColumns = parseInt(prompt(`Enter the number of columns`, `3`))
let enterRows = parseInt(prompt(`Enter the number of rows`, `3`))


// Determining the result

let table = ''
let allNum = 1

for (let t = 1; t <= enterTable; t++) {
    table += `<table class="table" style="text-align: center; padding: 5px">`

    for (let tr = 0; tr < enterColumns; tr++) {
        table += `<tr>`

        for (let td = 1; td <= enterRows; td++) {
            table += `<td style="border: 1px solid #fff;">${allNum}</td>`
            allNum += 1
        }
        table += `</tr>`
    }

    table += `</table>`
}

// Result output
document.write(`
<div class="js-output">
${table}
</div>`)