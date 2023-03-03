// Enter the required data
let enterTheA = parseInt(prompt(`Enter the 1 number, please`, `50`))
let enterTheB = parseInt(prompt(`Enter the 2 number, please`, `50`))
let enterTheC = parseInt(prompt(`Enter the 3 number, please`, `101`))



// Creating Functions
function getValues(a, b, c) {

    let pairNumber
    if ((a === b) && (b === c))
        pairNumber = `<p>Pair Number = 3</p>`
    else if (a === b || a === c || b === c)
        pairNumber = `<p>Pair Number = 2</p>`
    else pairNumber = `<p>Pair Number = 0</p>`

    let positiveNumber
    if ((a > 0) && (b > 0) && (c > 0))
        positiveNumber = `<p>Positive Number = 3</p> `
    else if (((a && b) > 0) || ((a && c) > 0) || ((c && b) > 0))
        positiveNumber = `<p>Positive Number = 2</p> `
    else if (a > 0 || b > 0 || c > 0)
        positiveNumber = `<p>Positive Number = 1</p> `
    else positiveNumber = `<p>Positive Number = 0</p> `

    let over100Number
    if ((a > 100) && (b > 100) && (c > 100))
        over100Number = `<p>Over 100 Number = 3</p> `
    else if (((a > 100) && (b > 100)) || ((a > 100) && (c > 100)) || ((b > 100) && (c > 100)))
        over100Number = `<p>Over 100 Number = 2</p> `
    else if (a > 100 || b > 100 || c > 100)
        over100Number = `<p>Over 100 Number = 1</p> `
    else over100Number = `<p>Over 100 Number = 0</p> `

    let result = pairNumber + positiveNumber + over100Number
    return result
}


// Determining the result
let result = getValues(enterTheA, enterTheB, enterTheC)


// Result output
document.write(`<div class="js-output">
<p>Quantity of:</p> 
 ${result} 

</div>`)