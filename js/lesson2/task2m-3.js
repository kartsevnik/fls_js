
// Enter the required data
const AGE_OF_CHILD = parseFloat(prompt(`Enter the age of the child`, `1`))
const KINDERGARTEN_START_AGE = 3
const SCHOOL_START_AGE = 6
const UNIVERSITY_START_AGE = 18
const SCHOOL_END_AGE = UNIVERSITY_START_AGE
//Determining the result
const timeToGoToKindergarten = Math.max(0, KINDERGARTEN_START_AGE - AGE_OF_CHILD)
const timeToGoToSchool = Math.max(0, SCHOOL_START_AGE - AGE_OF_CHILD)
const timeEndOfSchool = Math.max(0, SCHOOL_END_AGE - AGE_OF_CHILD)
const timeToGoToUniversity = Math.max(0, UNIVERSITY_START_AGE - AGE_OF_CHILD)





// Input data entry
document.write(`
<div class="js-output">
    <h2>Input data entry:</h2>
    <p>Age of child - ${AGE_OF_CHILD} years </p> 
    <p>Age to go to the garden - ${KINDERGARTEN_START_AGE} years</p> 
    <p>Age to go to the school - ${SCHOOL_START_AGE} years</p> 
    <p>End of school in - ${SCHOOL_END_AGE} years</p> 
    <p>Age to go to the university - ${UNIVERSITY_START_AGE} years</p> 
</div>`)
// Result output
document.write(`
<div class="js-output">
    <h2>Result output:</h2>
    <h2>Left to wait to go to the garden  ${timeToGoToKindergarten} years</h2>
    <h2>Left to wait to go to the school ${timeToGoToSchool} years</h2>
    <h2>Left to wait to End of school ${timeEndOfSchool} years</h2>
    <h2>Left to wait for go to the university ${timeToGoToUniversity} years</h2>
    </div>`)
