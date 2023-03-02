const randomNumber1 = Math.floor(Math.random() * 10) + 1
const randomNumber2 = Math.floor(Math.random() * 10) + 1

let i = 0
let enteredUserNumber1 = 0
let enteredUserNumber2 = 0
let result1 = 0
let result2 = 0

for (; !(result1 && result2); i++) {
    if (result1 === 0) {
        enteredUserNumber1 = parseInt(prompt(`Enter the number from 1 to 10`))
        if (enteredUserNumber1 === randomNumber1) {
            result1 += enteredUserNumber1
            window.confirm(`You find 1 number`)
        }
        if (!enteredUserNumber1) break
    }
    if (result2 === 0) {
        enteredUserNumber2 = parseInt(prompt(`Enter the number from 1 to 10`))
        if (enteredUserNumber2 === randomNumber2) {
            result2 += enteredUserNumber2
            window.confirm(`You find 2 number`)
        }
        if (!enteredUserNumber2) break
    }

}


document.write(`
<div class="js-output">
<p>Generated Number 1 - ${randomNumber1} | Generated Number 2  - ${randomNumber2}</p>
<p>Number of attempts ${i}</p>

</div>
`)
