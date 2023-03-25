// =========================================================== //
// Task 4. З використанням замикань розробити ітератор,
// тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова.
// З використанням нього розробити гру «Прекладач».
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова.Підрахувати кількість вгаданих букв.
// =========================================================== //

alert(`Введите побуквенно слово -замыкание- на английском `)
let enteredWord = 'closure'

// =========================================================== //
function iteratorOfWord(word) {
    let i = -1
    function iterator() {
        ++i
        return word[i]
    }
    return iterator
}

let cntrOfLettersInWord = iteratorOfWord(enteredWord)

for (let i = 0; i < enteredWord.length; i++) {
    cntrOfLettersInWord()
}

// =========================================================== //

function initGame(word) {
    let guessedOfLetter = 0
    counterOfWord = iteratorOfWord(word)

    for (let i = 0; i < word.length; i++) {

        let tempIter = counterOfWord()
        let userLetter = prompt(`Enter your letter please`)

        if (!userLetter) {
            return guessedOfLetter
        }

        if (userLetter === tempIter) {
            guessedOfLetter += 1
        }

    }
    return guessedOfLetter
}

let resultOfGame = initGame(enteredWord)

// =========================================================== //
document.write(`<div class= "js-output" > Finish, this word is ${enteredWord}</ div>`)
document.write(`<div class= "js-output" > Task 4: You guessed ${resultOfGame} letters</ div> `)