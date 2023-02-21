// ===================== Enter the required data

// Required data for generated randomly number
const randomNumber = Math.random()
const integerRandomNumber = Math.floor(randomNumber * 10)



const enterNumber1player = parseInt(prompt(`1 player: Please enter the number from 1 to 10 for start the game`, `0`))
const enterNumber2player = parseInt(prompt(`2 player: Please enter the number from 1 to 10 for start the game`, `10`))
// =====================Determining the result

// calculate Of Winner
let firstPlayer = Math.abs(integerRandomNumber - enterNumber1player);
let secondPlayer = Math.abs(integerRandomNumber - enterNumber2player);


let result
if (firstPlayer === secondPlayer)
    result = `Draw result`
else if (enterNumber1player == integerRandomNumber)
    result = `1 player - win`
else if (enterNumber2player == integerRandomNumber)
    result = `2 player - win`
else if (firstPlayer < secondPlayer)
    result = `1 player - win`
else if (secondPlayer < firstPlayer)
    result = `2 player - win`
else result = `Error, try again`

// ===================== Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>Generated number is ${integerRandomNumber}</p> 
<p>First player entered -  ${enterNumber1player}</p> 
<p>Second player entered -  ${enterNumber2player}</p> 
</div>`)

document.write(`
<div class="js-output">
<h2>Difference:</h2>
<p>First player difference -  ${firstPlayer}</p> 
<p>Second difference -  ${secondPlayer}</p> 
</div>`)

// ===================== Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p> ${result}</p> 
</div>`)