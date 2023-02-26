// Enter the required data
const enterNumberMin = parseInt(prompt(`Enter your min number, please`, `4`))
const enterNumberMax = parseInt(prompt(`Enter your max number, please`, `40`))

let i = 0
let sum
let odd
let result = 0

// Determining the result

do {
    sum = enterNumberMin + i
    odd = sum % 2
    if ((odd === 1) && sum < enterNumberMax)
        result = result + sum
    i = i + 1
} while ((i <= (5 * 2) && sum < enterNumberMax)) {
    document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p> ${result}</p> 
</div>`)
}
