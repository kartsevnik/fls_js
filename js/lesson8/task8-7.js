// Enter the required data
const enterPayments = 12
let totalPayments = []

let startMonth = parseInt(prompt(`Enter start month, please`, `1`))
let endMonth = parseInt(prompt(`Enter end month, please`, `3`))

function enterRandomNumber() {
    let Min = 1
    let Max = 1000
    return Min + Math.floor(Math.random() * (Max - Min + 1))
}

for (let i = 1; i <= enterPayments; i++) {
    totalPayments.push(enterRandomNumber())
    document.write(`<div div class= "js-output"> ${[i]} month payments is = ${totalPayments[i - 1]} $ </div>`)
}

// Creating Functions
function getSumPaymentsOfPeriod(nameArray) {
    let result = 0
    let i = startMonth - 1
    for (i; i <= (endMonth - 1); i++) {
        result += nameArray[i];
    }
    return result
}
//Payments of year
function getSumPaymentsOfYear(nameArray) {
    let result = 0
    for (let i = 0; i < nameArray.length; i++) {
        result += nameArray[i];
    }
    return result
}
//Payments of first half a year
function getSumPaymentsFirstHalfYear(nameArray) {
    let result = 0
    for (let i = 0; i < 6; i++) {
        result += nameArray[i];
    }
    return result
}
//Payments of second half a year
function getSumPaymentsSecondHalfYear(nameArray) {
    let result = 0
    for (let i = 6; i < 12; i++) {
        result += nameArray[i];
    }
    return result
}
//Payments of summer 
function getSumPaymentsOfSummer(nameArray) {
    let result = 0
    for (let i = 5; i < 8; i++) {
        result += nameArray[i];
    }
    return result
}
//Payments of second quarter
function getSumPaymentsOfSecondQuarter(nameArray) {
    let result = 0
    for (let i = 3; i < 6; i++) {
        result += nameArray[i];
    }
    return result
}
//Payments of double monthes
function getSumPaymentsOfDoubleMonth(nameArray) {
    let result = 0
    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0)
            result += nameArray[i];
    }
    return result
}

function getSumPaymentsOfFirstMonthOfSeason(nameArray) {
    let result = 0
    for (let i = 2; i < 12; i = i + 3) {
        result += nameArray[i];
    }
    return result
}



//Determining the result

let sumPaymentsOfPeriod = getSumPaymentsOfPeriod(totalPayments)

let sumPaymentsOfYear = getSumPaymentsOfYear(totalPayments)
let sumPaymentsFirstHalfYear = getSumPaymentsFirstHalfYear(totalPayments)
let sumPaymentsSecondHalfYear = getSumPaymentsSecondHalfYear(totalPayments)
let sumPaymentsOfSummer = getSumPaymentsOfSummer(totalPayments)
let sumPaymentsOfSecondQuarter = getSumPaymentsOfSecondQuarter(totalPayments)
let sumPaymentsOfDoubleMonth = getSumPaymentsOfDoubleMonth(totalPayments)
let sumPaymentsOfFirstMonthOfSeason = getSumPaymentsOfFirstMonthOfSeason(totalPayments)

// Result output
document.write(`<div div class= "js-output">Payments from ${startMonth} to ${endMonth} monthes of year is: ${sumPaymentsOfPeriod} $</div>`)

document.write(`<div div class= "js-output">Payments of year is: ${sumPaymentsOfYear} $</div>`)
document.write(`<div div class= "js-output">Payments of first half a year is: ${sumPaymentsFirstHalfYear} $</div>`)
document.write(`<div div class= "js-output">Payments of second half a year is: ${sumPaymentsSecondHalfYear} $</div>`)
document.write(`<div div class= "js-output">Payments of summer is: ${sumPaymentsOfSummer} $</div>`)
document.write(`<div div class= "js-output">Payments of second quarter is: ${sumPaymentsOfSecondQuarter} $</div>`)
document.write(`<div div class= "js-output">Payments of double monthes is: ${sumPaymentsOfDoubleMonth} $</div>`)
document.write(`<div div class= "js-output">Payments of first month of season is: ${sumPaymentsOfFirstMonthOfSeason} $</div>`)