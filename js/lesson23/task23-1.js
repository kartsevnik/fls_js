// Task 1. The user goes on vacation for 56 days.Determine the date at the time of its return.
// Задача  1. Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.

let currentDate = new Date()
currentDate.setDate(56)
currentDate.toDateString()
console.log(currentDate);

const targetElement = document.getElementById("result")
targetElement.innerHTML = `The date in 56 days will be: ${currentDate}` 