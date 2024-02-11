// Задача 6.  Дано масив книг (назва, рік видання, author).
// Підрахувати кількість книг для кожного authorа.

let books = [
    { title: "War and Peace", year: 1869, author: "Lev Tolstoy" },
    { title: "Anna Karenina", year: 1877, author: "Lev Tolstoy" },
    { title: "Crime and Punishment", year: 1866, author: "Fedor Dostoevsky" },
    { title: "Idiot", year: 1868, author: "Fedor Dostoevsky" },
    { title: "The Karamazov brothers", year: 1880, author: "Fedor Dostoevsky" },
    { title: "Master and Margarita", year: 1940, author: "Mikhail Bulgakov" },
    { title: "dog's heart", year: 1925, author: "Mikhail Bulgakov" },
    { title: "Lord of the Flies", year: 1954, author: "William Golding" },
    { title: "1984", year: 1949, author: "George Orwell" },
    { title: "Barnyard", year: 1945, author: "George Orwell" },
]

let map = new Map()

for (const el of books) {
    let elCount = map.get(el.author) || 0
    map.set(el.author, elCount + 1)
}
console.log(map);
