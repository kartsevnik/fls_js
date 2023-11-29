// Enter the required data
let quantityOfParagrafs = parseInt(prompt(`Enter the quantity of paragrafs please`, `4`))

for (let i = 1; i <= quantityOfParagrafs; i++) {
    document.write(`<h1>Title ${i}</h1>`)
    for (let j = 1; j <= i; j++) {
        document.write(`<p>Section ${i}, paragraf ${j}</p>`)
    }
}
