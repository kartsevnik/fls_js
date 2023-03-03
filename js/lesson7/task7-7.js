// Enter the required data
let image1 = `<div class="task-5-12"><img src="../../img/task5-12/cherry.png" alt=""></div>`
let image2 = `<div class="task-5-12"><img src="../../img/task5-12/html-5.png" alt=""></div>`
let image3 = `<div class="task-5-12"><img src="../../img/task5-12/css-3.png" alt=""></div>`
let image4 = `<div class="task-5-12"><img src="../../img/task5-12/js.png" alt=""></div>`

// Creating Functions
function generatedImage(img1, img2, img3, img4) {
    let res
    let randomNumber = Math.floor(Math.random() * 4) + 1
    switch (randomNumber) {
        case 1: res = img1
            break;
        case 2: res = img2
            break;
        case 3: res = img3
            break;
        case 4: res = img4
            break;
        default: res = `Error`
            break;
    }
    return res
}

// Determining the result
let result = generatedImage(image1, image2, image3, image4)

// Result output
document.write(`
<div class="js-output">
${result}
</div>`)