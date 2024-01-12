// ====================================================================================================================== //
// Розробити Класи House, Dog, Bird

// --- властивості-- -
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення

// --- методи-- -
//     генерування елемента розмітки

// House
// оновлення через вказаний інтервал (збільшення або зменшення масштабу(об’єкт не рухається)

// Dog
// оновлення через вказаний інтервал (випадкове зміщення по горизонталі (зміна координати Х))

// Bird
// оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)
// ====================================================================================================================== //
const listOfObjects = [
    { x: 200, y: 0, url: '../../img/task22-2/house.png', interval: 1000 },
    { x: 100, y: 50, url: '../../img/task22-2/dog.png', interval: 1000 },
    { x: 350, y: 50, url: '../../img/task22-2/bird.png', interval: 500 },
];

class Object {
    constructor({ x, y, url }) {
        this.x = x;
        this.y = y;
        this.url = url;
    }

    getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    renderImage() {
        const img = document.createElement('img');
        img.src = this.url;
        img.setAttribute('width', '10%');
        img.style.position = 'relative';
        img.style.top = `${this.y}px`;
        img.style.left = `${this.x}px`;

        return img;
    }

    render(selector) {
        const selectorContent = document.querySelector(selector);

        this.mainContainer = document.createElement('div');
        this.mainContainer.classList.add('object_task22-2');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('object__image_task22-2');
        imgDiv.appendChild(this.renderImage());

        this.mainContainer.appendChild(imgDiv);
        selectorContent.appendChild(this.mainContainer);
    }
}

class Animation extends Object {
    constructor({ x, y, url, interval }) {
        super({ x, y, url });
        this.interval = interval;
    }

    initScale(selector) {
        this.render(selector);

        setInterval(() => {
            this.mainContainer.style.transform = 'scale(1.1)';
        }, this.interval);

        setInterval(() => {
            this.mainContainer.style.transform = 'scale(1)';
        }, this.interval + 1000);
    }

    initMoveInHorizontal(selector) {
        this.render(selector);
        const img = this.mainContainer.querySelector('img');

        setInterval(() => {
            img.style.left = `${this.x + this.getRandomValue(-15, 15)}px`;
        }, this.interval);
    }

    initRandomMove(selector) {
        this.render(selector);
        const img = this.mainContainer.querySelector('img');

        setInterval(() => {
            img.style.top = `${this.y + this.getRandomValue(-15, 15)}px`;
            img.style.left = `${this.x + this.getRandomValue(-15, 15)}px`;
        }, this.interval);
    }
}

const house = new Animation(listOfObjects[0]).initScale('.resolve22');
const dog = new Animation(listOfObjects[1]).initMoveInHorizontal('.resolve22');
const bird = new Animation(listOfObjects[2]).initRandomMove('.resolve22');



// ====================================================================================================================== //


