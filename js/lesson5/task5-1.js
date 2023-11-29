// Enter the required data
let quantityOfNumber = parseInt(prompt(`Enter quantity of numbers, please`, `5`))
let num = 0
let randomNumber
// Determining the result

let result = `<ul class="li-list-style">`
while (num < quantityOfNumber) {
    randomNumber = Math.floor(Math.random() * 100) + 1
    result = result + `<li>${randomNumber}</li>`
    num++
}
result = result + `</ul>`

document.write(`
<div class="js-output">
${result}
</div>`)