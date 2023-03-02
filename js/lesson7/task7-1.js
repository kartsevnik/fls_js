// Enter the required data
let enterTheMonth = parseInt(prompt(`Enter the number of month, please`, `3`))

// Determining the result

function detectingMonth(numOfMonth) {
    let result
    switch (numOfMonth) {
        case 1: result = `january`
            break;
        case 2: result = `february`
            break;
        case 3: result = `March`
            break;
        case 4: result = `April`
            break;
        case 5: result = `May`
            break;
        case 6: result = `June`
            break;
        case 7: result = `July`
            break;
        case 8: result = `August`
            break;
        case 9: result = `September`
            break;
        case 10: result = `October`
            break;
        case 11: result = `November`
            break;
        case 12: result = `December`
            break;
        default: result = `Error`
            break;
    }
    return result
}

let result = detectingMonth(enterTheMonth)


// Result output
document.write(`<div class="js-output">This month is ${result}</div>`)