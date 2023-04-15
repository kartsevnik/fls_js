// ====================================================================================================================== //
// Створити клас Нагадувач.
// + Кожні вказані кількості секунд(використати setInterval)
// + програма нагадує про якусь подію(це просто текст)
// + і також виводиться порядковий номер скільки раз вже нагадування було.
// + Зробити так, щоб неможна було зробити одночасно декілька об’єктів - нагадувачів.
// + Методи зупинки таймера,
// + метод зміни повідомлення без зупинки таймера.
// ====================================================================================================================== //
class Reminder {
    static verification
    static counter = 0
    static text
    static interval
    static intervalID
    // =========>
    constructor(text, interval) {
        if (Reminder.verification)
            return Reminder.verification

        Reminder.text = text
        Reminder.interval = interval
        Reminder.verification = this
    }
    // =========> method:
    static initReminder() {

        if (Reminder.initReminder.intervalID) {
            return Reminder.initReminder.intervalID
        }

        Reminder.intervalID = setInterval(() => Reminder.counter++ & console.log(`${Reminder.text} and ${Reminder.counter}`), Reminder.interval * 1000)
        Reminder.initReminder.intervalID = this
    }

    // =========> method (метод зміни повідомлення без зупинки таймера):
    static changeText(newText, timeForStart) {
        setTimeout(() => Reminder.text = newText, timeForStart * 1000)
    }

    // =========> method (метод зупинки таймера):
    static stopReminder() {
        clearInterval(Reminder.intervalID)
    }
}


// ====================================================================================================================== //
let result = new Reminder(`old text`, 3)
let initReminder = Reminder.initReminder()
let changeText = Reminder.changeText(`new text`, 3)
let stopReminder = setTimeout(() => Reminder.stopReminder(), 10000);

// ====================================================================================================================== //

