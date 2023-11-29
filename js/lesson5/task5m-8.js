let numberN = parseInt(prompt(`Enter the min N, please`, `50`))
let numberM = parseInt(prompt(`Enter the max M, please`, `100`))
document.write(`
<div class="js-output">
N = ${numberN} | M = ${numberM}</div>
`)

for (let i = 1; numberN <= numberM; i++) {
    numberN++
    numberM--
    document.write(`
<div class="js-output">
N+${i} = ${numberN} | M-${i} = ${numberM}</div>
`)
}

