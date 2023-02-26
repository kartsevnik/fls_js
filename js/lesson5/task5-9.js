// Enter the required data
let enterNumber = parseInt(prompt(`Enter your number, please`, `4`))

// Determining the result

let randomNumberPc
do {
    randomNumberPc = Math.floor(Math.random() * 10) + 1;
    window.confirm(result = `This is ${randomNumberPc}?`)
}
while (randomNumberPc != enterNumber); {
    window.confirm(result = `Yes, pc WIN! You entered number is ${enterNumber}`)
} 
