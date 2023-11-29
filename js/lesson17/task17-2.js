// ====================================================================================================================== //
// Створити службове авто (водій, марка, номер). 
// Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
// ====================================================================================================================== //

// ====================================================================================================================== //
class Auto {
    static AutoRef
    constructor(driver, model, target) {
        if (Auto.AutoRef)
            return Auto.AutoRef

        this.driver = driver
        this.model = model
        this.target = target

        Auto.AutoRef = this


    }
    toString() {
        return `Driver: ${this.driver}; Model: ${this.model}; Target: ${this.target},`
    }
}

let result = new Auto(`Kent`, `Tesla`, `BE7720BH`)
console.log(result.toString());
let result2 = new Auto(`Kent2`, `Tesla2`, `BE7720BH-2`)
console.log(result2.toString());



// ====================================================================================================================== //

