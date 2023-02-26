// Массив изображений
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

// Случайный выбор изображений для каждой позиции
const position1 = Math.floor(Math.random() * 4); // Случайное число от 0 до 3
const position2 = Math.floor(Math.random() * 4);
const position3 = Math.floor(Math.random() * 4);

// Вывод изображений
console.log(`Позиция 1: ${images[position1]}`);
console.log(`Позиция 2: ${images[position2]}`);
console.log(`Позиция 3: ${images[position3]}`);

// Проверка на выигрыш
switch (true) {
    case position1 === position2 && position2 === position3:
        // Если три одинаковых изображения
        switch (position1) {
            case 0: // Если первый тип изображения
                console.log("Вы выиграли 100 грн!");
                break;
            case 1:
                console.log("Вы выиграли 200 грн!");
                break;
            case 2:
                console.log("Вы выиграли 500 грн!");
                break;
            case 3:
                console.log("Вы выиграли 1000 грн!");
                break;
        }
        break;
    default:
        console.log("К сожалению, вы не выиграли.");
        break;
}
