// Enter the required data
let min = 1, max = 4

let image100points = `<div class="task-5-12"><img src="../../img/task5-12/cherry.png" alt=""></div>`
let image200points = `<div class="task-5-12"><img src="../../img/task5-12/html-5.png" alt=""></div>`
let image500points = `<div class="task-5-12"><img src="../../img/task5-12/css-3.png" alt=""></div>`
let image1000points = `<div class="task-5-12"><img src="../../img/task5-12/js.png" alt=""></div>`

let randomValue
let num = 0
let result = 0

// generate three random values 
while (num < 3) {
    randomValue = min + Math.floor(Math.random() * (max - min + 1))
    switch (randomValue) {
        case 1: {
            result = result + `1`
            document.write(image100points)
        }
            break;
        case 2: {
            result = result + `2`
            document.write(image200points)
        }
            break;
        case 3: {
            result = result + `3`
            document.write(image500points)
        }
            break;
        case 4: {
            result = result + `4`
            document.write(image1000points)
        }
            break;
    }
    num += 1
}

// Determining the result
switch (result) {
    case `0111`: document.write(`<div class="js-output"><h2>YOU WIN 100 points!</h2></div>`)
        break;
    case `0222`: document.write(`<div class="js-output"><h2>YOU WIN 200 points!</h2></div>`)
        break;
    case `0333`: document.write(`<div class="js-output"><h2>YOU WIN 500 points!</h2></div>`)
        break;
    case `0444`: document.write(`<div class="js-output"><h2>YOU WIN 1000 points!</h2></div>`)
        break;
    default: document.write(`<div class="js-output"><h2>Spin the drum</h2></div>`)
        break;
}








//Determining the result







// Determining the result



