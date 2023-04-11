// ====================================================================================================================== //
// Задача 3. Об’єкт “Фірма” (використати члени-класи)

// поля        назва фірми;
//             дата заснування (рік, місяць);
//             послуги (назва послуги, вартість, термін виконання);
//             адреси філіалів(країна, місто, вулиця, номер будинку);

// методи      визначення кількості років існування фірми;
//             виведення всіх філіалів фірми у вказаному місті;
//             виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

// ====================================================================================================================== //
class MakeService {
    #name
    #cost
    #execution

    constructor(name, cost, execution) {
        this.Name = name
        this.Cost = cost
        this.Execution = execution
    }

    // =========> getters:
    get Name() {
        return this.#name
    }
    get Cost() {
        return this.#cost
    }
    get Execution() {
        return this.#execution
    }

    // =========> setters:
    set Name(name) {
        return this.#name = name
    }
    set Cost(cost) {
        return this.#cost = cost
    }
    set Execution(execution) {
        return this.#execution = execution
    }
}

// =========> Data initialization
let arrayOfServices = [
    new MakeService('Lessons with an instructor', 100, 2),
    new MakeService('Tours of local attractions', 300, 4),
    new MakeService('Providing services for the transportation to the place selected by the client', 75, 1),
]
console.log(arrayOfServices);
// ====================================================================================================================== //

class MakeBranch {
    #country
    #city
    #street
    #houseNumber

    constructor(country, city, street, houseNumber) {
        this.Country = country
        this.City = city
        this.Street = street
        this.HouseNumber = houseNumber
    }

    // =========> getters:
    get Country() {
        return this.#country
    }
    get City() {
        return this.#city
    }
    get Street() {
        return this.#street
    }
    get HouseNumber() {
        return this.#houseNumber
    }

    // =========> setters:
    set Country(country) {
        return this.#country = country
    }
    set City(city) {
        return this.#city = city
    }
    set Street(street) {
        return this.#street = street
    }
    set HouseNumber(houseNumber) {
        return this.#houseNumber = houseNumber
    }
}
// =========> Data initialization
// Branch addresses (country, city, street, house number);
let arrayOfBranches = [
    new MakeBranch('Italy', `Milano`, `via Paganini`, `11`),
    new MakeBranch('Italy', `Torino`, `via Turati`, `7`),
    new MakeBranch('Italy', `Brescia`, `via Giuseppe Verdi`, `8`),
    new MakeBranch('Italy', `Como`, `vicolo Amore`, `69`),
]
console.log(arrayOfBranches);
// ====================================================================================================================== //

class Firm {
    #nameOfFirm
    #dateOfFoundation
    #services
    #branches

    constructor(nameOfFirm, dateOfFoundation, services, branches) {
        this.NameOfFirm = nameOfFirm
        this.DateOfFoundation = dateOfFoundation
        this.Services = services
        this.Branches = branches
    }
    // =========> getters:
    get NameOfFirm() {
        return this.#nameOfFirm
    }
    get DateOfFoundation() {
        return this.#dateOfFoundation
    }
    get Services() {
        return this.#services
    }
    get Branches() {
        return this.#branches
    }
    // =========> setters:
    set NameOfFirm(name) {
        return this.#nameOfFirm = name
    }
    set DateOfFoundation({ year, month }) {
        return this.#dateOfFoundation = { year, month }
    }
    set Services(services) {
        return this.#services = services
    }
    set Branches(branches) {
        return this.#branches = branches
    }

    // визначення кількості років існування фірми;
    getYearsOfExistence() {
        let now = new Date();
        let thisYear = now.getFullYear()
        let thisMonth = now.getMonth() + 1
        if (thisMonth < this.#dateOfFoundation.month) {
            return thisYear - this.#dateOfFoundation.year - 1
        } else
            return thisYear - this.#dateOfFoundation.year
    }

    // виведення всіх філіалів фірми у вказаному місті;
    findBranchesInTheCity(nameOfCity) {
        let arr = [...this.Branches]
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (this.Branches[i].City == nameOfCity) {
                result.push(this.Branches[i])
            }
        }
        return result
    }

    // виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
    findServices(amountOfMoney, period) {
        let arr = [...this.Services]
        return arr.filter(element => element.Cost < amountOfMoney && element.Execution < period)
    }

    toString() {
        return `${this.NameOfFirm} founded in ${this.DateOfFoundation.month}/${this.DateOfFoundation.year}`
    }
}
// =========> Data initialization
let libertaVita = new Firm(`Liberta Vita`, { year: 2022, month: 4 }, arrayOfServices, arrayOfBranches)
console.log(libertaVita);

console.log(libertaVita.getYearsOfExistence());
console.log(libertaVita.toString());
console.log(libertaVita.findBranchesInTheCity('Milano'));
console.log(libertaVita.findServices(200, 3));
