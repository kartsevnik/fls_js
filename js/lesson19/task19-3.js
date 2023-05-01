// ====================================================================================================================== //
// Задача 3.
// Відобразити падаючий сніг.
// Сніжинка з’являється у верхній частині екрану і з випадковою швидкістю рухається вниз.
// Як тільки сніжинка досягає нижньої частини екрану вона знову повинна з’явитись у верхній частині екрану.
// ====================================================================================================================== //
const srcSnowSVG = "../../img/task19-3/snowflake.png"

class letItSnow {
    constructor(imgSrc, containerSelector) {
        this.imgSrc = imgSrc
        this.targetContainer = document.querySelector(containerSelector)
    }

    getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    createTag(quantityOfSnowflakes) {
        let createIMG
        for (let index = 0; index < quantityOfSnowflakes; index++) {
            createIMG = document.createElement("img")
            createIMG.className = "snow__image"
            createIMG.src = this.imgSrc
            this.targetContainer.append(createIMG)
        }
    }

    initStartPosition() {
        this.findImgElement = document.querySelectorAll(".snow__image")
        let width = window.innerWidth

        for (let i = 0; i < this.findImgElement.length; i++) {
            this.findImgElement[i].style.left = this.getRandomValue(0, width) + 'px'
            this.findImgElement[i].style.width = this.getRandomValue(1, 3) + '%'
            this.findImgElement[i].style.top = this.getRandomValue(-1000, -35) + 'px'
        }

    }

    initMovement() {
        let height = window.innerHeight
        let deg = 0

        for (let index = 0; index < this.findImgElement.length; index++) {

            // Движение вниз
            setInterval(() => {
                let top = parseInt(this.findImgElement[index].style.top) + 1 + 'px'
                this.findImgElement[index].style.top = top
                if (parseInt(this.findImgElement[index].style.top) == height) {
                    this.findImgElement[index].style.top = -30 + 'px'
                }
            }, this.getRandomValue(25, 50));

            // Вращение
            setInterval(() => {
                this.findImgElement[index].style.transform = 'rotate(' + deg++ + 'deg)'
            }, this.getRandomValue(250, 500));
        }
    }


    renderSnow(quantityOfSnowflakes) {
        // Создаем tag снежинки на странице
        this.createTag(quantityOfSnowflakes)
        // Задаем случайную стартовую позицию каждой снежинки
        this.initStartPosition()
        // Задаем движение
        this.initMovement()
    }
}
let snowing = new letItSnow(srcSnowSVG, ".resolve")
snowing.renderSnow(200)


// ====================================================================================================================== //

// ====================================================================================================================== //
