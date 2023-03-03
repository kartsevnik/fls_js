// Enter the required data
let enterTheDay = parseInt(prompt(`Enter the number of month, please`, `3`))

// Creating Functions
function detectingDay(numOfDay) {
    let res
    switch (numOfDay) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: res = `Workday. What are you looking at? Go to work.`
            break;
        case 6:
        case 7: res = `Weekend but soon it will be Monday. Don't relax too much.`
            break;
        default: res = `Error`
            break;
    }
    return res
}
// Determining the result
let result = detectingDay(enterTheDay)


// Result output
document.write(`<div class="js-output">${result}</div>`)