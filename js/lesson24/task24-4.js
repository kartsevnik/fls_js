// Задача 4. Вводиться велике число. Кожні 3 розряди відділяти пробілом.
// 7457896524 🡪 7 457 896 524

let textNumber = "7457896524"

let patt1 = /(\d?)/
let patt2 = /(\d{3}\B)/g

textNumber = textNumber.replace(patt1, "$& ")
textNumber = textNumber.replace(patt2, "$& ")
console.log(textNumber);