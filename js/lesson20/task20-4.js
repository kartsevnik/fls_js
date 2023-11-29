// ====================================================================================================================== //
// Задача.Перекладач.
//      Користувачу виводять змішані картки з словами на англійській і українській мові.
//      Користувач поступово клікає на картки(виділяємо синьою рамкою).
//      Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки.
//      Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.
// ====================================================================================================================== //

const wordsList = [
    {
        wordUA: `шеф`,
        wordIT: `capo`
    },
    {
        wordUA: `дівчина`,
        wordIT: `ragazza`
    },
    {
        wordUA: `скарб`,
        wordIT: `tesoro`
    },
    {
        wordUA: `сіль`,
        wordIT: `sale`
    },
    {
        wordUA: `сонце`,
        wordIT: `sole`
    },
    {
        wordUA: `сусід`,
        wordIT: `vicino`
    },
    {
        wordUA: `любов`,
        wordIT: `amore`
    },
]


class createCards {
    constructor(arrayWithWords) {
        this.arrayWithWords = arrayWithWords
        this.wordUA = false
        this.wordIT = false

    }

    randomNum(Min, Max) {
        return Min + Math.floor(Math.random() * (Max - Min + 1))
    }

    render() {
        this.renderWords()

        const allWordsUA = document.querySelectorAll(`.wordUA`)
        const allWordsIT = document.querySelectorAll(`.wordIT`)
        allWordsUA.forEach(word => word.addEventListener('click', this.selectedWordUA.bind(this, word)))
        allWordsIT.forEach(word => word.addEventListener('click', this.selectedWordIT.bind(this, word)))
    }

    renderWords() {
        let listOfWordsUA = []
        let listOfWordsIT = []

        for (const word of this.arrayWithWords) {
            listOfWordsUA.push(word.wordUA)
            listOfWordsIT.push(word.wordIT)
        }

        const containerUA = document.querySelector(`.words__ua`)
        let iterations = listOfWordsUA.length - 1
        while (listOfWordsUA != 0) {
            let index = this.randomNum(0, iterations)
            let paragrafUA = document.createElement('button')
            paragrafUA.className = `wordUA`
            paragrafUA.innerText = listOfWordsUA[index]
            containerUA.append(paragrafUA)
            listOfWordsUA.splice(index, 1);
            iterations--
        }

        const containerIT = document.querySelector(`.words__it`)
        iterations = listOfWordsIT.length - 1
        while (listOfWordsIT != 0) {
            let index = this.randomNum(0, iterations)
            let paragrafIT = document.createElement('button')
            paragrafIT.className = `wordIT`
            paragrafIT.innerText = listOfWordsIT[index]
            containerIT.append(paragrafIT)
            listOfWordsIT.splice(index, 1);
            iterations--
        }
    }

    selectedWordUA(word) {
        console.log(word);
        let value = word.innerText;
        this.wordUA = value
        console.log(this);

        word.classList.add('selectedUA')
        let allWordsUA = Array.from(document.querySelectorAll(`.wordUA`))
        let lastButtons = allWordsUA.filter(word => word.innerText != value);
        lastButtons.forEach(word => word.setAttribute("disabled", ""))
        lastButtons.forEach(word => word.removeEventListener('click', this.selectedWordUA))
        this.verification()
    }

    selectedWordIT(word) {
        console.log(word);

        let value = word.innerText;
        this.wordIT = value
        console.log(this);

        word.classList.add('selectedIT')
        let allWordsIT = Array.from(document.querySelectorAll(`.wordIT`))
        let lastButtons = allWordsIT.filter(word => word.innerText != value);
        lastButtons.forEach(word => word.setAttribute("disabled", ""))
        lastButtons.forEach(word => word.removeEventListener('click', this.selectedWordIT))
        this.verification()
    }

    verification() {
        let result = false

        if (this.wordUA && this.wordIT) {
            for (const word of this.arrayWithWords) {
                if ((word.wordUA == this.wordUA) && (word.wordIT == this.wordIT)) {
                    result = true
                    setTimeout(() => {
                        selectedWordUA.remove()
                        selectedWordIT.remove()
                    }, 1000);
                }
            }

            let selectedWordUA = document.querySelector(`.selectedUA`)
            let selectedWordIT = document.querySelector(`.selectedIT`)
            if (result == true) {
                selectedWordUA.style.outline = "3px solid green"
                selectedWordIT.style.outline = "3px solid green"

                let lastButtons = document.querySelectorAll(`button`)
                lastButtons.forEach(word => word.removeAttribute("disabled"))
                this.wordUA = false
                this.wordIT = false

            }
            else {
                selectedWordUA.style.outline = "3px solid red"
                selectedWordIT.style.outline = "3px solid red"

                setTimeout(() => {
                    let lastButtons = document.querySelectorAll(`button`)
                    lastButtons.forEach(word => word.removeAttribute("disabled"))
                    selectedWordUA.style.outline = ""
                    selectedWordIT.style.outline = ""
                    selectedWordUA.classList.remove("selectedUA")
                    selectedWordIT.classList.remove("selectedIT")
                    this.wordUA = false
                    this.wordIT = false
                }, 1000);
            }
            let lastButtons = document.querySelectorAll(`button`)

            if (lastButtons.length == 2) {
                let resultText = document.querySelector(`.resault-text`)
                console.log(resultText);
                resultText.innerText = `Congratulations!`
            }


        }
    }
}

let start = new createCards(wordsList)
start.render()


// ====================================================================================================================== //

// ====================================================================================================================== //
