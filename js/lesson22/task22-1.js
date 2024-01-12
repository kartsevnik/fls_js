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
    constructor(ID, name, balance) {
        this.ID = ID
        this.name = name
        this.balance = balance
    }

    addMoney(value) {
        return this.balance += value
    }

    getMoney(value) {
        if (value > this.balance) {
            return alert(`На счету ${this.name} недостаточно средств для снятия`)
        } else return this.balance -= value
    }

    toString() {
        return `На счету абонента № ${this.ID} - ${this.name} находится ${this.balance} денежных средств`
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
    constructor(ID, name, balance, limitOfMoney, percentage) {
        super(ID, name, balance)
        this.limitOfMoney = limitOfMoney
        this.percentage = percentage
    }
    getMoney(value) {
        if (value > this.balance + this.limitOfMoney) {
            return alert(`На счету ${this.name} недостаточно средств для снятия`)
        } else return this.balance -= value
    }

    calculatePenalty(daysOverdue) {
        if (this.balance < 0) {
            // Количество дней просрочки
            daysOverdue = Math.max(daysOverdue, 0);

            // Процентная ставка
            this.percentage = this.percentage / 100;

            // Сумма пени
            return this.balance * this.percentage * daysOverdue;
        }
        return 0
    }

    toString() {
        return `На счету абонента № ${this.ID} - ${this.name} находится ${this.balance} денежных средств. Размер кредита ${this.limitOfMoney}. Процентная ставка ${this.percentage}%`
    }

}

const client1 = new Client(1, "Paganini Claudio", 15000)
const client3 = new Client(3, "Pavarotti Lucciana", 15000)
client1.getMoney(10000)
console.log(client1.toString())

const client2 = new GoldenClient(2, "Verdi Giuseppe", 10000, 200000, 5)
const client4 = new GoldenClient(4, "Verdi2 Giuseppe", 10000, 200000, 5)
client2.addMoney(220000)
client2.getMoney(120000)
console.log(client2.toString())
// console.log(client2.calculatePenalty(10))

// ====================================================================================================================== //

// Створити клас Bank, у якому зберігається масив клієнтів.
// Виконати такі операці:
//                         Вивести усіх простих клієнтів;
//                         Вивести усіх клієнтів GoldenClient;
//                         Знати сумарну кількість грошей на рахунку;

// ====================================================================================================================== //

class Bank {
    constructor() {
        this.clients = []
    }

    addClient(client) {
        this.clients.push(client)
    }

    getAllStandartClients() {
        const find = this.clients.filter((client) => !(client instanceof GoldenClient));
        console.log(find);
    }

    getAllGoldenClients() {
        const find = this.clients.filter((client) => (client instanceof GoldenClient));
        console.log(find);
    }

    getTotalBalance() {
        const TotalBalance = this.clients.reduce((totalBalance, client) => {
            return totalBalance + client.balance;
        }, 0);
        console.log(TotalBalance);
    }

}

let bank = new Bank
bank.addClient(client1)
bank.addClient(client2)
bank.addClient(client3)
bank.addClient(client4)
bank.getAllStandartClients()
bank.getAllGoldenClients()
bank.getTotalBalance()
