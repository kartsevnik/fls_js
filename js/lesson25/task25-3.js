// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
// Task 3. Create a generator that randomly generates the specified number of even numbers.

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function* generateEvenNumbers(count) {
    for (let i = 0; i < count; i++) {
        yield getRandomValue(2, 100) * 2; // Generate even number
    }
}

const howManyNumbers = getRandomValue(5, 10);

for (const number of generateEvenNumbers(howManyNumbers)) {
    console.log(number);
}
