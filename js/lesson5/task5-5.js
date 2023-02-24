// Enter the required data
let table = `<table style="text-align: center"><tr>`


let j
for (j = 1; j < 3; j++)
    table = table + `<td style="border: 1px solid #fff; display:inline">${j}</td>`
if (j === 3)
    table = table + `<td style="border: 1px solid #fff; display:inline">${j}</td></tr>`
for (j = 4; j < 6; j++)
    table = table + `<td style="border: 1px solid #fff; display:inline">${j}</td>`
if (j === 6)
    table = table + `<td style="border: 1px solid #fff; display:inline">${j}</td></tr>`
for (j = 7; j < 9; j++)
    table = table + `<td style="border: 1px solid #fff; display:inline">${j}</td>`
if (j === 9)
    table = table + `<td style="border: 1px solid #fff; display:inline">${j}</td></tr>`


table = table + `</table>`

document.write(table)
// Determining the result



