// ====================================================================================================================== //
// Задача.
// Розробити ToDo менеджер.
// Користувач вводить текст задачі та пріоритетність.
// Відображається список доданих задач з можливістю видалення задач та сортування за пріоритетністю.
// ====================================================================================================================== //

function deleteTask() {
    this.parentElement.remove();
}

function clearAllTasks() {
    const mainContainer = document.getElementById('tasks')
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function sort() {
    // Находим все элементы с классом added-task_priority и преобразуем в массив
    const taskPriorities = Array.from(document.querySelectorAll('.added-task_priority'));

    // Получаем значение селектора для сортировки
    let order = document.getElementById(`sortByName`)

    // Метод и условие сортировки
    taskPriorities.sort((a, b) => {
        let result;
        console.log(order.value);
        if (order.value === 'ascending') {
            result = a.innerText - b.innerText;
        } else {
            result = b.innerText - a.innerText;
        }
        return result;
    });

    // Находим контейнер для задач и добавляем отсортированные задачи
    const mainContainer = document.getElementById('tasks')
    mainContainer.innerHTML = '';
    taskPriorities.forEach(priority => {
        const taskContainer = priority.parentElement;
        mainContainer.appendChild(taskContainer);
    });
}

function addTask() {
    // Находим данные задачи
    let textTask = document.getElementById(`textTask`).value
    let priorityTask = document.getElementById(`priorityTask`).value

    //Проверка на наличие текста
    if (textTask !== '') {
        //Находим контейнер куда записываем данные
        const mainContainer = document.getElementById('tasks')

        //Создаем контейнер c новой задачей
        const div = document.createElement('div')
        div.className = `added-task`

        let blockWithText = document.createElement('div')
        blockWithText.className = `added-task_text`
        blockWithText.innerText = textTask
        div.append(blockWithText)

        let blockWithPriority = document.createElement('div')
        blockWithPriority.className = `added-task_priority`

        blockWithPriority.innerText = priorityTask
        div.append(blockWithPriority)

        let button_del_task = document.createElement('button')
        button_del_task.classList.add(`btn_delete-task`)
        button_del_task.innerText = `Delete`
        button_del_task.onclick = deleteTask
        div.append(button_del_task)

        // Обнуляем значения инпутов

        textTask = document.getElementById(`textTask`)
        textTask.value = ``

        priorityTask = document.getElementById(`priorityTask`)
        priorityTask.value = ``

        mainContainer.append(div)
    }
}

document.getElementById('btn_add_task').onclick = addTask;
document.getElementById('clearAll').onclick = clearAllTasks;
document.getElementById('sort').onclick = sort;
// ====================================================================================================================== //

// ====================================================================================================================== //