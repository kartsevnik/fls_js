// Enter the required data
const size_N = parseInt(prompt(`Enter the size of N`, `5`))
const size_M = parseInt(prompt(`Enter the size of M`, `5`))
const quantityOfBullet_K = parseInt(prompt(`How much are you have the bullet(K)`, `5`))

const maxValueOfSize = size_N * size_M
let randomShip = Math.floor(Math.random() * maxValueOfSize) + 1;

// Determining the result
let axis_Y
let axis_X
let resultOfShot
for (let i = 1; i <= quantityOfBullet_K; i++) {
    axis_Y = parseInt(prompt(`Enter the axis of Y`, `5`))
    axis_X = parseInt(prompt(`Enter the axis of X`, `5`))
    if (resultOfShot === randomShip)
        window.confirm(`Yes you WIN! Ship in ${randomShip} box`)
    else if (resultOfShot !== randomShip && i < quantityOfBullet_K)
        window.confirm(`No, try again! Are you have ${quantityOfBullet_K - i} shot`)
    else window.confirm(`I am sorry, you are loose. Ship was in ${randomShip} box`)
}


