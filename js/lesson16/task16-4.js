// ====================================================================================================================== //
// Задача 4.
// Створити клас TBankomat, який моделює роботу банкомата.
// Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень.
// Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат,
// та метод зняття деякої суми.
// ====================================================================================================================== //


class TBankomat {
    #banconota_5
    #banconota_10
    #banconota_20
    #banconota_50
    #banconota_100
    #banconota_200
    constructor(banconota_5, banconota_10, banconota_20, banconota_50, banconota_100, banconota_200) {
        this.Banconota_5 = banconota_5
        this.Banconota_10 = banconota_10
        this.Banconota_20 = banconota_20
        this.Banconota_50 = banconota_50
        this.Banconota_100 = banconota_100
        this.Banconota_200 = banconota_200
    }
    // =========> getters:
    get Banconota_5() {
        return this.#banconota_5
    }
    get Banconota_10() {
        return this.#banconota_10
    }
    get Banconota_20() {
        return this.#banconota_20
    }
    get Banconota_50() {
        return this.#banconota_50
    }
    get Banconota_100() {
        return this.#banconota_100
    }
    get Banconota_200() {
        return this.#banconota_200
    }

    // =========> setters:
    set Banconota_5(banconota_5) {
        return this.#banconota_5 = banconota_5
    }
    set Banconota_10(banconota_10) {
        return this.#banconota_10 = banconota_10
    }
    set Banconota_20(banconota_20) {
        return this.#banconota_20 = banconota_20
    }
    set Banconota_50(banconota_50) {
        return this.#banconota_50 = banconota_50
    }
    set Banconota_100(banconota_100) {
        return this.#banconota_100 = banconota_100
    }
    set Banconota_200(banconota_200) {
        return this.#banconota_200 = banconota_200
    }

    // =========> method:
    //методи знаходження максимальної суми
    getSumOfBanconotes() {
        let result =
            (this.Banconota_5 * 5) +
            (this.Banconota_10 * 10) +
            (this.Banconota_20 * 20) +
            (this.Banconota_50 * 50) +
            (this.Banconota_100 * 100) +
            (this.Banconota_200 * 20)
        return result
    }

    // =========> method:
    //методи знаходження мінімальної суми
    getMinNominal() {
        let result
        if (this.Banconota_5 > 0) {
            result = 5
        } else if (this.Banconota_10 > 0) {
            result = 10
        } else if (this.Banconota_20 > 0) {
            result = 20
        } else if (this.Banconota_50 > 0) {
            result = 50
        } else if (this.Banconota_100 > 0) {
            result = 100
        } else if (this.Banconota_200 > 0) {
            result = 200
        }
        return result
    }
    // =========> method:
    //  метод зняття деякої суми.
    removingAmount(sumOfAmount) {
        const init = sumOfAmount
        let quantityBanconotes = [0, 0, 0, 0, 0, 0]

        for (let i = 0; sumOfAmount > 200; i++) {
            if (sumOfAmount > 200) {
                sumOfAmount -= 200
                this.Banconota_200 -= 1
                quantityBanconotes[0] += 1
            }
        }

        for (let i = 0; sumOfAmount > 100; i++) {
            if (sumOfAmount > 100) {
                sumOfAmount -= 100
                this.Banconota_100 -= 1
                quantityBanconotes[1] += 1
            }
        }

        for (let i = 0; sumOfAmount > 50; i++) {
            if (sumOfAmount > 50) {
                sumOfAmount -= 50
                this.Banconota_50 -= 1
                quantityBanconotes[2] += 1
            }
        }
        for (let i = 0; sumOfAmount > 20; i++) {
            if (sumOfAmount > 20) {
                sumOfAmount -= 20
                this.Banconota_20 -= 1
                quantityBanconotes[3] += 1
            }
        }
        for (let i = 0; sumOfAmount > 10; i++) {
            if (sumOfAmount > 10) {
                sumOfAmount -= 10
                this.Banconota_10 -= 1
                quantityBanconotes[4] += 1
            }
        }
        for (let i = 0; sumOfAmount >= 5; i++) {
            if (sumOfAmount >= 5) {
                sumOfAmount -= 5
                this.Banconota_5 -= 1
                quantityBanconotes[5] += 1
            }
        }

        return `Ви запросили ${init}.
        Вам було видано: 
        ${quantityBanconotes[0]} банкнот по 200, 
        ${quantityBanconotes[1]} банкнот по 100, 
        ${quantityBanconotes[2]} банкнот по 50, 
        ${quantityBanconotes[3]} банкнот по 20, 
        ${quantityBanconotes[4]} банкнот по 10, 
        ${quantityBanconotes[5]} банкнот по 5, `
    }

}

function getRandomNumber(minV, maxV) {
    minV = 0
    maxV = 100
    return minV + Math.floor(Math.random() * maxV - minV + 1)
}

let bancomat = new TBankomat(getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber(), 40)
console.log(bancomat);
// console.log(bancomat.getSumOfBanconotes());
// console.log(bancomat.getMinNominal());
console.log(bancomat.removingAmount(7585));
// ====================================================================================================================== //

// ====================================================================================================================== //
