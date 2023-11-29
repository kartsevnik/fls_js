// Enter the required data
let userArray = [`AA111BB`, `BB123CV`, `BE222TT`, `AA000XX`, `AA765BB`, `AD890DF`, `DS111CV`, `SD111BB`, `AS111BB`,]

//Determining the result
// userArray.forEach((element, index, baseArr) => {
//     if (element[0] === `A`)
//         newArrayWithA.push(baseArr[index])
// });


let newArrayWithA = userArray.filter(element => element[0] === `A`).join(', ')

console.log(userArray);
console.log(newArrayWithA);


// Result output
let sale = 30
document.write(`<div div class= "js-output">Result:</div>`)

document.write(`<div div class= "js-output">Before forEach: ${userArray}</div>`)
document.write(`<div div class= "js-output">After forEach: ${newArrayWithA}</div>`)