// Задача 1. Дано клас PhoneNumber.
// Створити функцію перетворення до string,
// при якому на основі номера виводиться оператор(050…. to MTC, 096… to Kyivstar, ….)

class PhoneNumber {
    constructor(number) {
        this.number = number;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return this.getOperator();
        }
        return this.number;
    }


    getOperator() {
        let firstThreeChars = String(this.number);
        firstThreeChars = firstThreeChars.substring(0, 3);
        switch (firstThreeChars) {
            case "050": return "MTC";
            case "096":
            case "097": return "Kyivstar";
            case "093":
            case "063": return "Life";
            default: return "Unknown";
        }
    }

}
let phoneString = new PhoneNumber("0506531256")
let str = "Hello! Your operator is " + String(phoneString)
console.log(str);
