// ====================================================================================================================== //
// Задача 5. Розробити клас «Керівник танців»

// Поля	    Масив імен хлопців
//          Масив імен дівчат

// Методи	Метод випадкового вибору імені хлопця
//          Метод випадкового вибору імені дівчини
//          Метод виведення пари для танців
//          Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

// ====================================================================================================================== //c
const boys = ['Jon', 'Bill', 'Egor', 'Ernast', 'Vasya', 'Nikolo', 'Antonio']
const girls = ['Emilia', 'Lisa', 'Nata', 'Vittoria', 'Vasilisa', 'Ninel', 'Lietta']

class DanceHead {
    constructor(boys, girls) {
        this.boys = boys
        this.girls = girls
    }

    // =========> method:
    randomNum(minV, maxV) { return minV + Math.floor(Math.random() * maxV - minV + 1) }

    // =========> method: Метод випадкового вибору імені хлопця
    getRandomBoy() {
        let random = this.randomNum(1, this.boys.length) - 1
        return this.boys[random]
    }

    // =========> method: Метод випадкового вибору імені дівчини
    getRandomGirl() {
        let random = this.randomNum(1, this.girls.length) - 1
        return this.girls[random]
    }

    // =========> method: Метод виведення пари для танців
    toString(sexArray) {
        let random = this.randomNum(1, sexArray.length) - 1
        return sexArray[random]
    }

    // =========> method: Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
    run() {
        setInterval(() => {
            alert(`Partners: ${this.getRandomBoy()} and ${this.getRandomGirl()}`)
        }, 5000);
    }

}
// ====================================================================================================================== //

let initClass = new DanceHead(boys, girls)
console.log(initClass.getRandomBoy());
console.log(initClass.getRandomGirl());
document.write(`<div class= "js-output"> Partners: ${initClass.toString(initClass.boys)} and ${initClass.toString(initClass.girls)}</div>`)
console.log(`Partners: ${initClass.toString(initClass.boys)} and ${initClass.toString(initClass.girls)}`);
initClass.run()




// ====================================================================================================================== //
