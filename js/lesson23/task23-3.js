// Задача 3. Сформувати масив з 1000 елементів від 1 до 800.
// Порівняти час сортування бульбашкою і вставкою.

class compareSortingTime {

    constructor() {
        this.min = 1
        this.max = 800
        this.sizeArray = 1000
        this.arr = []
        this.resultElement = document.getElementById("result")
    }

    getRandomValue() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    }

    createArray() {
        for (let index = 0; index < this.sizeArray; index++) {
            this.arr[index] = this.getRandomValue()
        }
    }

    sortingBubble() {
        this.createArray()
        const startDate = new Date()

        for (let i = 0; i < this.sizeArray - 1; i++) {
            for (let j = 0; j < this.sizeArray - i - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
                }
            }
        }
        const endDate = new Date()
        const compare = endDate - startDate

        const elementP = document.createElement('p')
        elementP.innerHTML = `Time for sorting with a bulb (ms): ${compare}`
        this.resultElement.append(elementP)
    }

    sortingInsert() {
        this.createArray()
        const startDate = new Date()

        for (let i = 1; i < this.sizeArray; i++) {
            let current = this.arr[i];
            let j = i - 1;
            while (j >= 0 && this.arr[j] > current) {
                this.arr[j + 1] = this.arr[j];
                j--;
            }
            this.arr[j + 1] = current;
        }
        const endDate = new Date()
        const compare = endDate - startDate

        const elementP = document.createElement('p')
        elementP.innerHTML = `Time for sorting insert (ms): ${compare}`
        this.resultElement.append(elementP)
    }
}

let sortingTime = new compareSortingTime
sortingTime.sortingBubble()
sortingTime.sortingInsert()