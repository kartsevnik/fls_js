// Задача 7. Дано інформацію про відвідувачів деякого сайту
// (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.

let visitors = [
    { login: "user1" },
    { login: "user2" },
    { login: "user3" },
    { login: "user1" },
    { login: "user4" },
    { login: "user2" },
    { login: "user5" },
    { login: "user3" },
    { login: "user1" },
    { login: "user2" },
]

let map = new Map()

for (const visitor of visitors) {
    let elCount = map.get(visitor.login) || 0
    map.set(visitor.login, elCount + 1)
}
console.log(map);