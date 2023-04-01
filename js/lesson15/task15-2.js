// ====================================================================================================================== //
// Задача 2. Створити об’єкт «Авто».

// Авто

// Поля(властивості)	Марка
//                      Розмір бака
//                      Кількість наявних літрів
//                      Кількість місць
//                      Кількість пассажирів

// Методи (дії)	        Заправка на вказану кількість літрів
//                      Виведення кількості пасажирів
//                      Додавання пасажирів
//                      Висадка пасажирів

// Methods (actions) refueling for the specified number of liters
// withdrawing the number of passengers
// Adding passengers
// Landing of passengers

// ====================================================================================================================== //

function Auto(mark, tank, av_liters, seats, passengers) {
    // =========> properties:
    this.mark = mark
    this.tank = tank
    this.av_liters = av_liters
    this.seats = seats
    this.passengers = passengers
}

// =========> method:
Auto.prototype.getRefueling = function (numberOfLiters) {
    if (numberOfLiters <= this.tank - this.av_liters) {
        this.av_liters = this.av_liters + numberOfLiters
        return `Вы заправились на ${numberOfLiters} литров и в вашем баке сейчас ${this.av_liters} литров`
    } else return `Вы заправились только на ${this.tank - this.av_liters} литров, так как в вашем баке уже было ${this.av_liters} литров, остальные ${numberOfLiters - (this.tank - this.av_liters)} можете не оплачивать`
}

// =========> method:
Auto.prototype.toString = function () {
    return `Кількість пассажирів у авто: ${this.passengers}`
}

// =========> method:
Auto.prototype.getPassengers = function () {
    let getPassengers = parseInt(prompt(`Скільки пассажирів беремо?`))
    if (getPassengers <= (this.seats - this.passengers)) {
        this.passengers += getPassengers
        return `Поехали`
    } else return `Не могем, кто то пойдет пешком, так как не хватает еще ${getPassengers - (this.seats - this.passengers)} мест`
}

// =========> method:
Auto.prototype.landingPassengers = function () {
    let landingPassengers = parseInt(prompt(`Скільки пассажирів высаживаем?`))
    if (landingPassengers >= this.passengers) {
        this.passengers -= landingPassengers
        return `А ехать кто будет?`
    } else {
        this.passengers -= landingPassengers
        return `Меньше народу - больше кислороду, главное чтобы водитель не ушел. В авто осталось ${this.passengers} `
    }
    2
}

// ====================================================================================================================== //

let auto = new Auto(`Audi`, 70, 25, 5, 3)

let refueling = auto.getRefueling(50)
let passengers = auto.toString()
let addPassengers = auto.getPassengers(2)
let lostPassengers = auto.landingPassengers(2)


console.log(auto);
console.log(refueling);
console.log(passengers);
console.log(addPassengers);
console.log(lostPassengers);

// ====================================================================================================================== //
