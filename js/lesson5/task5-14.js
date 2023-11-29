// Enter the required data
let randomCosts = Math.floor(Math.random() * 1000) + 1;
window.confirm(`You must pay ${randomCosts}$`)

let result = 0
let moneyOfUser

// Determining the result
for (let i = 0; result < randomCosts; i++) {
    moneyOfUser = parseInt(prompt(`Give me your money`, `100`))
    result = result + moneyOfUser
    if (result === randomCosts)
        window.confirm(`Thank you`)
    else if (result > randomCosts)
        window.confirm(`Your change is ${result - randomCosts}`)
    else window.confirm(`You must pay ${randomCosts - result}$`)
}
