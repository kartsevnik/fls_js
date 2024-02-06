// Задача  1. Дано масив рядкових представлень чисел (тобто масив чисел у лапках (string).
// З використанням перевірки за допомогою регулярних виразів і груп підрахувати кількість тих,
// у яких перша і остання літери однакові.

const arrWithNuminString = ['123', '11', '500', '5002', '808', '333', '66', '71'];

// function checkRegExp(prevResult, el) {
//     const regExp = /(\b\d)(\w*)\1/g;
//     if (regExp.test(el)) {
//         prevResult++
//     } return prevResult
// }
// let res = arrWithNuminString.reduce(checkRegExp, 0)


const res = arrWithNuminString.reduce((prevResult, el) => {
    const regExp = /(\b\d)(\w*)\1/g;
    if (regExp.test(el)) {
        prevResult++;
    }
    return prevResult;
}, 0);

console.log(res); // Выведет 4


