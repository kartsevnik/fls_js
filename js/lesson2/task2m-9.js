// Enter the required data
const min = parseInt(prompt('Enter the number of minutes', 35))
const sec = parseInt(prompt('Enter the number of seconds', 155))

// Подсчет данных
const currentDate = new Date();
const currentSec = currentDate.getSeconds()
const currentMin = currentDate.getMinutes()

// Установка нового времени
currentDate.setMinutes(currentMin + min)
currentDate.setSeconds(currentSec + sec)

// Получение новых значений
const newSec = currentDate.getSeconds()
const newMin = currentDate.getMinutes()

// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data:</h2>
    <p>Current minutes ${currentMin}</p>
    <p>Current seconds ${currentSec}</p>
    <br>
    <p>Entered  minutes ${min}</p>
    <p>Entered  seconds ${sec}</p>
    </div>`)


// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <p>New Minutes ${newMin}</p>
    <p>New seconds ${newSec}</p>
    </div>`)