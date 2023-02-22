// Enter the required data


// Determining the result

for (let i = 0; i < 5; i++) {
    let num1 = parseInt(prompt(`num 1 =`))
    let num2 = parseInt(prompt(`num 2 =`))
    if (num1 === num2) {
        document.write(`
        <div class="js-output">
        <h2>Result data:</h2>
        <p>Sum=${num1 + num2}</p>
        </div>`)
    } else {
        document.write(`
        <div class="js-output">
        <h2>Result data:</h2>
        <p>Multiply=${num1 * num2}</p>
        </div>`)
    }
}