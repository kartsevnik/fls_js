// ====================================================================================================================== //
// Створити клас Client
//       Властивості
//             ID
//             ПІБ
//             Кількість грошей на рахунку
//       Методи
//             Додавання грошей
//             Зняття грошей
//             ToString

class Client {
    constructor(ID, name, sumOfMoney) {
        this.ID = ID
        this.name = name
        this.sumOfMoney = sumOfMoney
    }

    addMoney(value) {
        return this.sumOfMoney += value
    }

    getMoney(value) {
        if (value > this.sumOfMoney) {
            return alert(`На счету ${this.name} недостаточно средств для снятия`)
        } else return this.sumOfMoney -= value
    }

    toString() {
        return `На счету абонента № ${this.ID} - ${this.name} находится ${this.sumOfMoney} денежных средств`
    }
}
// ====================================================================================================================== //
// На основі цього класу створити клас GoldenClient
//         Властивості
//                 ID
//                 ПІБ
//                 Кількість грошей на рахунку
//                 Ліміт кредитних коштів
//                 Відсоток за використання кредитних коштів
//         Методи
//                 Додавання грошей
//                 Зняття грошей
//                 Визначення пені за використання кредитних коштів
//                 ToString

class GoldenClient extends Client {
    constructor(ID, name, sumOfMoney, limitOfMoney, percentage) {
        super(ID, name, sumOfMoney)
        this.limitOfMoney = limitOfMoney
        this.percentage = percentage
    }
    getMoney(value) {
        if (value > this.sumOfMoney + this.limitOfMoney) {
            return alert(`На счету ${this.name} недостаточно средств для снятия`)
        } else return this.sumOfMoney -= value
    }

    calculatePenalty(daysOverdue) {
        if (this.sumOfMoney < 0) {
            // Количество дней просрочки
            daysOverdue = Math.max(daysOverdue, 0);

            // Процентная ставка
            this.percentage = this.percentage / 100;

            // Сумма пени
            return this.sumOfMoney * this.percentage * daysOverdue;
        }
        return 0
    }

    toString() {
        return `На счету абонента № ${this.ID} - ${this.name} находится ${this.sumOfMoney} денежных средств. Размер кредита ${this.limitOfMoney}. Процентная ставка ${this.percentage}%`
    }

    render(selector) {
        const selectorContent = document.querySelector(selector);

        // Создали общий контейнер
        this.mainContainer = document.createElement('div');
        this.mainContainer.classList.add('product')

        // Блок с изображением
        const imgDiv = document.createElement('div');
        imgDiv.classList.add(`product__image`)
        const img = document.createElement('img');
        img.src = this.imgSrc
        imgDiv.append(img)
        this.mainContainer.append(imgDiv)

        // Блок с названием
        const nameDiv = document.createElement('div');
        nameDiv.classList.add(`product__product__name`)
        nameDiv.innerText = this.name
        this.mainContainer.append(nameDiv)

        // Блок с количеством
        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add(`product__quantity`)

        const btnMinus = document.createElement('button');
        btnMinus.innerText = `-`
        btnMinus.setAttribute("disabled", "")
        btnMinus.classList.add(`button`, `minus`)
        btnMinus.onclick = this.minusProduct.bind(btnMinus, this.quantity, this.price);
        quantityDiv.append(btnMinus)

        const quantity = document.createElement('span');
        quantity.innerText = 0
        quantityDiv.append(quantity)

        const btnPlus = document.createElement('button');
        btnPlus.innerText = `+`
        btnPlus.classList.add(`button`, `plus`)
        // btnPlus.onclick = this.plusProduct
        btnPlus.onclick = this.plusProduct.bind(btnPlus, this.quantity, this.price);
        quantityDiv.append(btnPlus)

        this.mainContainer.append(quantityDiv)

        // Блок со стоимостью
        const priceDiv = document.createElement('div');
        priceDiv.classList.add(`product__price`)

        const priceTitle = document.createElement('span');
        priceTitle.classList.add(`product__price-title`)
        priceTitle.innerText = `To pay: `
        priceDiv.append(priceTitle)

        const priceSum = document.createElement('span');
        priceSum.classList.add(`product__price-sum`)
        priceSum.innerText = 0
        priceDiv.append(priceSum)

        const priceCurrency = document.createElement('span');
        priceCurrency.classList.add(`product__price-currency`)
        priceCurrency.innerText = ` $`
        priceDiv.append(priceCurrency)
        this.mainContainer.append(priceDiv)

        selectorContent.append(this.mainContainer)

    }
}

const client1 = new Client(1, "Paganini Claudio", 15000)
// client1.getMoney(10000)
// console.log(client1.toString())

const client2 = new GoldenClient(2, "Verdi Giuseppe", 10000, 200000, 5)
// // client2.addMoney(220000)
// client2.getMoney(120000)
// console.log(client2.calculatePenalty(10))
// console.log(client2.toString())
// ====================================================================================================================== //

// Створити клас Bank, у якому зберігається масив клієнтів.
// Виконати такі операці:
//                         Вивести усіх простих клієнтів;
//                         Вивести усіх клієнтів GoldenClient;
//                         Знати сумарну кількість грошей на рахунку;

// ====================================================================================================================== //


