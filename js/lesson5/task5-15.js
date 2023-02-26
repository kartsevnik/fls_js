// Enter the required data
let sum = 0
let num = 0
let enterTempOfMonth
// Determining the result

for (let i = 1; i <= 12; i++) {
    enterTempOfMonth = parseInt(prompt(`Enter the temperature of ${i} month`, `10`))
    sum += enterTempOfMonth
    num += 1
}
result = Math.round(sum / num)

document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p>${result} C.</p> 
</div>`)

console.log(result)