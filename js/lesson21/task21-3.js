// Problem 3.
// Given 5 randomly generated numbered lists with random numbers
// (number of elements in the list random from 1 to 10, elements random - from 1 to 100).
// When pressed on the button numbered lists with even number of elements, paint in green, others in red.

// Задача 3.
// Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами
// (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100).
// При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

class ElementsCreator {
    static createHTMLElement({ tag, attrs, props, events }) {
        const el = document.createElement(tag)
        if (attrs) {
            for (const attrKey in attrs) {
                el.setAttribute(attrKey, attrs[attrKey])
            }
        }
        if (props) {
            for (const propKey in props) {
                el[propKey] = props[propKey]
            }
        }
        if (events) {
            for (const eventType in events) {
                el.addEventListener(eventType, events[eventType])
            }
        }
        return el
    }
}

class generatorOfNumbers {
    static generate(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
    }
}

class PaintNumberedLists {
    constructor(quantityOfTables) {
        this.quantityOfTables = quantityOfTables
        this.el = this.createElement()
    }

    createElement() {
        const container = ElementsCreator.createHTMLElement(
            { tag: 'div' }
        )

        for (let index = 0; index < this.quantityOfTables; index++) {
            const table = this.createTable()
            container.append(table)
        }

        const btn = ElementsCreator.createHTMLElement({
            tag: 'button',
            props: {
                innerText: 'Run',
            },
            events: {
                click: this.runPaint.bind(this)
            }
        })
        container.append(btn)

        return container
    }

    createTable() {
        const table = ElementsCreator.createHTMLElement(
            {
                tag: 'table',
                props: {
                    style: 'color: white;'
                }
            }
        )
        const tr = ElementsCreator.createHTMLElement(
            {
                tag: 'tr',
                props: {
                    className: 'trOfTable'
                }
            }

        )

        const randomSizeTD = generatorOfNumbers.generate(1, 10)
        for (let index = 1; index <= randomSizeTD; index++) {
            const td = ElementsCreator.createHTMLElement(
                {
                    tag: 'td',
                    props: {
                        innerText: `${generatorOfNumbers.generate(1, 100)}`,
                    },
                }
            )
            tr.append(td)
            table.append(tr)
        }
        return table
    }


    runPaint() {
        let allTR = document.querySelectorAll('.trOfTable')
        console.log(allTR)
        for (const tr of allTR) {
            if (tr.childElementCount % 2 === 0) {
                tr.style.color = 'green';
            } else {
                tr.style.color = 'red';

            }
        }
        // return console.log(allTR)
    }

    render(targetEl) {
        document.querySelector(targetEl).append(this.el)
    }
}

window.onload = function () {

    const resultLists = new PaintNumberedLists(5)
    resultLists.render('.resolve20_1')
}