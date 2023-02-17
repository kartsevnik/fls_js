// Enter the required data
const nameOfFirstChild = prompt(`Enter the name of first child please`, `Anastasiia`)
const quantityCandiesOfFirstChild = parseInt(prompt(`Enter the quantity of candies for the first child please`, `5`))
const nameOfSecondChild = prompt(`Enter the name of second child please`, `Viktoriia`)
const quantityCandiesOfSecondChild = parseInt(prompt(`Enter the quantity of candies for the second child please`, `5`))
// Determining the result

if (quantityCandiesOfFirstChild > quantityCandiesOfSecondChild)
    document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>У ${nameOfFirstChild} has more sweets than ${nameOfSecondChild}</p> 
</div>`)

else if (quantityCandiesOfFirstChild < quantityCandiesOfSecondChild)
    document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>${nameOfSecondChild} has more sweets than ${nameOfFirstChild}</p> 
</div>`)

else if (quantityCandiesOfFirstChild == quantityCandiesOfSecondChild)
    document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>${nameOfSecondChild} and ${nameOfFirstChild} have the same amount of candy</p> 
</div>`)





// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>a = ${a} </p> 

</div>`)


// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>S1 = ${s1} </p> 

</div>`)