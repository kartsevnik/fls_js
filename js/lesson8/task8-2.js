// Enter the required data
let totalVisitors = []

function enterRandomEvaluation() {
    return Math.floor(Math.random() * 10) + 1
}

for (let i = 1; i <= 7; i++) {
    totalVisitors.push(enterRandomEvaluation())
    document.write(`<div div class= "js-output"> ${i} day = ${totalVisitors[i - 1]} visitors</div>`)
}


// 1. номери днів, протягом яких кількість відвідувачів була меншою за 20;
// Creating Functions
function getVisitorsOver20(visitors) {
    let res = []

    for (let i = 0; i < visitors.length; i++) {
        if (visitors[i] > 20)
            res.push(i + 1)
    }

    return res
}

//Determining the result
let visitorsOver20 = getVisitorsOver20(totalVisitors)


// 2. номери днів, коли кількість відвідувачів була мінімальною;
// Creating Functions
function getDayWithMinVisitors(visitors) {
    let min = Math.min(...visitors)
    let res = []
    for (let i = 0; i < visitors.length; i++) {
        if (visitors[i] === min)
            res.push(i + 1)
    }
    return res
}

//Determining the result
let dayWithMinVisitors = getDayWithMinVisitors(totalVisitors).join(' day, ')



//3. номери днів, коли кількість відвідувачів була максимальною;
// Creating Functions
function getDayWithMaxVisitors(visitors) {
    let max = Math.max(...visitors)
    let res = []
    for (let i = 0; i < visitors.length; i++) {
        if (visitors[i] === max)
            res.push(i + 1)
    }
    return res
}

//Determining the result
let dayWithMaxVisitors = getDayWithMaxVisitors(totalVisitors).join(' day, ')


//4. загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
// Creating Functions
function getVisitorsInWorkingDay(visitors) {
    let res = 0
    for (let i = 0; i < 5; i++) {
        res += visitors[i]
    }
    return res
}
function getVisitorsInWeekEnd(visitors) {
    let res = 0
    for (let i = 5; i < 7; i++) {
        res += visitors[i]
    }
    return res
}

let visitorsInWorkingDay = getVisitorsInWorkingDay(totalVisitors)
let visitorsInWeekEnd = getVisitorsInWeekEnd(totalVisitors)

// Result output
document.write(`<div div class= "js-output">1. Days, when the number of visitors was less than 20: ${visitorsOver20}</div>`)
document.write(`<div div class= "js-output">2. The day, when the number of visitors was minimal: ${dayWithMinVisitors} day</div>`)
document.write(`<div div class= "js-output">3. The day, when the number of visitors was maximum: ${dayWithMaxVisitors} day</div>`)
document.write(`<div div class= "js-output">3. The total number of customers on working days - ${visitorsInWorkingDay} and the total number of days on weekends - ${visitorsInWeekEnd}</div>`)
