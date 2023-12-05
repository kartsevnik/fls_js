// Given 3 dimension tables 3 * 3 with random numbers.
// If there is a click on any of the cells, then a red frame is added to the appropriate table
// (Try to add the ability to display the number of clicks near the table name
// Using the attribute added for this attribute).

// Дано 3 таблиці розмірності 3 * 3 з випадковими числами.
// Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка
// (спробуйте додати можливість відображення кількості кліків біля назви таблиці
// з використанням відповідно доданого для цього атрибута).


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

class RunTableCheck {
    constructor(quantityOfTables, quantityOfColumns, quantityOfRows) {
        this.quantityOfTables = quantityOfTables
        this.quantityOfColumns = quantityOfColumns
        this.quantityOfRows = quantityOfRows
        this.el = this.createElement()
    }

    createElement() {
        const container = ElementsCreator.createHTMLElement(
            {
                tag: 'div',
                props: {
                    style: 'display: flex; gap: 20px; justify-content: center;'
                }
            }
        )

        for (let index = 0; index < this.quantityOfTables; index++) {
            const table = this.createTable()

            const counter = ElementsCreator.createHTMLElement(
                {
                    tag: 'p',
                    props: {
                        style: 'color: white; width: 100%',
                        className: 'counter',
                        innerText: 0
                    }
                }
            )
            table.append(counter)
            container.append(table)
        }


        return container
    }

    createTable() {
        const table = ElementsCreator.createHTMLElement(
            {
                tag: 'table',
                props: {
                    style: 'color: white;',
                    className: 'TableTask'
                }
                ,
                events: {
                    click: this.runPaint
                }
            }
        )

        for (let index = 0; index < this.quantityOfColumns; index++) {
            const tr = ElementsCreator.createHTMLElement(
                {
                    tag: 'tr',
                    props: {
                        className: 'trOfTable'

                    }
                }
            )

            for (let index = 1; index <= this.quantityOfRows; index++) {
                const td = ElementsCreator.createHTMLElement(
                    {
                        tag: 'td',
                        props: {
                            innerText: `${generatorOfNumbers.generate(1, 100)}`,
                        }
                    }
                )
                tr.append(td)
                table.append(tr)
            }
        }

        return table
    }


    runPaint() {
        let counter = Number(this.lastElementChild.innerText);
        this.style.outline = 'red 2px solid';
        counter += 1
        this.lastElementChild.innerText = counter
    }

    render(targetEl) {
        document.querySelector(targetEl).append(this.el)
    }
}

window.onload = function () {

    const resultLists = new RunTableCheck(3, 3, 3)
    resultLists.render('.resolve20_1')
}