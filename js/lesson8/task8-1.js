// Enter the required data
const enterSubjects = parseInt(prompt(`Enter quantity subjects`, `5`))
let totalEvaluation = []

function enterRandomEvaluation() {
    let Min = 2
    let Max = 5
    return Min + Math.floor(Math.random() * (Max - Min + 1))
}

for (let i = 1; i <= enterSubjects; i++) {
    totalEvaluation.push(enterRandomEvaluation())
    document.write(`<div div class= "js-output"> Your ${i} value = ${totalEvaluation[i - 1]} </div>`)
}
console.log(totalEvaluation);

// Creating Functions
function getAverageValue(evaluation) {
    let averageValue = 0
    let quantityValue = 0

    for (let i = 0; i < evaluation.length; i++) {
        averageValue += evaluation[i]
        quantityValue += 1
    }

    averageValue = Math.round(averageValue / quantityValue)
    return averageValue
}

function getStatusOfSchoolchild(evaluation) {
    let res = Math.min(...evaluation)
    switch (res) {
        case 2: res = `poor student`
            break;
        case 3: res = `mediocre pupil`
            break;
        case 4: res = `good student`
            break;
        case 5: res = `excellent student`
            break;
        default: res = `Error`
            break;
    }
    return res
}



//Determining the result
let averageValue = getAverageValue(totalEvaluation)
let statusOfSchoolchild = getStatusOfSchoolchild(totalEvaluation)
console.log(statusOfSchoolchild);
// Result output
document.write(`<div div class= "js-output"> Your average value: ${averageValue}</div>`)
document.write(`<div div class= "js-output"> You are ${statusOfSchoolchild}</div>`)