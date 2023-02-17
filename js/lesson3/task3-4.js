// Enter the required data
const age = parseInt(prompt(`Please, enter the age of person`, ``))

// Determining the result

if (age < 6)
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>Hello baby, your age is ${age}</p> 
</div>`)
else if (age < 17)
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>Hello schoolboy. Your age is ${age}. Did you do your homework?</p> 
</div>`)
else if (age < 22)
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>Hello student. Your age is ${age}. Don't you have your first lecture at the university again today?</p> 
</div>`)
else if (age < 65)
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>Hello dude. Your age is ${age}. Work hard - play hard!</p> 
</div>`)
else if (age < 100)
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>Hello pensioner. Your age is ${age}. How many grandchildren do you have?</p> 
</div>`)
else
    document.write(`
<div class="js-output">
<h2>Result:</h2>
<p>I am sorry, but I don't understand this number - ${age}, try again </p> 
</div>`)
