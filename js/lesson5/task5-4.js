// Enter the required data
let table = `<table style="text-align: center"><tr>`

for (let i = 0; i < 3; i++) {
    let j
    for (j = 1; j < 7; j++)
        table = table + `<td style="border: 1px solid #fff; display:inline">${j}</td>`
    if (j === 7)
        table = table + `<td style="border: 1px solid #fff; display:inline">${j}</td></tr>`
}

table = table + `</table>`

document.write(table)
// Determining the result



