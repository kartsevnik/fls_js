// ====================================================================================================================== //
// Задача 4. Розробити клас Baner
// Поля:	Масив об’єктів ( графічних зображень та посилань на сайти)

// Методи:	Метод випадкового вибору об’єкта (графічного зображення та посилання)
//          Метод виведення випадкового банера

// ====================================================================================================================== //
const banners = [
    {
        image: '<img src="../../img/task15-4/js.png" alt="">',
        link: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>'
    },
    {
        image: '<img src="../../img/task15-4/css-3.png" alt="">',
        link: '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>'
    },
    {
        image: '<img src="../../img/task15-4/html-5.png" alt="">',
        link: '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</>'
    },
]

class Baners {
    constructor(arrayOfBanners) {
        this.arrayOfBanners = arrayOfBanners
    }
    // =========> method:
    randomNum(minV, maxV) { return minV + Math.floor(Math.random() * maxV - minV + 1) }
    // =========> method:
    randomObject() {
        let random = this.randomNum(1, this.arrayOfBanners.length) - 1
        return this.arrayOfBanners[random]
    }
    // =========> method:
    toString() {
        let random = this.randomNum(1, this.arrayOfBanners.length) - 1
        return document.write(
            `<div class= "js-output">${this.arrayOfBanners[random].image}</div>
            <div class= "js-output">${this.arrayOfBanners[random].link}</div>`
        )
    }
}

let initBaners = new Baners(banners)

console.log(initBaners.randomObject());
console.log(initBaners.arrayOfBanners.length);
initBaners.toString()

// ====================================================================================================================== //


// ====================================================================================================================== //
