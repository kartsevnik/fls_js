// Enter the required data
const nameOfFirstChild = prompt(`Enter the name of first child please`, `Anastasiia`)
const quantityCandiesOfFirstChild = parseInt(prompt(`Enter the quantity of candies for the first child please`, `5`))
const nameOfSecondChild = prompt(`Enter the name of second child please`, `Viktoriia`)
const quantityCandiesOfSecondChild = parseInt(prompt(`Enter the quantity of candies for the second child please`, `5`))

// Determining the result

let nameOfMoreCandies
let nameOfLessCandies
let text

if (quantityCandiesOfFirstChild > quantityCandiesOfSecondChild) {
    nameOfMoreCandies = nameOfFirstChild
    nameOfLessCandies = nameOfSecondChild
    text = 'has more sweets than'
}
else if (quantityCandiesOfFirstChild < quantityCandiesOfSecondChild) {
    nameOfMoreCandies = nameOfSecondChild
    nameOfLessCandies = nameOfFirstChild
    text = 'has more sweets than'
}
else if (quantityCandiesOfFirstChild == quantityCandiesOfSecondChild) {
    nameOfMoreCandies = ''
    nameOfLessCandies = ''
    text = "The quanity of candies is the same"
}

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>${nameOfFirstChild} have ${quantityCandiesOfFirstChild} candies</p> 
<p>${nameOfSecondChild} have ${quantityCandiesOfSecondChild} candies</p> 
</div>`)

// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p> ${nameOfMoreCandies} ${text} ${nameOfLessCandies}</p> 
</div>`)