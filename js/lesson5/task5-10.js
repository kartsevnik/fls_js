// Enter the required data
const enterNumberMin = parseInt(prompt(`Enter your min number, please`, `4`))
const enterNumberMax = parseInt(prompt(`Enter your max number, please`, `40`))

let result = 0
let i = 0
let sum
let even

// Determining the result

do {
    sum = enterNumberMin + i
    even = sum % 2
    if ((even === 1) && sum < enterNumberMax)
        result = result + sum
    i = i + 1
} while (sum < enterNumberMax) {
    document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p> ${result}</p> 
</div>`)
}
