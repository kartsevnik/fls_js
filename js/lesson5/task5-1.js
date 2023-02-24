// Enter the required data
let quantityOfNumber = parseInt(prompt(`Enter quantity of numbers, please`, `5`))
let num = 0
let randomNumber
// Determining the result

while (num < quantityOfNumber) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.write(`
    <div class="js-output">
    <li> Random Number is = ${randomNumber}</li> 
    </div>`)
    num = num + 1;
}