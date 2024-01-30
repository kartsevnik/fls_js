const array = ["gbbr", "apple", "10", "orange", "123", "hello", "456", "25"];

const resultElement = document.getElementById("result");

let elPStartArray = document.createElement('p');
elPStartArray.textContent = "Start array: ";
resultElement.appendChild(elPStartArray);

for (const s of array) {
    let elP = document.createElement('span');
    elP.textContent = s + "; ";
    elPStartArray.appendChild(elP);
}

console.log(array);

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
const exp1 = new RegExp("[0-9]");
const newArray1 = array.filter(s => exp1.test(s));

// ================= Export result in HTML 
let elPTask1 = document.createElement('p');
elPTask1.textContent = "Task 1: ";
resultElement.appendChild(elPTask1);

for (const s of newArray1) {
    let elP = document.createElement('span');
    elP.textContent = s + "; ";
    elPTask1.appendChild(elP);
}
// ============================================================================================================
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

// const exp2 = new RegExp("[^0-9]");
const newArray2 = array.filter(s => /[^0-9]/.test(s));

// ================= Export result in HTML 
let elPTask2 = document.createElement('p');
elPTask2.textContent = "Task 2: ";
resultElement.appendChild(elPTask2);

for (const s of newArray2) {
    let elP = document.createElement('span');
    elP.textContent = s + "; ";
    elPTask2.appendChild(elP);
}

// ============================================================================================================
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

const exp3 = new RegExp("[a|e|i|o|u]");

const newArray3 = array.filter(s => exp3.test(s));

// ================= Export result in HTML 
let elPTask3 = document.createElement('p');
elPTask3.textContent = "Task 3: ";
resultElement.appendChild(elPTask3);

for (const s of newArray3) {
    let elP = document.createElement('span');
    elP.textContent = s + "; ";
    elPTask3.appendChild(elP);
}
// ============================================================================================================
// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
const exp4 = new RegExp("[a|e|i|o|u]");

const newArray4 = array.filter(s => !exp4.test(s));

// ================= Export result in HTML 
let elPTask4 = document.createElement('p');
elPTask4.textContent = "Task 4: ";
resultElement.appendChild(elPTask4);

for (const s of newArray4) {
    let elP = document.createElement('span');
    elP.textContent = s + "; ";
    elPTask4.appendChild(elP);
}
// ============================================================================================================
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
const exp5 = new RegExp("[1|3]");

const newArray5 = array.filter(s => exp5.test(s));

// ================= Export result in HTML 
let elPTask5 = document.createElement('p');
elPTask5.textContent = "Task 5: ";
resultElement.appendChild(elPTask5);

for (const s of newArray5) {
    let elP = document.createElement('span');
    elP.textContent = s + "; ";
    elPTask5.appendChild(elP);
}
// ============================================================================================================
const text = "gbbr, apple, orange, 123, hello, 456";
// ============================================================================================================
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

let task6 = text.match(/\d/g)
// ================= Export result in HTML 
let elPTask6 = document.createElement('p');
elPTask6.textContent = "Task 6: ";
resultElement.appendChild(elPTask6);

for (const s of task6) {
    let elP = document.createElement('span');
    elP.textContent = s + "; ";
    elPTask6.appendChild(elP);
}
// ============================================================================================================
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
let task7 = text.match(/\W/g)
// ================= Export result in HTML 
let elPTask7 = document.createElement('p');
elPTask7.textContent = "Task 7: ";
resultElement.appendChild(elPTask7);

for (const s of task7) {
    let elP = document.createElement('span');
    elP.textContent = s + "; ";
    elPTask7.appendChild(elP);
}
// ============================================================================================================
// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

// ================= Split text by delimiters
const words = text.split(/\W+/);

// ================= Export result in HTML 
let elPTask8 = document.createElement('p');
elPTask8.textContent = "Task 8: ";
resultElement.appendChild(elPTask8);

for (const word of words) {
    let elP = document.createElement('span');
    elP.textContent = word + " ";
    elPTask8.appendChild(elP);
}
// ============================================================================================================
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
let text9 = "Random text, here is the date 01.12.2020 we are waiting for the result"
let task9 = /\d{2}.\d{2}.\d{4}\D/.test(text9)

// ================= Export result in HTML 
let elPTask9 = document.createElement('p');
elPTask9.textContent = "Task 9: " + task9;
resultElement.appendChild(elPTask9);
// ============================================================================================================
// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
const text10 = "Random text with numbers: 10, 1, 25, 3569. We are waiting for the result";

// ================= Split text by numbers
const numbers = text10.match(/\d{2}/g);

// ================= Count numbers
let count10 = numbers.length;

// ================= Export result in HTML 
let elPTask10 = document.createElement('p');
elPTask10.textContent = "Task 10: " + count10;
resultElement.appendChild(elPTask10);
// ============================================================================================================
// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»).
// Знайти усі такі номери.
let text11 = "Random text, here is the number of 4142-3433-2323-3434 we are waiting for the result. and a few 4042-3433-2323-3434"
let task11_1 = /\d{4}-\d{4}-\d{4}-\d{4}\D/.test(text11) // true

let cardNumbers = text11.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g);
let count11 = cardNumbers.length;


// ================= Export result in HTML
let elPTask11 = document.createElement('p');
elPTask11.textContent = "Task 11: " + task11_1 + " ";
resultElement.appendChild(elPTask11);

for (const card of cardNumbers) {
    let elP = document.createElement('span');
    elP.textContent = card + " ";
    elPTask11.appendChild(elP);
}

// ============================================================================================================
// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
let text12 = "https://chat.openai.gov/"
let patt12 = text12.endsWith("gov") || text12.endsWith("gov/")


// ================= Export result in HTML
let elPTask12 = document.createElement('p');
elPTask12.textContent = "Task 12: " + patt12;
resultElement.appendChild(elPTask12);

// ============================================================================================================
// Задача 13. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)

let text13 = "+380931112256"
let patt13 = text13.startsWith("+38") || text13.endsWith("38")


// ================= Export result in HTML
let elPTask13 = document.createElement('p');
elPTask13.textContent = "Task 13: " + patt13;
resultElement.appendChild(elPTask13);
// ============================================================================================================
// Задача 14. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
let text14 = "Kartsev Mykola"
text14 = text14.replace(" ", "-")

// ================= Export result in HTML
let elPTask14 = document.createElement('p');
elPTask14.textContent = "Task 14: " + text14;
resultElement.appendChild(elPTask14);
// ============================================================================================================
// Задача 15. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
let text15 = "05.02.1990"
text15 = text15.replaceAll(".", "/")

// ================= Export result in HTML
let elPTask15 = document.createElement('p');
elPTask15.textContent = "Task 15: " + text15;
resultElement.appendChild(elPTask15);
// ============================================================================================================
// Задача 16. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним


function getTypeOfDay(day) {
    let typeOfDay = ""
    if (day !== null) {
        if (typeof day == "string") {
            switch (day.toLowerCase()) {
                case "mon":
                case "tue":
                case "wed":
                case "thu":
                case "fri":
                    typeOfDay = "work day"
                    break;
                case "sun":
                case "sat":
                    typeOfDay = "weekend"
                default:
                    break;
            }
        }
        if (typeof day == "number") {
            switch (day) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    typeOfDay = "work day"
                    break;
                case 5:
                case 6:
                    typeOfDay = "weekend"
                default:
                    break;
            }
        }
    }
    // ================= Export result in HTML
    let elPTask16 = document.createElement('p');
    elPTask16.textContent = "Task 16: " + typeOfDay;
    resultElement.appendChild(elPTask16);

}
let day1 = 6
getTypeOfDay(day1)
