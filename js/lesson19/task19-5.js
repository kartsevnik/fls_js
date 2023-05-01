// ====================================================================================================================== //
// Задача 5.
// Байрактар.
// З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз.
// При кліку на танк він вибухає і зникає з екрану.
// ====================================================================================================================== //
const srcTank = "../../img/task19-5/tank.png"
const srcTankWithTrator = "../../img/task19-5/tratorpullstank.png"
const srcExplosion = "../../img/task19-5/explosion.svg"

class Bairactar {
    constructor(imgSrcTank, imgSrcTankWithTrator, imgSrcExplosion, containerSelector) {
        this.imgSrcTank = imgSrcTank
        this.imgSrcTankWithTrator = imgSrcTankWithTrator
        this.imgSrcExplosion = imgSrcExplosion
        this.targetContainer = document.querySelector(containerSelector)
    }

    getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    createTank() {
        let height = window.innerHeight
        this.findImgElement = document.querySelectorAll(".tank__image")

        let createIMG = document.createElement('img')
        createIMG.className = 'tank__image'
        createIMG.src = this.imgSrcTank
        createIMG.style.top = this.getRandomValue(0, height - 100) + 'px'
        createIMG.style.left = this.getRandomValue(-400, -300) + 'px'
        return createIMG
    }

    createTankWithTrator(totalTrators) {
        let height = window.innerHeight

        for (let index = 0; index < totalTrators; index++) {
            let createIMG = document.createElement('img')
            createIMG.className = 'tank-with-trator__image'
            createIMG.src = this.imgSrcTankWithTrator
            createIMG.style.top = this.getRandomValue(0, height - 250) + 'px'
            createIMG.style.left = this.getRandomValue(-600, -400) + 'px'
            this.targetContainer.append(createIMG)
        }
        this.findImgElement = document.querySelectorAll(".tank-with-trator__image")
    }

    explosionTanks() {
        let newFindImgElement = document.querySelectorAll(".tank__image")
        let counter = newFindImgElement.length - 1

        for (let index = 0; index < newFindImgElement.length; index++) {

            newFindImgElement[index].onclick = () => {
                newFindImgElement[index].src = this.imgSrcExplosion
                setTimeout(() => {
                    newFindImgElement[index].remove()
                    counter--
                    console.log(counter);
                    if (counter == 0) {
                        console.log(`new method`);
                        this.createTankWithTrator(3)
                    }
                    newFindImgElement[newFindImgElement.length - 1].remove()
                }, 500);
            }
        }
    }


    render(totalTanks) {
        let width = window.innerWidth
        for (let i = 0; i <= totalTanks; i++) {
            let tank = this.createTank()
            for (let index = 0; index < this.findImgElement.length; index++) {
                setInterval(() => {
                    let left = parseInt(this.findImgElement[index].style.left) + 1 + 'px'
                    this.findImgElement[index].style.left = left
                    if (parseInt(this.findImgElement[index].style.left) == width + 500) {
                        this.findImgElement[index].style.left = -300 + 'px'
                    }
                }, this.getRandomValue(30, 70));

            }
            this.targetContainer.append(tank)
        }
        this.explosionTanks(totalTanks)
    }
}

// ====================================================================================================================== //

let fight = new Bairactar(srcTank, srcTankWithTrator, srcExplosion, ".resolve")
fight.render(10)

// ====================================================================================================================== //
