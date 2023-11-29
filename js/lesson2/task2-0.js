
// Enter the required data
let a = parseInt(prompt('Enter an integer а', '2'))
let b = parseInt(prompt('Enter an integer b', '4'))
let c = parseInt(prompt('Enter an integer c', '6'))

//Determining the result - s1
let s1 = a + 12 + b

//Determining the result - s2
let s2 = Math.sqrt((a + b) / (2 * a))


//Determining the result - s3
let s3 = Math.cbrt((a + b) * c)

//Determining the result - s4
let s4 = Math.sin(a / (-b))

// Input data entry
document.write(`
<div class="js-output">
<h2>Input data:</h2>
<p>a = ${a} </p> 
<p>b = ${b} </p> 
<p>c = ${c} </p>
</div>`)


// Result output
document.write(`
<div class="js-output">
<h2>Result output:</h2>
<p>S1 = ${s1} </p> 
<p>S2 = ${s2} </p> 
<p>S3 = ${s3} </p>
<p>S4 = ${s4} </p>
</div>`)

