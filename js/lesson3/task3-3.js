// Enter the required data
let firstAsk = parseInt(prompt(`Please, enter the first number`, ``))
let secondAsk

const minNum = 1
const maxNum = 5

//Determining the result
const randomNumber = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))

// Determining the result
let result

if (randomNumber === firstAsk) {
    result = 'Yes, you WIN on the first try!'
    secondAsk = ''
}
else
    secondAsk = parseInt(prompt(`Please, enter the second number`, ``))

if (randomNumber === secondAsk)
    result = 'Yes, you WIN on the second try!'
else if (randomNumber != secondAsk && randomNumber != firstAsk)
    result = 'No, i am sorry, but you loose!'


document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>${result} This is ${randomNumber}</p> 
</div>`)