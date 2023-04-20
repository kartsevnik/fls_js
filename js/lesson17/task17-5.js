// ====================================================================================================================== //
// Особиста бібліотека.
// Картотека домашньої бібліотеки. 

// Дано книги:
//  - автори (піб, рік народження, короткий опис),
//  - назва книги,
//  - жанр,
//  - видавництво (назва, реєстраційний номер, рік засування)
// ======================================================================== //

class Author {
    constructor(initData) {
        Object.assign(this, initData)
    }
    // constructor(name, dateOfBirth, description) {
    //     this.name = name;
    //     this.dateOfBirth = dateOfBirth;
    //     this.description = description;
    // }
    toString() {
        return `${this.name}, ${this.dateOfBirth}, ${this.description}`;
    }
}

class Publisher {
    constructor(initData) {
        Object.assign(this, initData)
    }
    // constructor(title, registrationNumber, yearOfExecuting) {
    //     this.title = title
    //     this.registrationNumber = registrationNumber
    //     this.yearOfExecuting = yearOfExecuting
    // }
    toString() {
        return `${this.title}, ${this.registrationNumber}, ${this.yearOfExecuting}`;
    }
}

class Book {
    constructor(author, title, genre, publisher) {
        this.author = new Author({ name: author.name, dateOfBirth: author.dateOfBirth, description: author.description })
        this.title = title;
        this.genre = genre;
        this.publisher = new Publisher({ title: publisher.title, registrationNumber: publisher.registrationNumber, yearOfExecuting: publisher.yearOfExecuting });
    }
    toString() {
        return `${this.author}, ${this.title}, ${this.genre}, ${this.publisher}`;
    }
}

let books = [
    new Book(new Author({ name: "Бхаргава А", dateOfBirth: "08.08.1974", description: "Адитья Бхаргава – инженер-программист, имеет два образования – в сфере компьютерных технологий и в сфере изящных искусств. Ведет собственный блог о программировании на adit.io." }),
        "Грокаем алгоритмы",
        "Programming",
        new Publisher({ title: "Питер", registrationNumber: "978-5-496-02541-6", yearOfExecuting: "2017" })),

    new Book(new Author({ name: "Дэвид Флэнаган", dateOfBirth: "01.02.1982", description: "Дэвид Флэнаган - программист, тратящий большую часть своего времени на написание книг о Java и JavaScript" }),
        "JavaScript. Подробное руководство",
        "Programming",
        new Publisher({ title: "O'Reilly", registrationNumber: "911-0-116-02120-6", yearOfExecuting: "1996" })),

    new Book(new Author({ name: "Эрик Фримен", dateOfBirth: "15.06.1979", description: "Эрик Фримен – современный американский писатель, специалист в области информатики, доктор философии, автор ряда популярных изданий." }),
        "Изучаем программирование на JavaScript",
        "Programming",
        new Publisher({ title: "Питер", registrationNumber: "111-0-566-01120-6", yearOfExecuting: "2017" })),

    new Book(new Author({ name: "Барбара Оакли", dateOfBirth: "24.11.1955", description: "Барбара Энн Оакли, урождённая Грим; род. 24 ноября 1955, Лодай, округ Сан-Хоакин, штат Калифорния, США — американский учёный, переводчик, профессор инженерного дела в Оклендском университете." }),
        "Думай как математик",
        "Self-development",
        new Publisher({ title: "АСТ", registrationNumber: "112-0-452-01120-4", yearOfExecuting: "2014" })),

    new Book(new Author({ name: "Майкл Микалко", dateOfBirth: "22.01.1940", description: "Майкл Микалко — эксперт по креативности с мировым именем. Будучи офицером американской армии, он собрал экспертов НАТО и учёных из разных стран, чтобы изучить и классифицировать доступные методы творческого мышления. Вместе с командой он опробовал эти методы в решении военных и социально-политических задач." }),
        "Рисовый штурм",
        "Self-development",
        new Publisher({ title: "Миф", registrationNumber: "112-0-452-01120-4", yearOfExecuting: "2015" })),
]
console.log(books);

// ====================================================================================================================== //
// Реалізувати розділи бібліотеки:
//     - спеціальна література,
//     - хобі,
//     - домашнє господарство
//     - і т.д.

//     - походження книги
//     - наявність на даний час.
// ======================================================================== //
// Організувати:
//     - додавання книг
//     - вилучення книг
//     - вибір книг за назвою
//     - вибір книг за ПІБ автора
//     - вибір книг за видавництвом.
// ======================================================================== //

class Library {
    static booksList
    constructor(booksList, sections) {
        Library.booksList = booksList;
        this.sections = sections;
    }

    // Я с этим методом намучался шо капец, но родил сам. Спасибо.
    addSection() {
        // Так вот:
        // Пушим все жанры в секции библиотеки с повторами
        for (const book of Library.booksList) {
            this.sections.push(book.genre);
        }
        // Переводим названия жанров в парамерты массива 
        this.sections = this.sections.reduce((res, item) => {
            res[item] = [];
            return res;
        }, [])


        //Получаем ключи (параметры)
        let keys = Object.keys(this.sections)
        // Тут я конвертировал секцию с массива в объект, но параметры почему то все равно остались в массиве
        // console.log(this.sections);
        // let newObj = Object.assign({}, this.sections);
        // this.sections = newObj
        // Фильтрация и распределение книг по секциям
        for (let genre = 0; genre < keys.length; genre++) {
            for (let i = 0; i < Library.booksList.length; i++) {
                if (Library.booksList[i].genre === keys[genre]) {
                    this.sections[keys[genre]].push(Library.booksList[i]);
                }
            }
        }
    }

    addBook(book) {
        Library.booksList.push(book);
    }

    removeBook(nameOfBook) {
        Library.books
    }

    toString() {
        return `${Library.booksList}, ${this.sections}`;
    }
}

let library = new Library(books, []);
let sections = library.addSection()


library.addBook(new Book(new Author({ name: "Майкл2 Микалко2", dateOfBirth: "22.01.1940", description: "Майкл Микалко — эксперт по креативности с мировым именем. Будучи офицером американской армии, он собрал экспертов НАТО и учёных из разных стран, чтобы изучить и классифицировать доступные методы творческого мышления. Вместе с командой он опробовал эти методы в решении военных и социально-политических задач." }),
    "2 Рисовый штурм",
    "Self-development",
    new Publisher({ title: "Миф", registrationNumber: "112-0-452-01120-4", yearOfExecuting: "2015" })),)
library.addBook(new Book(new Author({ name: "Майкл3 Микалко3", dateOfBirth: "22.01.1940", description: "Майкл Микалко — эксперт по креативности с мировым именем. Будучи офицером американской армии, он собрал экспертов НАТО и учёных из разных стран, чтобы изучить и классифицировать доступные методы творческого мышления. Вместе с командой он опробовал эти методы в решении военных и социально-политических задач." }),
    "3 Рисовый штурм",
    "Self-development",
    new Publisher({ title: "Миф", registrationNumber: "112-0-452-01120-4", yearOfExecuting: "2015" })),)

let sections2 = library.addSection()
console.log(library.sections);
console.log(Library.booksList);
// ====================================================================================================================== //

// ====================================================================================================================== //

// obj = { a: 1, b: 2, c: 3 }

// keys = Object.keys(obj)

// for (var i = 0, l = keys.length; i < l; i++) {
//     console.log(keys[i] + ' is ' + obj[keys[i]]);
    // keys[i] - это ключ
    // obj[keys[i]] - а это свойство, доступное по этому ключу
// }