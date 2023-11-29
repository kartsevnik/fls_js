let sum = 0

while (true) {
    let enterTheNumber = parseFloat
        (prompt(`Enter the number please`, `115`))
    if (!enterTheNumber) break
    sum += enterTheNumber
}
document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p>Sum: ${sum}</p>
</div>`)
