// Enter the required data
let enterNumber = parseInt(prompt(`Enter your number, please`, `4`))
let result


// Determining the result
for (let i = 0; i < 3; i++) {
    let randomNumberPc = Math.floor(Math.random() * 10) + 1;
    if (randomNumberPc !== enterNumber)
        window.confirm(result = `PC genereated ${randomNumberPc} ! You entered number is ${enterNumber}`)
    else if (randomNumberPc === enterNumber) {
        window.confirm(result = `PC WIN! You entered number is ${enterNumber}`)
        break
    }
}