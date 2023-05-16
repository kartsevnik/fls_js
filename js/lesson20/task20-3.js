// ====================================================================================================================== //
// Задача.
// Дано список автомобілів
//      марка,
//      рік випуску,
//      ціна. 
// Сформувати елементи для фільтрування з використанням випадаючого списку
// (контент цих випадаючих списків сформувати у залежності від переданого списку).
// ====================================================================================================================== //
const autoList = [
    {
        model: `BMW`,
        year: 2012,
        price: 12500
    },
    {
        model: `BMW`,
        year: 2012,
        price: 2500
    },
    {
        model: `Mercedes`,
        year: 2022,
        price: 42500
    },
    {
        model: `Citroen`,
        year: 2014,
        price: 11000
    },
    {
        model: `Reno`,
        year: 2010,
        price: 2500
    },
    {
        model: `Fiat`,
        year: 2012,
        price: 5500
    },
]

class createOptions {
    constructor(arrayWithCars) {
        this.arrayWithCars = arrayWithCars
    }

    render(modelsBlock, yearsBlock) {
        console.log(this.arrayWithCars);
        this.exportOptionModels(modelsBlock)
        this.exportOptionYears(yearsBlock)
    }

    sortOptionYear() {
        let listOfOption = []

        for (const car of this.arrayWithCars) {
            listOfOption.push(car.year)
        }

        listOfOption.sort(function (a, b) {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            if (a === b) {
                return a == b;
            }

        });
        return listOfOption
    }

    sortOptionModel() {
        let listOfOption = []

        for (const car of this.arrayWithCars) {
            listOfOption.push(car.model)
        }

        listOfOption.sort()
        return listOfOption
    }

    exportOptionModels(modelsBlock) {
        // models block
        const modelSelect = document.getElementById(modelsBlock)
        // modelSelect.innerText = ``
        let sortedModels = this.sortOptionModel()
        for (let i = 0; i < this.arrayWithCars.length; i++) {
            if (sortedModels[i] == sortedModels[i - 1]) {
                continue;
            }
            let modelOption = document.createElement('option')
            modelOption.className = `optionModel`
            modelOption.value = sortedModels[i]
            modelOption.innerText = sortedModels[i]
            modelSelect.append(modelOption)
        }
    }

    exportOptionYears(yearsBlock) {
        // years block
        const yearSelect = document.getElementById(yearsBlock)
        let sortedYear = this.sortOptionYear()
        for (let i = 0; i < this.arrayWithCars.length; i++) {
            if (sortedYear[i] == sortedYear[i - 1]) {
                continue;
            }
            let yearOption = document.createElement('option')
            yearOption.className = `optionModel`
            yearOption.value = sortedYear[i]
            yearOption.innerText = sortedYear[i]
            yearSelect.append(yearOption)
        }
    }
}

function renderResult() {
    const modelValue = document.getElementById(`carModel`).value
    const yearValue = document.getElementById(`carYear`).value
    let mainContainer = document.getElementById(`resault__block`)
    mainContainer.innerText = ``

    for (const car of autoList) {
        let mainContainer = document.getElementById(`resault__block`)

        if (car.model == modelValue && car.year == yearValue) {
            const carDiv = document.createElement('div')
            carDiv.className = `car`
            let modelDiv = document.createElement('div')
            modelDiv.innerText = car.model
            carDiv.append(modelDiv)
            let yearDiv = document.createElement('div')
            yearDiv.innerText = car.year
            carDiv.append(yearDiv)
            let priceDiv = document.createElement('div')
            priceDiv.innerText = car.price + `$`
            carDiv.append(priceDiv)
            mainContainer.append(carDiv)
        }
    }
}

window.onload = function () {
    let start = new createOptions(autoList).render(`carModel`, `carYear`)
    document.getElementById(`carModel`).onchange = renderResult
    document.getElementById(`carYear`).onchange = renderResult
}

// ====================================================================================================================== //

// ====================================================================================================================== //
