// Задача 9. Дано масив показів температур. 
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Підрахувати кількість входжень кожного із показів
// Заокруглити вверх значення та підрахувати кількість різних показів.

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

let map = new Map()
for (const temp of temperatures) {
    let elCount = map.get(temp) || 0
    map.set(temp, elCount + 1)
}

console.log("The number of entry of each of the shows");
console.log(map);

let newArrOfTemp = temperatures.map(Math.ceil)


let mapSet = new Set(newArrOfTemp)
console.log(`Number of different temperatures: ${mapSet.size}`);
