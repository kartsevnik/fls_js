// Enter the required data
const firstAsk = parseInt(prompt(`Please, enter the first number`, ``))
const secondAsk = parseInt(prompt(`Please, enter the first number`, ``))
const minNum = 1
const maxNum = 5

//Determining the result
const randomNumber = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))

// Determining the result

if (randomNumber == firstAsk)
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>Yes, you WIN! This is ${randomNumber}</p> 
</div>`)

else if (randomNumber == secondAsk)
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>Yes, you WIN! This is ${randomNumber}</p> 
</div>`)

else
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>I am sorry, but this is ${randomNumber}, you entered ${firstAsk} and ${secondAsk} </p> 
</div>`)


