// ====================================================================================================================== //
// Задача.
// Дано 5 елементів input.
// При введенні значення у якийсь із них необхідно автоматично заповнювати інші
// (усі попередні у спадному порядку, кожен попередній має значення на 1 менше за наступний),
// усі наступні на 1 більше(кожен наступне на 1 більше за попереднього)

// Task.
// Given 5 input items.When entering the value in one of them, it is necessary to automatically
// fill in others (all previous in descending order each previous is 1 less than the next one),
// all subsequent on 1 more (each subsequent on 1 more than the previous one)
// ====================================================================================================================== //

const allInputs = document.querySelectorAll('.inputValueNumber');

function changeValue(event) {
    const clickedValue = event.target;
    const enteredValue = parseInt(clickedValue.value); // Перетворюємо введене значення в число

    let changedPosition;
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i] === clickedValue) {
            changedPosition = i;
            break; // Зупиняємо цикл, коли знаходимо поточний input
        }
    }

    let minus = 1;
    for (let i = changedPosition - 1; i >= 0; i--) {
        allInputs[i].value = enteredValue - minus;
        minus++;
    }

    let plus = 1;
    for (let i = changedPosition + 1; i < allInputs.length; i++) {
        allInputs[i].value = enteredValue + plus;
        plus++;
    }
}

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('input', changeValue); // Використовуємо 'input' замість 'change' для реагування на введення
}

// ====================================================================================================================== //