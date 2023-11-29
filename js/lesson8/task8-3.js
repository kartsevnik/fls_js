// Enter the required data
let students = [`Іван`, 'Петро', 'Михайло', 'Іван', 'Максим']

// Creating Functions
function getNameIvan(name) {
    let res = 0
    for (let i = 0; i < name.length; i++) {
        if (name[i] === `Іван`) {
            res += 1
        }
    }
    return res
}

function addSpace(name) {
    for (let i = 0; i < name.length; i++) {
        name[i] = ` ` + name[i]
    }
    return
}

//Determining the result

let result = getNameIvan(students)
let result2 = addSpace(students)


// Result output
document.write(`<div div class= "js-output">All students: ${students}</div>`)
document.write(`<div div class= "js-output">Students who have the name Ivan in total: ${result}</div>`)
