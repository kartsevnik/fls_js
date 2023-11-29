// Enter the required data
let enterTheMonth = parseInt(prompt(`Enter the number of month, please`, `3`))

// Creating Functions
function detectingMonth(numOfMonth) {
    let res
    switch (numOfMonth) {
        case 1:
        case 2:
        case 12: res = `winter`
            break;
        case 3:
        case 4:
        case 5: res = `spring`
            break;
        case 6:
        case 7:
        case 8: res = `summer`
            break;
        case 9:
        case 10:
        case 11: res = `autumn`
            break;
        default: res = `Error`
            break;
    }
    return res
}

// Determining the result
let result = detectingMonth(enterTheMonth)


// Result output
document.write(`<div class="js-output">This month is ${result}</div>`)