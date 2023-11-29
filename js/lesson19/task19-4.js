// ====================================================================================================================== //
// Задача 4.
// Сяючі зорі. 
// Вказана кількість зірочок повинна з’являтися у випадковій частині екрану.
// Кожна зірка з певним кроком і інтервалом збільшується від мінімального до максимального розміру.
// Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.
// ====================================================================================================================== //
const srcStarSVG = "../../img/task19-4/star.svg"

class letItStar {
    constructor(imgSrc, containerSelector) {
        this.imgSrc = imgSrc
        this.targetContainer = document.querySelector(containerSelector)
        this.starMinScale = 0
        this.starMaxScale = `scale(1)`
        this.step = 0.1
    }

    getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    createStar() {
        let width = window.innerWidth
        let height = window.innerHeight

        let createIMG = document.createElement('img')
        createIMG.className = 'star__image'
        createIMG.src = this.imgSrc
        createIMG.style.top = this.getRandomValue(0, height) + 'px'
        createIMG.style.left = this.getRandomValue(0, width) + 'px'
        createIMG.style.transform = `scale(0.${this.getRandomValue(0, 9)})`
        return createIMG
    }

    renderStars(totalStars) {
        let width = window.innerWidth
        let height = window.innerHeight
        for (let i = 0; i < totalStars; i++) {
            let star = this.createStar()

            //Тут танцы со стрингой чтобы вывести разное стартовое значение scale
            let randomStep = this.getRandomValue(0, 9)
            let starStep = `0.` + `${randomStep}`
            starStep = Number(starStep)

            setInterval(() => {
                starStep += this.step
                star.style.transform = `scale(${starStep})`
                console.log(star.style.transform);
                if (star.style.transform == this.starMaxScale) {
                    starStep = 0
                    star.style.transform = `scale(${this.starMinScale})`
                    star.style.top = this.getRandomValue(0, height) + 'px'
                    star.style.left = this.getRandomValue(0, width) + 'px'
                }

            }, 100)
            this.targetContainer.append(star)
        }
    }
}
let staring = new letItStar(srcStarSVG, ".resolve")
staring.renderStars(20)

// ====================================================================================================================== //

// ====================================================================================================================== //
