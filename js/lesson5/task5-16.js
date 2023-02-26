// Enter the required data
const enterWeeks = parseInt(prompt(`Enter the quantity of weeks`, `3`))
let totalSumOfAllWeeks = 0

// Determining the result
for (let i = 1; i <= enterWeeks; i++) {

    let j
    let enterMoneyOfDay
    let totalSumOfWeek = 0
    for (let j = 1; j <= 7; j++) {
        enterMoneyOfDay = parseInt(prompt(`Enter the money of ${i} week and ${j} day`, `100`))
        totalSumOfAllWeeks += enterMoneyOfDay
        totalSumOfWeek += enterMoneyOfDay
    }

    document.write(`
<div class="js-output">
<h2>Result data:</h2>
<p>Week ${i} - ${totalSumOfWeek}</p> 
</div>`)
}
document.write(`
<div class="js-output">
<h2>Sum of all weeks - ${totalSumOfAllWeeks}</h2>
</div>`)