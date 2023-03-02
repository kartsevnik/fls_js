let symbol = ``

while (true) {
    let enterTheSymbol = prompt(`Enter the your letter please, for exit enter the a`, `b`)
    if (enterTheSymbol == `a`) break
    symbol = enterTheSymbol + symbol
}
document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p>Sum: ${symbol}</p>
</div>`)
