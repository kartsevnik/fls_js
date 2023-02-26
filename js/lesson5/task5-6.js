// Determining the result
let table = `<table style="text-align: center"><tr>`

for (let i = 1; i <= 27; i++) {

    table = table + `<td style="border: 1px solid #fff; display:inline">${i}</td>`

    let porting = i % 3
    if (porting === 0) {
        table = table + `</tr>`
    }

    let porting2 = i % 9
    if (porting2 == 0) {
        table = table + `</table><table style="text-align: center"><tr><br>`
    }

}

document.write(table)