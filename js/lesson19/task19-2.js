// ====================================================================================================================== //
// Задача 2. 
//Дано список спортсменів.
//Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці.
//В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.
//При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
//При натисканні на червону стрілку спортсмен переміщається у загальний список.
// ====================================================================================================================== //
const athletesList = ["Michael Jordan", "Sergey Levine", "Jack Ford", "Shakil Onyl", "Leroy Merilyn", "Luka Minelli"]
const arrowGreen = "../../img/task19-2/arrow-green.png"
const arrowRed = "../../img/task19-2/arrow-red.png"

// ====================================================================================================================== //

class athletesChoice {
    constructor(athletesList, arrowRight, arrowLeft) {
        this.athletesList = athletesList;
        this.arrowRight = arrowRight;
        this.arrowLeft = arrowLeft;
        this.checkedList = []

    }

    renderAthletes() {
        let targetContainer = document.querySelector('.athletes__all');

        for (let index = 0; index < athletesList.length; index++) {
            let cardAthlete = document.createElement('div');
            cardAthlete.className = 'athlet_left'

            let athletName = document.createElement('div')
            athletName.className = 'athlet__name'
            athletName.innerText = athletesList[index]
            cardAthlete.append(athletName)

            let athletArrow = document.createElement('div')
            athletArrow.className = 'athlet__arrow_right'
            athletArrow.onclick = this.checkAthlete.bind(this, athletesList[index])

            let athletArrowImg = document.createElement('img')
            athletArrowImg.src = this.arrowRight
            athletArrow.append(athletArrowImg)
            cardAthlete.append(athletArrow)
            targetContainer.append(cardAthlete)
        }

    }

    checkAthlete(athlet) {
        let findAthlet = this.athletesList.indexOf(athlet)
        let targetContainer = document.querySelector('.athletes__selected');

        let cardAthlete = document.createElement('div');
        cardAthlete.className = 'athlet_right'

        let athletName = document.createElement('div')
        athletName.className = 'athlet__name'
        athletName.innerText = athletesList[findAthlet]
        cardAthlete.append(athletName)

        let athletArrow = document.createElement('div')
        athletArrow.className = 'athlet__arrow_left'
        athletArrow.onclick = this.unCheckAthlete.bind(this, athletesList[findAthlet])

        let athletArrowImg = document.createElement('img')
        athletArrowImg.src = this.arrowLeft
        athletArrow.append(athletArrowImg)
        cardAthlete.append(athletArrow)
        targetContainer.append(cardAthlete)

        this.checkedList.push(this.athletesList[findAthlet])
        console.log(this.checkedList);
        this.athletesList.splice(findAthlet, 1)
        let leftList = document.querySelector('.athletes__all');
        leftList.innerText = ''
        this.renderAthletes()
    }

    unCheckAthlete(athlet) {
        let findAthlet = this.checkedList.indexOf(athlet)

        this.athletesList.push(this.checkedList[findAthlet])
        this.checkedList.splice(findAthlet, 1)

        let removeAthlet = document.querySelectorAll(`.athlet_right`)

        for (let i = 0; i < removeAthlet.length; i++) {
            let findRemoveAthlet = removeAthlet[i].innerText
            if (findRemoveAthlet == athlet) {
                removeAthlet[i].remove()
            }
        }

        let leftList = document.querySelector('.athletes__all');
        leftList.innerText = ''
        this.renderAthletes()
    }
}


let athletes = new athletesChoice(athletesList, arrowGreen, arrowRed);
athletes.renderAthletes()

// ====================================================================================================================== //
