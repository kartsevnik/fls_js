// Задача 12.
// Зберігати у пам’яті список справ, які користувачу треба виконати(зберігати у localStorage).
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу(з використанням confirm).
// Якщо користувач натискає на «Ок», то видаляти цю задачу.

const tasks = [
    "Complete assignment for Math class",
    "Prepare presentation for History project",
    "Buy groceries",
    "Call mom",
    "Finish reading book",
    "Go for a run"
];

function saveTasksInStorage(arrayWithTasks) {
    for (let index = 0; index < arrayWithTasks.length; index++) {
        localStorage.setItem(`task${index}`, arrayWithTasks[index])
    }
}

function randomNumber(min, max) {
    let minNumber = min
    let maxNumber = max
    return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
}

function withdrawTasks() {
    let keys = Object.keys(localStorage)
    let lastTasks = keys.length - 1
    let randomNumOfTask = randomNumber(0, lastTasks)


    let randomTask = localStorage.getItem(keys[randomNumOfTask])
    if (randomTask != null) {
        if (window.confirm(`Are you finished this task?  ${randomTask}`)) {
            window.open(delTask(keys[randomNumOfTask]));
        }
    }
}

function delTask(task) {
    localStorage.removeItem(task)
}

window.onload = function () {
    saveTasksInStorage(tasks)
    var intervalId = window.setInterval(withdrawTasks, 3000);
    // clearInterval(intervalId);
}