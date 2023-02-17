// Enter the required data
const firstAsk = parseInt(prompt(`Please, enter the first number`, ``))
const secondAsk = parseInt(prompt(`Please, enter the first number`, ``))
const minNum = 1
const maxNum = 5

//Determining the result
const randomNumber = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))

// Determining the result
let result

if (randomNumber === firstAsk)
    result = 'Yes, you WIN!'
else if (randomNumber === secondAsk)
    result = 'Yes, you WIN!'
else
    result = 'No, i am sorry, but you loose!'


document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>${result} You entered numbers ${firstAsk} and ${secondAsk}. This is ${randomNumber}</p> 
</div>`)