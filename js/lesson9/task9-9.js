// Enter the required data
let userArray = [`Іван`, 'Петро', 'Михайло', 'Іван', 'Максим']
let newArrayWithFirstLetter = []


//Determining the result
userArray.forEach(element => {
    newArrayWithFirstLetter.push(element[0])
});
// or
let newArrayWithFirstLetterWithMap = userArray.map(name => name[0])


// Result output
document.write(`<div div class= "js-output">Result:</div>`)

document.write(`<div div class= "js-output">Before forEach: ${userArray}</div>`)
document.write(`<div div class= "js-output">After forEach: ${newArrayWithFirstLetter}</div>`)
document.write(`<div div class= "js-output">With Map: ${newArrayWithFirstLetterWithMap}</div>`)
