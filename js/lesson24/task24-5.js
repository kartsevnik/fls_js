// Задача 5. Дано список з віком учнів.
// Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.

function randomAge() {
    return Math.floor(Math.random() * 18) + 7
}

const pupils = [
    {
        name: "Mykola",
        age: randomAge()
    },
    {
        name: "Vittorio",
        age: randomAge()
    }, {
        name: "Francesco",
        age: randomAge()
    }, {
        name: "Samuel",
        age: randomAge()
    }, {
        name: "Rodrigo",
        age: randomAge()
    }, {
        name: "Mattia",
        age: randomAge()
    }, {
        name: "Peter",
        age: randomAge()
    },

];
console.log(pupils);

let map = new Map()

for (const el of pupils) {
    let elCount = map.get(el.age) || 0
    map.set(el.age, elCount + 1)
}
console.log(map);


