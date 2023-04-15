// ====================================================================================================================== //
// Створити клас Нагадувач. 
// Кожні вказані кількості секунд(використати setInterval) 
// програма нагадує про якусь подію(це просто текст) 
// і також виводиться порядковий номер скільки раз вже нагадування було.
// Зробити так, щоб неможна було зробити одночасно декілька об’єктів - нагадувачів.
// Методи зупинки таймера, 
// метод зміни повідомлення без зупинки таймера.
// ====================================================================================================================== //
class Reminder {
    static verification
    static counter = 0
    constructor(text, interval) {
        if (Reminder.verification)
            return Reminder.verification

        this.text = text
        this.interval = interval

        Reminder.verification = this
    }

    initReminder() {
        let intervalID = setInterval(() => Reminder.counter++ & console.log(`${this.text} and ${Reminder.counter}`), this.interval * 1000)

    }
}
// ====================================================================================================================== //
let result = new Reminder(`text text text`, 3)
let r1 = result.initReminder()
console.log(Reminder.counter);

let test = new Reminder(`111 222 333`, 2)
let r2 = test.initReminder()
let r3 = test.initReminder()





// ====================================================================================================================== //

