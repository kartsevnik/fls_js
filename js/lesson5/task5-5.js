// Determining the result
let table = `<table style="text-align: center"><tr>`
for (let i = 1; i <= 9; i++) {
    table = table + `<td style="border: 1px solid #fff; display:inline">${i}</td>`

    let porting = i % 3
    if (porting === 0) {
        table = table + `</tr>`
    }
}
table = table + `</table>`

document.write(table)




